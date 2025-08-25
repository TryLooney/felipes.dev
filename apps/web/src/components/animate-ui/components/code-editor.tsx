'use client';

import { type UseInViewOptions, useInView } from 'motion/react';
import { useTheme } from 'next-themes';
import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CopyButton } from '@/components/animate-ui/buttons/copy';
import { cn } from '@/lib/utils';

type HighlightedContentProps = {
  html: string;
  className?: string;
};

function HighlightedContent({ html, className }: HighlightedContentProps) {
  return (
    // biome-ignore lint: Safe HTML from Shiki syntax highlighter
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

type CodeEditorProps = Omit<ComponentProps<'div'>, 'onCopy'> & {
  children: string;
  lang: string;
  themes?: {
    light: string;
    dark: string;
  };
  duration?: number;
  delay?: number;
  header?: boolean;
  dots?: boolean;
  icon?: ReactNode;
  cursor?: boolean;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  copyButton?: boolean;
  writing?: boolean;
  title?: string;
  onDone?: () => void;
  onCopy?: (content: string) => void;
};

type AnimationOptions = {
  code: string;
  duration: number;
  delay: number;
  isInView: boolean;
  writing: boolean;
  onDone?: () => void;
};

function useCodeAnimation(options: AnimationOptions) {
  const { code, duration, delay, isInView, writing, onDone } = options;
  const [visibleCode, setVisibleCode] = useState('');
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Reset states when effect runs
    setVisibleCode('');
    setIsDone(false);
    indexRef.current = 0;
    isAnimatingRef.current = false;

    if (!writing) {
      setVisibleCode(code);
      onDone?.();
      return;
    }

    if (!(code.length && isInView)) {
      return;
    }

    // Prevent multiple animations from running simultaneously
    if (isAnimatingRef.current) {
      return;
    }

    isAnimatingRef.current = true;
    const characters = Array.from(code);
    const MILLISECONDS_PER_SECOND = 1000;
    const totalDuration = duration * MILLISECONDS_PER_SECOND;
    const interval = totalDuration / characters.length;
    let intervalId: NodeJS.Timeout;

    const DELAY_MULTIPLIER = 1000;
    const timeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (indexRef.current < characters.length) {
          const currentIndex = indexRef.current;
          indexRef.current += 1;

          setVisibleCode((prev) => prev + characters[currentIndex]);
        } else {
          clearInterval(intervalId);
          setIsDone(true);
          isAnimatingRef.current = false;
          onDone?.();
        }
      }, interval);
    }, delay * DELAY_MULTIPLIER);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
      isAnimatingRef.current = false;
    };
  }, [code, duration, delay, isInView, writing, onDone]);

  return { visibleCode, isDone };
}

function CodeEditor({
  children: code,
  lang,
  themes = {
    light: 'github-light',
    dark: 'github-dark',
  },
  duration = 5,
  delay = 0,
  className,
  header = true,
  dots = true,
  icon,
  cursor = false,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  copyButton = false,
  writing = true,
  title,
  onDone,
  onCopy,
  ...props
}: CodeEditorProps) {
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<HTMLDivElement>(null);
  const [highlightedCode, setHighlightedCode] = useState('');

  const inViewResult = useInView(editorRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  const { visibleCode, isDone } = useCodeAnimation({
    code,
    duration,
    delay,
    isInView,
    writing,
    onDone,
  });

  useEffect(() => {
    if (!(visibleCode.length && isInView)) {
      return;
    }

    const loadHighlightedCode = async () => {
      try {
        const { codeToHtml } = await import('shiki');

        const highlighted = await codeToHtml(visibleCode, {
          lang,
          themes: {
            light: themes.light,
            dark: themes.dark,
          },
          defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
        });

        setHighlightedCode(highlighted);
      } catch {
        // Language loading failed - fallback to plain text
        setHighlightedCode(`<pre><code>${visibleCode}</code></pre>`);
      }
    };

    loadHighlightedCode();
  }, [lang, themes, isInView, visibleCode, resolvedTheme]);

  useEffect(() => {
    if (visibleCode && editorRef.current) {
      editorRef.current.scrollTo({
        top: editorRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCode]);

  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full max-w-full flex-col overflow-hidden rounded-xl border border-border bg-muted/50',
        className
      )}
      data-slot="code-editor"
      {...props}
    >
      {header ? (
        <div className="relative flex h-10 flex-row items-center justify-between gap-y-2 border-border/75 border-b bg-muted px-4 dark:border-border/50">
          {dots && (
            <div className="flex flex-row gap-x-2">
              <div className="size-2 rounded-full bg-red-500" />
              <div className="size-2 rounded-full bg-yellow-500" />
              <div className="size-2 rounded-full bg-green-500" />
            </div>
          )}

          {title && (
            <div
              className={cn(
                'flex flex-row items-center gap-2',
                dots &&
                  '-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2'
              )}
            >
              {icon ? (
                <div className="text-muted-foreground [&_svg]:size-3.5">
                  {typeof icon === 'string' ? (
                    <HighlightedContent html={icon} />
                  ) : (
                    icon
                  )}
                </div>
              ) : null}
              <figcaption className="flex-1 truncate text-[13px] text-muted-foreground">
                {title}
              </figcaption>
            </div>
          )}

          {copyButton ? (
            <CopyButton
              className="-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
              content={code}
              onCopy={onCopy}
              size="sm"
              variant="ghost"
            />
          ) : null}
        </div>
      ) : (
        copyButton && (
          <CopyButton
            className="absolute top-2 right-2 z-[2] bg-transparent backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/10"
            content={code}
            onCopy={onCopy}
            size="sm"
            variant="ghost"
          />
        )
      )}
      <div
        className="relative h-[calc(100%-2.75rem)] w-full flex-1 overflow-x-auto overflow-y-auto bg-black/25 p-4 font-mono text-sm"
        ref={editorRef}
        style={{
          maxHeight: 'calc(100% - 2.75rem)',
        }}
      >
        <HighlightedContent
          className={cn(
            '[&>pre]:!m-0 [&>pre]:!p-0 [&>pre]:!bg-transparent [&>pre]:!border-none [&>pre]:!overflow-hidden [&>pre]:!max-w-none min-h-0 w-0 min-w-0',
            '[&>pre,_&_code]:!bg-transparent [&_code]:!text-[13px] [&>pre,_&_code]:border-none [&>pre,_&_code]:[background:transparent_!important]',
            cursor &&
              !isDone &&
              "[&_.line:last-of-type::after]:-translate-px [&_.line:last-of-type::after]:inline-block [&_.line:last-of-type::after]:w-[1ch] [&_.line:last-of-type::after]:animate-pulse [&_.line:last-of-type::after]:content-['|']"
          )}
          html={highlightedCode}
        />
      </div>
    </div>
  );
}

export { CodeEditor, type CodeEditorProps };
