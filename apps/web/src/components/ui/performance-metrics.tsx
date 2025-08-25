'use client';

import { cn } from '@/lib/utils';

type MetricProps = {
  score: number;
  label: string;
  value: string;
  description?: string;
};

type PerformanceMetricsProps = {
  className?: string;
  showFireworks?: boolean;
};

const GAUGE_RADIUS = 56;
const GAUGE_ROTATION = -87.9537;
const SCORE_EXCELLENT = 90;
const SCORE_GOOD = 50;
const PERCENTAGE_DIVISOR = 100;

function PerformanceGauge({ score, label }: { score: number; label: string }) {
  // Calcular o stroke-dasharray baseado no score (0-100)
  const circumference = 2 * Math.PI * GAUGE_RADIUS;
  const strokeDasharray = (score / PERCENTAGE_DIVISOR) * circumference;

  // Determinar a cor baseada no score
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
    <div className="flex flex-col items-center">
      <div className="relative h-[120px] w-[120px]">
        <svg className="h-full w-full" viewBox="0 0 120 120">
          <title>Performance Gauge</title>
          {/* Base circle */}
          <circle
            className="stroke-muted-foreground/20"
            cx="60"
            cy="60"
            fill="none"
            r={GAUGE_RADIUS}
            strokeWidth="8"
          />
          {/* Progress arc */}
          <circle
            className={cn(
              getScoreStroke(score),
              'transition-all duration-1000 ease-out'
            )}
            cx="60"
            cy="60"
            fill="none"
            r={GAUGE_RADIUS}
            strokeWidth="8"
            style={{
              transform: `rotate(${GAUGE_ROTATION}deg)`,
              transformOrigin: '60px 60px',
              strokeDasharray: `${strokeDasharray}, ${circumference}`,
              strokeLinecap: 'round',
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn('font-bold font-mono text-2xl', getScoreColor(score))}
          >
            {score}
          </span>
        </div>
      </div>
      <span className="mt-2 text-center font-medium text-foreground text-sm">
        {label}
      </span>
    </div>
  );
}

function MetricCard({ score, label, value, description }: MetricProps) {
  const getScoreColor = (scoreValue: number) => {
    if (scoreValue >= SCORE_EXCELLENT) {
      return 'text-green-500';
    }
    if (scoreValue >= SCORE_GOOD) {
      return 'text-orange-500';
    }
    return 'text-red-500';
  };

  return (
    <div className="rounded-lg bg-secondary/50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'h-3 w-3 rounded-full',
              (() => {
                if (score >= SCORE_EXCELLENT) {
                  return 'bg-green-500';
                }
                if (score >= SCORE_GOOD) {
                  return 'bg-orange-500';
                }
                return 'bg-red-500';
              })()
            )}
          />
          <span className="font-medium text-foreground text-sm">{label}</span>
        </div>
        <span className={cn('font-bold text-lg', getScoreColor(score))}>
          {value}
        </span>
      </div>
      {description && (
        <p className="mt-2 text-foreground/60 text-xs leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function Fireworks() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="firework" />
      <div className="firework firework-delayed" />
      <style jsx>{`
        .firework {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          animation: firework-bang 1s ease-out infinite,
                     firework-gravity 1s ease-in infinite,
                     firework-position 5s linear infinite;
        }
        
        .firework-delayed {
          animation-delay: 1.25s;
          animation-duration: 1.25s, 1.25s, 6.25s;
        }

        @keyframes firework-bang {
          to {
            opacity: 1;
            box-shadow: 
              -70px -115px hsl(var(--primary)),
              -28px -99px hsl(var(--primary)),
              58px -31px hsl(var(--primary)),
              13px -141px hsl(var(--primary)),
              -19px 6px hsl(var(--primary)),
              -2px -74px hsl(var(--primary)),
              24px -151px hsl(var(--primary)),
              57px -138px hsl(var(--primary)),
              -51px -104px hsl(var(--primary)),
              62px 8px hsl(var(--primary));
          }
        }

        @keyframes firework-gravity {
          from { opacity: 1; }
          to {
            transform: translateY(80px);
            opacity: 0;
          }
        }

        @keyframes firework-position {
          0%, 19.9% { margin-top: 4%; margin-left: 47%; }
          20%, 39.9% { margin-top: 7%; margin-left: 30%; }
          40%, 59.9% { margin-top: 6%; margin-left: 70%; }
          60%, 79.9% { margin-top: 3%; margin-left: 20%; }
          80%, 99.9% { margin-top: 3%; margin-left: 80%; }
        }
      `}</style>
    </div>
  );
}

export default function PerformanceMetrics({
  className,
  showFireworks = true,
}: PerformanceMetricsProps) {
  const mainMetrics = [
    { score: 100, label: 'Desempenho' },
    { score: 100, label: 'Acessibilidade' },
    { score: 100, label: 'Práticas recomendadas' },
    { score: 100, label: 'SEO' },
  ];

  const detailedMetrics = [
    {
      score: 100,
      label: 'First Contentful Paint',
      value: '0,3 s',
      description:
        'Marca o momento em que o primeiro texto ou imagem é disponibilizado.',
    },
    {
      score: 100,
      label: 'Largest Contentful Paint',
      value: '0,4 s',
      description: 'Marca o momento em que o maior texto ou imagem é exibido.',
    },
    {
      score: 100,
      label: 'Total Blocking Time',
      value: '0 ms',
      description: 'Soma de todos os períodos de bloqueio da thread principal.',
    },
    {
      score: 100,
      label: 'Cumulative Layout Shift',
      value: '0',
      description: 'Mede o movimento inesperado de elementos visíveis.',
    },
    {
      score: 100,
      label: 'Speed Index',
      value: '0,4 s',
      description:
        'Mostra a rapidez com que o conteúdo é preenchido visivelmente.',
    },
  ];

  return (
    <div
      className={cn(
        'relative rounded-[20px] bg-secondary p-6 sm:p-8',
        className
      )}
    >
      {showFireworks && <Fireworks />}

      <div className="relative z-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 font-bold text-2xl text-foreground sm:text-3xl">
            Performance 100/100
          </h3>
          <p className="text-foreground/60 text-sm">
            Métricas reais do PageSpeed Insights
          </p>
        </div>

        {/* Main Gauges */}
        <div className="mb-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {mainMetrics.map((metric) => (
            <PerformanceGauge
              key={metric.label}
              label={metric.label}
              score={metric.score}
            />
          ))}
        </div>

        {/* Score Scale */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-6 rounded-lg bg-secondary/50 px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-foreground/60 text-xs">0–49</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-foreground/60 text-xs">50–89</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-foreground/60 text-xs">90–100</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-3">
          <h4 className="mb-4 font-semibold text-foreground text-lg">
            Métricas Detalhadas
          </h4>
          {detailedMetrics.map((metric) => (
            <MetricCard
              description={metric.description}
              key={metric.label}
              label={metric.label}
              score={metric.score}
              value={metric.value}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-6 rounded-lg bg-primary/10 p-4">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Info Icon</title>
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <span className="font-medium text-primary text-sm">
              Todos os sites que desenvolvo alcançam 100/100 no PageSpeed
              Insights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
