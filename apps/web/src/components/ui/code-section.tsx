import { CodeEditorDemo } from './code-editor-demo';

export default function CodeSection() {
  return (
    <section className="mt-4" style={{ opacity: 1, transform: 'none' }}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Coluna da esquerda - ocupa 1 espaço com 3 cards */}
        <div className="flex h-full flex-col gap-6 lg:col-span-1">
          <div className="group hover:-translate-y-1 relative flex-1 overflow-hidden rounded-[24px] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h4 className="mb-3 font-semibold text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                Frontend
              </h4>
              <p className="font-normal text-base text-foreground/70 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                React, Next.js, TypeScript e Tailwind CSS para interfaces
                modernas
              </p>
            </div>
          </div>

          <div className="group hover:-translate-y-1 relative flex-1 overflow-hidden rounded-[24px] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h4 className="mb-3 font-semibold text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                Backend
              </h4>
              <p className="font-normal text-base text-foreground/70 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                Node.js, APIs REST e bancos de dados para aplicações robustas
              </p>
            </div>
          </div>

          <div className="group hover:-translate-y-1 relative flex-1 overflow-hidden rounded-[24px] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h4 className="mb-3 font-semibold text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                DevOps
              </h4>
              <p className="font-normal text-base text-foreground/70 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                Deploy automatizado, CI/CD e monitoramento de aplicações
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da direita - ocupa 2 espaços */}
        <div className="group hover:-translate-y-1 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8 lg:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative z-10">
            <h3 className="mb-6 font-semibold text-2xl text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
              Código Limpo & Eficiente
            </h3>
            <div className="flex justify-center">
              <CodeEditorDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
