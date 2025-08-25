import { View3D } from '../icons/3-d-view';
import { Rocket } from '../icons/rocket';
import { ServerStack01 } from '../icons/server-stack-01';
import { CodeEditorDemo } from './code-editor-demo';

export default function CodeSection() {
  return (
    <section
      className="mt-6 xs:mt-8 w-full overflow-hidden sm:mt-10 md:mt-12"
      id="code"
      style={{ opacity: 1, transform: 'none' }}
    >
      {/* Editor no topo */}
      <div className="group relative mb-6 xs:mb-8 overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg sm:p-8 lg:hidden">
        <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
        <div className="relative z-10">
          <div className="mb-4 xs:mb-6 flex items-center gap-4">
            <h3 className="font-medium text-foreground text-xl xs:text-2xl transition-colors duration-300 group-hover:text-primary sm:text-3xl">
              Código Limpo & Eficiente
            </h3>
          </div>
          <div className="flex w-full justify-center overflow-hidden">
            <CodeEditorDemo />
          </div>
        </div>
      </div>

      {/* Layout desktop: editor à esquerda, cards à direita */}
      <div className="hidden lg:flex lg:gap-12">
        {/* Editor - Desktop */}
        <div className="group relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-medium text-3xl text-foreground transition-colors duration-300 group-hover:text-primary">
                Código Limpo & Eficiente
              </h3>
            </div>
            <div className="flex w-full justify-center overflow-hidden">
              <CodeEditorDemo />
            </div>
          </div>
        </div>

        {/* Cards - Desktop (coluna à direita) */}
        <div className="flex w-80 flex-col gap-6">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg">
            <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
            <div className="relative z-10">
              <View3D className="mb-4 h-10 w-10" />
              <h4 className="mb-3 font-medium text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                Performance Otimizada
              </h4>
              <p className="font-normal text-foreground/30 text-sm leading-6 transition-colors duration-300 group-hover:text-foreground/50">
                Código otimizado que carrega rapidamente e oferece uma
                experiência fluida em qualquer dispositivo
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg">
            <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
            <div className="relative z-10">
              <ServerStack01 className="mb-4 h-10 w-10" />
              <h4 className="mb-3 font-medium text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                Código Limpo & Escalável
              </h4>
              <p className="font-normal text-foreground/30 text-sm leading-6 transition-colors duration-300 group-hover:text-foreground/50">
                Arquitetura bem estruturada e código legível que facilita
                manutenção e futuras expansões
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg">
            <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
            <div className="relative z-10">
              <Rocket className="mb-4 h-10 w-10" />
              <h4 className="mb-3 font-medium text-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                Segurança & Confiabilidade
              </h4>
              <p className="font-normal text-foreground/30 text-sm leading-6 transition-colors duration-300 group-hover:text-foreground/50">
                Implementação de boas práticas de segurança e testes
                automatizados para máxima confiabilidade
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards para mobile/tablet */}
      <div className="grid grid-cols-1 gap-4 xs:gap-6 sm:grid-cols-2 lg:hidden lg:gap-8">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <View3D className="mb-4 xs:mb-6 h-8 xs:h-10 w-8 xs:w-10 sm:h-12 sm:w-12" />
            <h4 className="mb-3 xs:mb-4 font-medium text-foreground text-lg xs:text-xl transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              Performance Otimizada
            </h4>
            <p className="font-normal text-foreground/30 text-sm xs:text-base leading-6 transition-colors duration-300 group-hover:text-foreground/50">
              Código otimizado que carrega rapidamente e oferece uma experiência
              fluida em qualquer dispositivo
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <ServerStack01 className="mb-4 xs:mb-6 h-8 xs:h-10 w-8 xs:w-10 sm:h-12 sm:w-12" />
            <h4 className="mb-3 xs:mb-4 font-medium text-foreground text-lg xs:text-xl transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              Código Limpo & Escalável
            </h4>
            <p className="font-normal text-foreground/30 text-sm xs:text-base leading-6 transition-colors duration-300 group-hover:text-foreground/50">
              Arquitetura bem estruturada e código legível que facilita
              manutenção e futuras expansões
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-secondary/20 p-4 xs:p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 ease-out hover:shadow-lg sm:col-span-2 sm:p-8">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <div className="relative z-10">
            <Rocket className="mb-4 xs:mb-6 h-8 xs:h-10 w-8 xs:w-10 sm:h-12 sm:w-12" />
            <h4 className="mb-3 xs:mb-4 font-medium text-foreground text-lg xs:text-xl transition-colors duration-300 group-hover:text-primary sm:text-2xl">
              Segurança & Confiabilidade
            </h4>
            <p className="font-normal text-foreground/30 text-sm xs:text-base leading-6 transition-colors duration-300 group-hover:text-foreground/50">
              Implementação de boas práticas de segurança e testes automatizados
              para máxima confiabilidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
