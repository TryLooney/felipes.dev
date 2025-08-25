import { ArrowRight01 } from '../icons/arrow-right-01';
import { Rocket } from '../icons/rocket';
import CasesStack from './cases-stack';

export default function ProjectsSection() {
  return (
    <section
      className="mt-12 xs:mt-16 w-full overflow-hidden sm:mt-20 md:mt-24 lg:mt-32"
      id="projects"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="mb-8 xs:mb-10 text-center sm:mb-12 md:mb-16">
        <Rocket className="mx-auto mb-3 xs:mb-4 h-10 xs:h-12 w-10 xs:w-12 sm:h-15 sm:w-15" />
        <p className="mb-2 font-medium text-foreground/40 text-sm xs:text-base uppercase tracking-wider">
          PROJETOS EM DESTAQUE
        </p>
        <h2 className="font-medium text-3xl text-foreground xs:text-4xl leading-tight sm:text-5xl lg:text-[52px]">
          Cases de Sucesso
        </h2>
      </div>

      {/* Cases Stack */}
      <div className="mb-8 xs:mb-10 flex justify-center sm:mb-12">
        <CasesStack />
      </div>

      {/* Outros Projetos - Grid */}
      {/* <div className="grid grid-cols-1 gap-4 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:scale-[1.02] sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <div className="mb-3 xs:mb-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-foreground/10 to-foreground/5" />
            <h4 className="mb-2 font-semibold text-base text-foreground xs:text-lg">
              E-commerce B2B
            </h4>
            <p className="mb-3 xs:mb-4 text-foreground/60 text-xs xs:text-sm">
              Plataforma completa para vendas industriais com integração ERP
            </p>
            <div className="flex items-center gap-2 text-primary text-xs xs:text-sm">
              <span>Ver projeto</span>
              <ArrowRight01 className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:scale-[1.02] sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <div className="mb-3 xs:mb-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-foreground/10 to-foreground/5" />
            <h4 className="mb-2 font-semibold text-base text-foreground xs:text-lg">
              Sistema de Gestão
            </h4>
            <p className="mb-3 xs:mb-4 text-foreground/60 text-xs xs:text-sm">
              Dashboard administrativo com IA para análise de dados
            </p>
            <div className="flex items-center gap-2 text-primary text-xs xs:text-sm">
              <span>Ver projeto</span>
              <ArrowRight01 className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:scale-[1.02] sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <div className="mb-3 xs:mb-4 aspect-[16/10] rounded-lg bg-gradient-to-br from-foreground/10 to-foreground/5" />
            <h4 className="mb-2 font-semibold text-base text-foreground xs:text-lg">
              Landing Page SaaS
            </h4>
            <p className="mb-3 xs:mb-4 text-foreground/60 text-xs xs:text-sm">
              Site de conversão com otimização A/B e analytics avançados
            </p>
            <div className="flex items-center gap-2 text-primary text-xs xs:text-sm">
              <span>Ver projeto</span>
              <ArrowRight01 className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
