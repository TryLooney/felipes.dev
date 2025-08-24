import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type React from 'react';
import {
  type CSSProperties,
  forwardRef,
  type ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Constants
const WORD_SPLIT_REGEX = /\s+/;
const DEFAULT_CHANGE_DURATION = 0.7;
const DEFAULT_SNAP_DURATION = 800;
const SCALE_FACTOR = 1.04;
const OPACITY_INACTIVE = 0.35;
const OPACITY_ACTIVE = 1;
const TRANSFORM_OFFSET = 10;
const WORD_OFFSET_FULL = 100;
const STAGGER_DELAY = 0.03;
const STAGGER_DELAY_LARGE = 0.05;
const DURATION_MULTIPLIER_SMALL = 0.6;
const DURATION_MULTIPLIER_MEDIUM = 0.8;
const DURATION_MULTIPLIER_LARGE = 0.9;
const ENTRANCE_DURATION = 0.5;
const ENTRANCE_STAGGER = 0.06;
const ENTRANCE_DELAY_OFFSET = 0.2;
const PROGRESS_PERCENTAGE = 100;
const ANIMATION_DELAY_SHORT = 10;
const TRANSFORM_Y_OFFSET = 20;
const PARALLAX_Y_OFFSET = 1;
const SECTION_THRESHOLD = 0.3; // Threshold for section detection

type Section = {
  id?: string;
  background: string;
  leftLabel?: ReactNode;
  title: string | ReactNode;
  rightLabel?: ReactNode;
  renderBackground?: (active: boolean, previous: boolean) => ReactNode;
};

type Colors = Partial<{
  text: string;
  overlay: string;
  pageBg: string;
  stageBg: string;
}>;

type Durations = Partial<{
  change: number; // section change animation
  snap: number; // programmatic scroll duration (ms)
}>;

export type FullScreenFXAPI = {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  getIndex: () => number;
  refresh: () => void;
};

export type FullScreenFXProps = {
  sections: Section[];
  className?: string;
  style?: CSSProperties;

  // Layout
  fontFamily?: string;
  header?: ReactNode;
  footer?: ReactNode;
  gap?: number; // rem
  gridPaddingX?: number; // rem

  showProgress?: boolean;
  debug?: boolean;

  // Motion
  durations?: Durations;
  reduceMotion?: boolean;
  smoothScroll?: boolean; // if you use Lenis, set to true and install lenis

  // Background transition
  bgTransition?: 'fade' | 'wipe'; // default "fade"
  parallaxAmount?: number; // % for outgoing bg (fade mode uses a tiny y drift)

  // Controlled index
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  initialIndex?: number;

  // Colors
  colors?: Colors;

  // Imperative API
  apiRef?: React.Ref<FullScreenFXAPI>;
  ariaLabel?: string;
};

const clamp = (n: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, n));

// Helper component for collecting word refs
const WordsCollector = ({ onReady }: { onReady: () => void }) => {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
};

export const FullScreenScrollFX = forwardRef<HTMLDivElement, FullScreenFXProps>(
  (
    {
      sections,
      className,
      style,

      fontFamily = '"Rubik Wide", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      header,
      footer,
      gap = 1,
      gridPaddingX = 2,

      showProgress = true,
      debug = false,

      durations = { change: 0.7, snap: 800 },
      reduceMotion,
      // smoothScroll = false, // enable if you install Lenis (unused parameter)

      bgTransition = 'fade',
      parallaxAmount = 4,

      currentIndex,
      onIndexChange,
      initialIndex = 0,

      colors = {
        text: 'rgba(245,245,245,0.92)',
        overlay: 'rgba(0,0,0,0.35)',
        pageBg: '#ffffff',
        stageBg: '#000000',
      },

      apiRef,
      ariaLabel = 'Full screen scroll slideshow',
    },
    ref
  ) => {
    const total = sections.length;
    const [localIndex, setLocalIndex] = useState(
      clamp(initialIndex, 0, Math.max(0, total - 1))
    );
    const isControlled = typeof currentIndex === 'number';
    const index = isControlled
      ? clamp(currentIndex ?? 0, 0, Math.max(0, total - 1))
      : localIndex;

    const rootRef = useRef<HTMLElement | null>(null);
    const fixedRef = useRef<HTMLDivElement | null>(null);
    const fixedSectionRef = useRef<HTMLDivElement | null>(null);

    const bgRefs = useRef<HTMLElement[]>([]);
    const wordRefs = useRef<HTMLSpanElement[][]>([]);

    const leftTrackRef = useRef<HTMLDivElement | null>(null);
    const rightTrackRef = useRef<HTMLDivElement | null>(null);
    const leftItemRefs = useRef<HTMLElement[]>([]);
    const rightItemRefs = useRef<HTMLElement[]>([]);

    const progressFillRef = useRef<HTMLDivElement | null>(null);
    const currentNumberRef = useRef<HTMLSpanElement | null>(null);

    const stRef = useRef<ScrollTrigger | null>(null);
    const lastIndexRef = useRef(index);
    const isAnimatingRef = useRef(false);
    const isSnappingRef = useRef(false);
    const sectionTopRef = useRef<number[]>([]);

    // prefers-reduced-motion
    const prefersReduced = useMemo(() => {
      if (typeof window === 'undefined') {
        return false;
      }
      return (
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
      );
    }, []);
    const motionOff = reduceMotion ?? prefersReduced;

    // Split words for center title
    const tempWordBucket = useRef<HTMLSpanElement[]>([]);
    const splitWords = useCallback((text: string) => {
      const words = text.split(WORD_SPLIT_REGEX).filter(Boolean);
      return words.map((w, i) => (
        <span
          className="fx-word-mask"
          key={`word-${w.replace(/\W/g, '')}-${i}`}
        >
          <span
            className="fx-word"
            ref={(el) => {
              if (el) {
                tempWordBucket.current.push(el);
              }
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ));
    }, []);

    // Compute scroll snap positions
    const computePositions = useCallback(() => {
      const el = fixedSectionRef.current;
      if (!el) {
        return;
      }
      const top = el.offsetTop;
      const h = el.offsetHeight;
      const arr: number[] = [];
      for (let i = 0; i < total; i++) {
        arr.push(top + (h * i) / total);
      }
      sectionTopRef.current = arr;
    }, [total]);

    // Declare measureRAF first
    const measureRAF = useCallback((fn: () => void) => {
      if (typeof window === 'undefined') {
        return;
      }
      requestAnimationFrame(() => requestAnimationFrame(fn));
    }, []);

    // Align lists: center active row
    const measureAndCenterLists = useCallback(
      (toIndex = index, animate = true) => {
        const centerTrack = (
          container: HTMLDivElement | null,
          items: HTMLElement[],
          isRight: boolean
        ) => {
          if (!container || items.length === 0) {
            return;
          }
          const first = items[0] as HTMLElement;
          const second = items[1] as HTMLElement;
          const contRect = container.getBoundingClientRect();
          let rowH = first.getBoundingClientRect().height;
          if (second) {
            // more accurate: distance between rows includes gap
            rowH =
              second.getBoundingClientRect().top -
              first.getBoundingClientRect().top;
          }
          // center math
          const targetY = contRect.height / 2 - rowH / 2 - toIndex * rowH;
          const prop = isRight ? rightTrackRef : leftTrackRef;
          if (!prop.current) {
            return;
          }
          const changeDuration = durations.change ?? DEFAULT_CHANGE_DURATION;
          if (animate) {
            gsap.to(prop.current, {
              y: targetY,
              duration: changeDuration * DURATION_MULTIPLIER_LARGE,
              ease: 'power3.out',
            });
          } else {
            gsap.set(prop.current, { y: targetY });
          }
        };

        measureRAF(() => {
          measureRAF(() => {
            centerTrack(leftTrackRef.current, leftItemRefs.current, false);
            centerTrack(rightTrackRef.current, rightItemRefs.current, true);
          });
        });
      },
      [index, durations.change, measureRAF]
    );

    // ScrollTrigger update handler
    const handleScrollUpdate = useCallback(
      (self: ScrollTrigger) => {
        if (motionOff || isSnappingRef.current) {
          return;
        }
        const prog = self.progress;

        // Better section detection with threshold
        const rawSection = prog * total;
        const currentSection = Math.floor(rawSection);
        const sectionProgress = rawSection - currentSection;

        let target = currentSection;

        // Use threshold to determine when to switch sections
        if (sectionProgress > SECTION_THRESHOLD && currentSection < total - 1) {
          target = currentSection + 1;
        } else if (
          sectionProgress < 1 - SECTION_THRESHOLD &&
          currentSection > 0
        ) {
          target = currentSection;
        }

        target = Math.min(total - 1, Math.max(0, target));

        // More responsive section detection
        if (
          target !== lastIndexRef.current &&
          !isAnimatingRef.current &&
          !isSnappingRef.current
        ) {
          // Update index state
          if (!isControlled) {
            setLocalIndex(target);
          }
          onIndexChange?.(target);
          lastIndexRef.current = target;

          // Trigger visual changes only during natural scroll (not programmatic)
          changeSectionRef.current?.(target);
        }

        // Update progress bar in real-time
        if (progressFillRef.current) {
          const p = prog * PROGRESS_PERCENTAGE;
          progressFillRef.current.style.width = `${p}%`;
        }

        // Update current number display
        if (currentNumberRef.current) {
          currentNumberRef.current.textContent = String(
            Math.min(target + 1, total)
          ).padStart(2, '0');
        }
      },
      [motionOff, total, isControlled, onIndexChange]
    );

    // ScrollTrigger for pinning + index step detection
    useLayoutEffect(() => {
      if (typeof window === 'undefined') {
        return;
      }
      const fixed = fixedRef.current;
      const fs = fixedSectionRef.current;
      if (!(fixed && fs) || total === 0) {
        return;
      }

      // initial bg states - wait for refs to be populated
      const initBackgrounds = () => {
        const validBgs = bgRefs.current.filter(Boolean);
        if (validBgs.length > 0) {
          gsap.set(validBgs, {
            opacity: 0,
            scale: SCALE_FACTOR,
            yPercent: 0,
          });
          if (validBgs[index]) {
            gsap.set(validBgs[index], { opacity: 1, scale: 1 });
          }
        } else {
          // Retry after a short delay if refs aren't ready
          setTimeout(initBackgrounds, 50);
        }
      };

      initBackgrounds();

      // initial center words
      for (const [sIdx, words] of wordRefs.current.entries()) {
        for (const w of words) {
          gsap.set(w, {
            yPercent: sIdx === index ? 0 : WORD_OFFSET_FULL,
            opacity: sIdx === index ? 1 : 0,
          });
        }
      }

      computePositions();
      measureAndCenterLists(index, false);

      const st = ScrollTrigger.create({
        trigger: fs,
        start: 'top top',
        end: 'bottom bottom',
        pin: fixed,
        pinSpacing: true,
        scrub: 0.1, // Add smooth scrubbing
        anticipatePin: 1, // Better pin performance
        refreshPriority: -1, // Lower refresh priority
        onUpdate: handleScrollUpdate,
        onRefresh: () => {
          computePositions();
          measureAndCenterLists(lastIndexRef.current, false);
        },
      });

      stRef.current = st;

      // initial jump if needed
      if (initialIndex && initialIndex > 0 && initialIndex < total) {
        requestAnimationFrame(() => goToRef.current?.(initialIndex, false));
      }

      // handle resize with debouncing
      let resizeTimeout: NodeJS.Timeout;
      const ro = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          computePositions();
          measureAndCenterLists(lastIndexRef.current, false);
          ScrollTrigger.refresh();
        }, 100); // Debounce resize events
      });
      ro.observe(fs);

      return () => {
        ro.disconnect();
        st.kill();
        stRef.current = null;
      };
    }, [
      total,
      initialIndex,
      index,
      computePositions,
      measureAndCenterLists,
      handleScrollUpdate,
    ]);

    // Helper functions for section change
    const updateProgress = useCallback(
      (to: number) => {
        if (currentNumberRef.current) {
          currentNumberRef.current.textContent = String(to + 1).padStart(
            2,
            '0'
          );
        }
        if (progressFillRef.current) {
          const p = (to / (total - 1 || 1)) * PROGRESS_PERCENTAGE;
          progressFillRef.current.style.width = `${p}%`;
        }
      },
      [total]
    );

    const animateWords = useCallback(
      (from: number, to: number, down: boolean, duration: number) => {
        const outWords = wordRefs.current[from] || [];
        const inWords = wordRefs.current[to] || [];

        if (outWords.length) {
          gsap.to(outWords, {
            yPercent: down ? -WORD_OFFSET_FULL : WORD_OFFSET_FULL,
            opacity: 0,
            duration: duration * DURATION_MULTIPLIER_SMALL,
            stagger: down ? STAGGER_DELAY : -STAGGER_DELAY,
            ease: 'power3.out',
          });
        }
        if (inWords.length) {
          gsap.set(inWords, {
            yPercent: down ? WORD_OFFSET_FULL : -WORD_OFFSET_FULL,
            opacity: 0,
          });
          gsap.to(inWords, {
            yPercent: 0,
            opacity: 1,
            duration,
            stagger: down ? STAGGER_DELAY_LARGE : -STAGGER_DELAY_LARGE,
            ease: 'power3.out',
          });
        }
      },
      []
    );

    const animateBackgrounds = useCallback(
      (from: number, to: number, down: boolean, duration: number) => {
        const prevBg = bgRefs.current[from];
        const newBg = bgRefs.current[to];

        // Debug logging
        if (debug) {
          console.log('Animating backgrounds:', {
            from,
            to,
            prevBg: !!prevBg,
            newBg: !!newBg,
          });
        }

        if (bgTransition === 'fade') {
          if (newBg) {
            gsap.set(newBg, {
              opacity: 0,
              scale: SCALE_FACTOR,
              yPercent: down ? PARALLAX_Y_OFFSET : -PARALLAX_Y_OFFSET,
            });
            gsap.to(newBg, {
              opacity: 1,
              scale: 1,
              yPercent: 0,
              duration,
              ease: 'power2.out',
            });
          }
          if (prevBg) {
            gsap.to(prevBg, {
              opacity: 0,
              yPercent: down ? -parallaxAmount : parallaxAmount,
              duration,
              ease: 'power2.out',
            });
          }
        } else {
          // optional wipe mode
          if (newBg) {
            gsap.set(newBg, {
              opacity: 1,
              clipPath: down ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
              scale: 1,
              yPercent: 0,
            });
            gsap.to(newBg, {
              clipPath: 'inset(0 0 0 0)',
              duration,
              ease: 'power3.out',
            });
          }
          if (prevBg) {
            gsap.to(prevBg, {
              opacity: 0,
              duration: duration * DURATION_MULTIPLIER_MEDIUM,
              ease: 'power2.out',
            });
          }
        }
      },
      [bgTransition, parallaxAmount, debug]
    );

    const animateListItems = useCallback((to: number, duration: number) => {
      for (const [i, el] of leftItemRefs.current.entries()) {
        if (el instanceof HTMLElement) {
          el.classList.toggle('active', i === to);
          gsap.to(el, {
            opacity: i === to ? OPACITY_ACTIVE : OPACITY_INACTIVE,
            x: i === to ? TRANSFORM_OFFSET : 0,
            duration: duration * DURATION_MULTIPLIER_SMALL,
            ease: 'power3.out',
          });
        }
      }
      for (const [i, el] of rightItemRefs.current.entries()) {
        if (el instanceof HTMLElement) {
          el.classList.toggle('active', i === to);
          gsap.to(el, {
            opacity: i === to ? OPACITY_ACTIVE : OPACITY_INACTIVE,
            x: i === to ? -TRANSFORM_OFFSET : 0,
            duration: duration * DURATION_MULTIPLIER_SMALL,
            ease: 'power3.out',
          });
        }
      }
    }, []);

    // Section change visuals
    const changeSection = useCallback(
      (to: number) => {
        if (to === lastIndexRef.current || isAnimatingRef.current) {
          return;
        }
        const from = lastIndexRef.current;
        const down = to > from;
        isAnimatingRef.current = true;

        if (!isControlled) {
          setLocalIndex(to);
        }
        onIndexChange?.(to);

        updateProgress(to);

        const D = durations.change ?? DEFAULT_CHANGE_DURATION;

        animateWords(from, to, down, D);
        animateBackgrounds(from, to, down, D);
        measureAndCenterLists(to, true);
        animateListItems(to, D);

        gsap.delayedCall(D, () => {
          lastIndexRef.current = to;
          isAnimatingRef.current = false;
        });
      },
      [
        isControlled,
        onIndexChange,
        updateProgress,
        durations.change,
        animateWords,
        animateBackgrounds,
        measureAndCenterLists,
        animateListItems,
      ]
    );

    // programmatic navigation
    // Forward declarations for functions
    const goToRef = useRef<((to: number, withScroll?: boolean) => void) | null>(
      null
    );
    const changeSectionRef = useRef<((to: number) => void) | null>(null);

    const goTo = useCallback(
      (to: number, withScroll = true) => {
        const clamped = clamp(to, 0, total - 1);

        if (clamped === lastIndexRef.current) {
          return; // Already at target section
        }

        isSnappingRef.current = true;

        const pos = sectionTopRef.current[clamped];
        const snapMs = durations.snap ?? DEFAULT_SNAP_DURATION;

        // Always trigger the visual changes immediately
        changeSection(clamped);

        if (withScroll && typeof window !== 'undefined' && pos !== undefined) {
          // Use GSAP for smoother scrolling
          gsap.to(window, {
            scrollTo: { y: pos, autoKill: false },
            duration: snapMs / 1000, // Convert to seconds
            ease: 'power2.out',
            onComplete: () => {
              isSnappingRef.current = false;
            },
          });
        } else {
          setTimeout(() => {
            isSnappingRef.current = false;
          }, ANIMATION_DELAY_SHORT);
        }
      },
      [total, durations.snap, changeSection]
    );

    // Set the refs after declaration
    goToRef.current = goTo;
    changeSectionRef.current = changeSection;

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    useImperativeHandle(apiRef, () => ({
      next,
      prev,
      goTo,
      getIndex: () => index,
      refresh: () => ScrollTrigger.refresh(),
    }));

    // click/hover on list items
    const handleJump = useCallback((i: number) => goTo(i), [goTo]);
    const handleLoadedStagger = useCallback(() => {
      // soft entrance for lists at mount
      for (const [i, el] of leftItemRefs.current.entries()) {
        if (el instanceof HTMLElement) {
          gsap.fromTo(
            el,
            { opacity: 0, y: TRANSFORM_Y_OFFSET },
            {
              opacity: i === index ? OPACITY_ACTIVE : OPACITY_INACTIVE,
              y: 0,
              duration: ENTRANCE_DURATION,
              delay: i * ENTRANCE_STAGGER,
              ease: 'power3.out',
            }
          );
        }
      }
      for (const [i, el] of rightItemRefs.current.entries()) {
        if (el instanceof HTMLElement) {
          gsap.fromTo(
            el,
            { opacity: 0, y: TRANSFORM_Y_OFFSET },
            {
              opacity: i === index ? OPACITY_ACTIVE : OPACITY_INACTIVE,
              y: 0,
              duration: ENTRANCE_DURATION,
              delay: ENTRANCE_DELAY_OFFSET + i * ENTRANCE_STAGGER,
              ease: 'power3.out',
            }
          );
        }
      }
    }, [index]);

    // mount entrance
    useEffect(() => {
      handleLoadedStagger();
      measureAndCenterLists(index, false);
    }, [handleLoadedStagger, measureAndCenterLists, index]);

    // CSS vars
    const cssVars: CSSProperties = {
      '--fx-font': fontFamily,
      '--fx-text': colors.text ?? 'rgba(245,245,245,0.92)',
      '--fx-overlay': colors.overlay ?? 'rgba(0,0,0,0.35)',
      '--fx-page-bg': colors.pageBg ?? '#fff',
      '--fx-stage-bg': colors.stageBg ?? '#000',
      '--fx-gap': `${gap}rem`,
      '--fx-grid-px': `${gridPaddingX}rem`,
      '--fx-row-gap': '10px',
    } as CSSProperties & Record<string, string>;

    return (
      <section
        aria-label={ariaLabel}
        className={['fx', className].filter(Boolean).join(' ')}
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === 'function') {
            ref(node as HTMLDivElement);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node as HTMLDivElement;
          }
        }}
        style={{ ...cssVars, ...style }}
      >
        <div className="fx-scroll">
          <div className="fx-fixed-section" ref={fixedSectionRef}>
            <div className="fx-fixed" ref={fixedRef}>
              {/* Backgrounds */}
              <div aria-hidden="true" className="fx-bgs">
                {sections.map((s, i) => (
                  <div className="fx-bg" key={s.id ?? i}>
                    {s.renderBackground ? (
                      s.renderBackground(
                        index === i,
                        lastIndexRef.current === i
                      )
                    ) : (
                      <>
                        <div
                          className="fx-bg-img"
                          ref={(el) => {
                            if (el) {
                              bgRefs.current[i] = el;
                            }
                          }}
                          style={{
                            backgroundImage: `url(${s.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '120%',
                            position: 'absolute',
                            inset: '-10% 0 -10% 0',
                            filter: 'brightness(0.8)',
                            opacity: 0,
                            willChange: 'transform, opacity',
                          }}
                        />
                        <div className="fx-bg-overlay" />
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div className="fx-grid">
                {/* Header */}
                {header && <div className="fx-header">{header}</div>}

                {/* Content (lists + center) */}
                <div className="fx-content">
                  {/* Left list */}
                  <ul className="fx-left">
                    <div className="fx-track" ref={leftTrackRef}>
                      {sections.map((s, i) => (
                        <li key={`L-${s.id ?? i}`}>
                          <button
                            aria-pressed={i === index}
                            className={`fx-item fx-left-item ${i === index ? 'active' : ''}`}
                            onClick={() => handleJump(i)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleJump(i);
                              }
                            }}
                            ref={(el) => {
                              if (el) {
                                leftItemRefs.current[i] = el as HTMLElement;
                              }
                            }}
                            type="button"
                          >
                            {s.leftLabel}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>

                  {/* Center title (masked words if string) */}
                  <div className="fx-center">
                    {sections.map((s, sIdx) => {
                      tempWordBucket.current = [];
                      const isString = typeof s.title === 'string';
                      return (
                        <div
                          className={`fx-featured ${sIdx === index ? 'active' : ''}`}
                          key={`C-${s.id ?? sIdx}`}
                        >
                          <h3 className="fx-featured-title">
                            {isString ? splitWords(s.title as string) : s.title}
                          </h3>
                          <WordsCollector
                            onReady={() => {
                              if (tempWordBucket.current.length) {
                                wordRefs.current[sIdx] = [
                                  ...tempWordBucket.current,
                                ];
                              }
                              tempWordBucket.current = [];
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Right list */}
                  <ul className="fx-right">
                    <div className="fx-track" ref={rightTrackRef}>
                      {sections.map((s, i) => (
                        <li key={`R-${s.id ?? i}`}>
                          <button
                            aria-pressed={i === index}
                            className={`fx-item fx-right-item ${i === index ? 'active' : ''}`}
                            onClick={() => handleJump(i)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleJump(i);
                              }
                            }}
                            ref={(el) => {
                              if (el) {
                                rightItemRefs.current[i] = el as HTMLElement;
                              }
                            }}
                            type="button"
                          >
                            {s.rightLabel}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>

                {/* Footer + progress */}
                <div className="fx-footer">
                  {footer && <div className="fx-footer-title">{footer}</div>}
                  {showProgress && (
                    <div className="fx-progress">
                      <div className="fx-progress-numbers">
                        <span ref={currentNumberRef}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{String(total).padStart(2, '0')}</span>
                      </div>
                      <div className="fx-progress-bar">
                        <div
                          className="fx-progress-fill"
                          ref={progressFillRef}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>
          {`
          .fx {
            width: 100%;
            overflow: hidden;
            background: var(--fx-page-bg);
            color: #000;
            font-family: var(--fx-font);
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }



          .fx-fixed-section { height: ${Math.max(1, total)}00vh; position: relative; }
          .fx-fixed { position: sticky; top: 0; height: 100vh; width: 100%; overflow: hidden; background: var(--fx-page-bg); }

          .fx-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: var(--fx-gap);
            padding: 0 var(--fx-grid-px);
            position: relative;
            height: 100%;
            z-index: 2;
          }

          .fx-bgs { position: absolute; inset: 0; background: var(--fx-stage-bg); z-index: 1; }
          .fx-bg { position: absolute; inset: 0; }
          .fx-bg-img {
            position: absolute; inset: -10% 0 -10% 0;
            width: 100%; height: 120%;
            filter: brightness(0.8);
            opacity: 0;
            will-change: transform, opacity;
          }
          .fx-bg-overlay { position: absolute; inset: 0; background: var(--fx-overlay); }

          .fx-header {
            grid-column: 1 / 13; align-self: start; padding-top: 6vh;
            font-size: clamp(2rem, 9vw, 9rem); line-height: 0.86; text-align: center; color: var(--fx-text);
          }
          .fx-header > * { display: block; }

          .fx-content {
            grid-column: 1 / 13;
            position: absolute; inset: 0;
            display: grid; grid-template-columns: 1fr 1.3fr 1fr; /* L 30% / C 40% / R 30% vibe */
            align-items: center;
            height: 100%;
            padding: 0 var(--fx-grid-px);
          }

          .fx-left, .fx-right {
            height: 60vh; /* gives us room to center the active row */
            overflow: hidden;
            display: grid; align-content: center;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .fx-left { justify-items: start; }
          .fx-right { justify-items: end; }
          .fx-left li, .fx-right li {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .fx-track { will-change: transform; }

          .fx-item {
            color: var(--fx-text);
            font-weight: 800;
            letter-spacing: 0em;
            line-height: 1;
            margin: calc(var(--fx-row-gap) / 2) 0;
            opacity: 0.35;
            transition: opacity 0.3s ease, transform 0.3s ease;
            position: relative;
            font-size: clamp(1rem, 2.4vw, 1.8rem);
            user-select: none;
            cursor: pointer;
            background: transparent;
            border: none;
            padding: 0;
            text-align: inherit;
            font-family: inherit;
            text-transform: inherit;
          }
          .fx-left-item.active, .fx-right-item.active { opacity: 1; }
          .fx-left-item.active { transform: translateX(10px); padding-left: 16px; }
          .fx-right-item.active { transform: translateX(-10px); padding-right: 16px; }

          .fx-left-item.active::before,
          .fx-right-item.active::after {
            content: "";
            position: absolute; top: 50%; transform: translateY(-50%);
            width: 6px; height: 6px; background: var(--fx-text); border-radius: 50%;
          }
          .fx-left-item.active::before { left: 0; }
          .fx-right-item.active::after { right: 0; }

          .fx-center {
            display: grid; place-items: center; text-align: center; height: 60vh; overflow: hidden;
          }
          .fx-featured { position: absolute; opacity: 0; visibility: hidden; }
          .fx-featured.active { opacity: 1; visibility: visible; }
          .fx-featured-title {
            margin: 0; color: var(--fx-text);
            font-weight: 900; letter-spacing: -0.01em;
            font-size: clamp(2rem, 7.5vw, 6rem);
          }
          .fx-word-mask { display: inline-block; overflow: hidden; vertical-align: middle; }
          .fx-word { display: inline-block; vertical-align: middle; }

          .fx-footer {
            grid-column: 1 / 13; align-self: end; padding-bottom: 5vh; text-align: center;
          }
          .fx-footer-title { color: var(--fx-text); font-size: clamp(1.6rem, 7vw, 7rem); font-weight: 900; letter-spacing: -0.01em; line-height: 0.9; }
          .fx-progress { width: 200px; height: 2px; margin: 1rem auto 0; background: rgba(245,245,245,0.28); position: relative; }
          .fx-progress-fill { position: absolute; inset: 0 auto 0 0; width: 0%; background: var(--fx-text); height: 100%; transition: width 0.3s ease; }
          .fx-progress-numbers { position: absolute; inset: auto 0 100% 0; display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--fx-text); }



          @media (max-width: 900px) {
            .fx-content {
              grid-template-columns: 1fr; row-gap: 3vh;
              place-items: center;
            }
            .fx-left, .fx-right, .fx-center { height: auto; }
            .fx-left, .fx-right { justify-items: center; }
            .fx-left li, .fx-right li { text-align: center; }
            .fx-track { transform: none !important; }
          }
        `}
        </style>
      </section>
    );
  }
);

FullScreenScrollFX.displayName = 'FullScreenScrollFX';
