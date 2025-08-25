import Link from 'next/link';
import { ArrowRight01 } from '../icons/arrow-right-01';
import { Bulb } from '../icons/bulb';
import { ComputerDesk01 } from '../icons/computer-desk-01';
import { Factory } from '../icons/factory';
import { Layers01 } from '../icons/layers-01';

export default function ServicesSection() {
  return (
    <section
      className="mt-20 sm:mt-24 lg:mt-32"
      id="services"
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="mb-12 text-center sm:mb-16">
        <ComputerDesk01 className="mx-auto mb-4 h-12 w-12 sm:h-15 sm:w-15" />
        <p className="mb-2 font-medium text-base text-foreground/40 uppercase tracking-wider">
          SEÇÃO DE SERVIÇOS
        </p>
        <h2 className="font-medium text-4xl text-foreground leading-tight sm:text-5xl lg:text-[52px]">
          Como posso ajudar seu negócio
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-secondary to-secondary/20 p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] sm:p-10">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <Bulb className="mb-8 h-12 w-12 sm:h-15 sm:w-15" />
          <h3 className="mb-6 font-medium text-2xl text-foreground sm:text-3xl">
            Estratégia e Consultoria Digital
          </h3>
          <p className="mb-6 font-normal text-base text-foreground/30 leading-6">
            Análise completa do seu negócio para criar uma estratégia digital
            que aumenta vendas e melhora a experiência dos seus clientes.
          </p>
          <Link
            className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
            href="/servicos/criacao-de-conceitos"
          >
            <span className="font-semibold text-base text-foreground">
              Saiba Mais
            </span>
            <ArrowRight01 className="h-6 w-6" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-secondary to-secondary/20 p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] sm:p-10">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <Layers01 className="mb-8 h-12 w-12 sm:h-15 sm:w-15" />
          <h3 className="mb-6 font-medium text-2xl text-foreground sm:text-3xl">
            Design de Interface e UX
          </h3>
          <p className="mb-6 font-normal text-base text-foreground/30 leading-6">
            Criação de interfaces intuitivas e experiências que convertem
            visitantes em clientes, aumentando suas vendas online.
          </p>
          <Link
            className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
            href="/servicos/prototipagem"
          >
            <span className="font-semibold text-base text-foreground">
              Saiba Mais
            </span>
            <ArrowRight01 className="h-6 w-6" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-secondary to-secondary/20 p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] sm:p-10">
          <div className="-right-5 -top-5 absolute z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
          <Factory className="mb-8 h-12 w-12 sm:h-15 sm:w-15" />
          <h3 className="mb-6 font-medium text-2xl text-foreground sm:text-3xl">
            Desenvolvimento para Indústria
          </h3>
          <p className="mb-6 font-normal text-base text-foreground/30 leading-6">
            Sites e sistemas especializados para empresas industriais, com foco
            em geração de leads qualificados e automação de processos.
          </p>
          <Link
            className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
            href="/servicos/design-industrial"
          >
            <span className="font-semibold text-base text-foreground">
              Saiba Mais
            </span>
            <ArrowRight01 className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
