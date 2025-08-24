const clientLogos = [
  { name: 'React', text: 'React' },
  { name: 'Next.js', text: 'Next.js' },
  { name: 'TypeScript', text: 'TypeScript' },
  { name: 'Tailwind', text: 'Tailwind' },
  { name: 'Node.js', text: 'Node.js' },
  { name: 'Vercel', text: 'Vercel' },
  { name: 'MongoDB', text: 'MongoDB' },
  { name: 'PostgreSQL', text: 'PostgreSQL' },
];

export default function ClientsScroll() {
  return (
    <div className="mt-20 flex items-center gap-4 sm:gap-8">
      <div
        className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        style={
          {
            '--animation-direction': 'reverse',
            '--animation-duration': '80s',
          } as React.CSSProperties
        }
      >
        <ul className="flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-8 py-4 hover:[animation-play-state:paused]">
          {/* Primeira série de logos */}
          {clientLogos.map((logo, index) => (
            <li className="flex-shrink-0" key={`first-${index}`}>
              <div className="flex h-12 items-center justify-center rounded-lg bg-secondary/50 px-6 opacity-60 transition-all duration-300 hover:bg-secondary hover:opacity-100 sm:h-16 sm:px-8">
                <span className="font-medium text-foreground text-sm sm:text-base">
                  {logo.text}
                </span>
              </div>
            </li>
          ))}
          {/* Segunda série de logos para scroll infinito */}
          {clientLogos.map((logo, index) => (
            <li className="flex-shrink-0" key={`second-${index}`}>
              <div className="flex h-12 items-center justify-center rounded-lg bg-secondary/50 px-6 opacity-60 transition-all duration-300 hover:bg-secondary hover:opacity-100 sm:h-16 sm:px-8">
                <span className="font-medium text-foreground text-sm sm:text-base">
                  {logo.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
