import type { ReactNode } from 'react';

type OptimizedContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function OptimizedContainer({ children, className = '' }: OptimizedContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
