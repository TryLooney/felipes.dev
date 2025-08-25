'use client';

import { cn } from '@/lib/utils';

const GAUGE_RADIUS = 40; // Menor que o original
const GAUGE_ROTATION = -87.9537;
const SCORE_EXCELLENT = 90;
const SCORE_GOOD = 50;
const PERCENTAGE_DIVISOR = 100;

function CompactGauge({ score, label }: { score: number; label: string }) {
  const circumference = 2 * Math.PI * GAUGE_RADIUS;
  const strokeDasharray = (score / PERCENTAGE_DIVISOR) * circumference;

  const getScoreColor = (scoreValue: number) => {
    if (scoreValue >= SCORE_EXCELLENT) {
      return 'text-green-500';
    }
    if (scoreValue >= SCORE_GOOD) {
      return 'text-orange-500';
    }
    return 'text-red-500';
  };

  const getScoreStroke = (scoreValue: number) => {
    if (scoreValue >= SCORE_EXCELLENT) {
      return 'stroke-green-500';
    }
    if (scoreValue >= SCORE_GOOD) {
      return 'stroke-orange-500';
    }
    return 'stroke-red-500';
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative h-[60px] w-[60px]">
        <svg className="h-full w-full" viewBox="0 0 80 80">
          <title>Performance Gauge</title>
          {/* Base circle */}
          <circle
            className="stroke-muted-foreground/20"
            cx="40"
            cy="40"
            fill="none"
            r={GAUGE_RADIUS}
            strokeWidth="6"
          />
          {/* Progress arc */}
          <circle
            className={cn(
              getScoreStroke(score),
              'transition-all duration-1000 ease-out'
            )}
            cx="40"
            cy="40"
            fill="none"
            r={GAUGE_RADIUS}
            strokeWidth="6"
            style={{
              transform: `rotate(${GAUGE_ROTATION}deg)`,
              transformOrigin: '40px 40px',
              strokeDasharray: `${strokeDasharray}, ${circumference}`,
              strokeLinecap: 'round',
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn('font-bold font-mono text-sm', getScoreColor(score))}
          >
            {score}
          </span>
        </div>
      </div>
      <span className="text-center font-medium text-foreground/70 text-xs leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function PerformanceGaugesCompact() {
  return (
    <div className="rounded-lg bg-secondary/50 p-4">
      <div className="mb-4 text-center">
        <h4 className="font-semibold text-foreground text-sm">
          Google PageSpeed Insights
        </h4>
        <p className="text-foreground/60 text-xs">Performance real do site</p>
      </div>

      {/* Simplified version with just the main score */}
      <div className="flex items-center justify-center">
        <div className="relative h-[80px] w-[80px]">
          <svg className="h-full w-full" viewBox="0 0 120 120">
            <title>Performance Score</title>
            {/* Base circle */}
            <circle
              className="stroke-muted-foreground/20"
              cx="60"
              cy="60"
              fill="none"
              r="56"
              strokeWidth="8"
            />
            {/* Progress arc - 100% */}
            <circle
              className="stroke-green-500 transition-all duration-1000 ease-out"
              cx="60"
              cy="60"
              fill="none"
              r="56"
              strokeWidth="8"
              style={{
                transform: 'rotate(-87.9537deg)',
                transformOrigin: '60px 60px',
                strokeDasharray: '351.858, 351.858',
                strokeLinecap: 'round',
              }}
            />
          </svg>
          {/* Score text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold font-mono text-green-500 text-xl">
              100
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className="font-medium text-green-500 text-xs">
          Performance • Accessibility • Best Practices • SEO
        </span>
      </div>
    </div>
  );
}
