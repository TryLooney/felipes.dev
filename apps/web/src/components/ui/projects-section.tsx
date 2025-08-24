export default function ProjectsSection() {
  return (
    <section className="mt-20 sm:mt-24 lg:mt-32">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="font-medium text-4xl text-foreground leading-tight sm:text-5xl lg:text-[52px]">
          Projetos em Destaque
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60">
          Cada projeto conta uma história de como resolvi problemas reais de
          negócio usando tecnologia de ponta
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* PetroEND Project */}
        <div className="hover:-translate-y-2 rounded-[20px] bg-secondary p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 font-medium text-primary text-sm">
              Site Institucional
            </span>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              PetroEND
            </h3>
          </div>

          <div className="mb-6 space-y-4">
            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Problema
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                A PetroEND possuía uma presença digital antiga, com um site que
                não funcionava em celulares e era extremamente lento. Isso
                prejudicava a imagem profissional da empresa e a capacidade de
                atrair novos clientes que buscavam por seus serviços técnicos
                online.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Solução
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Desenvolvi um novo site institucional do zero, utilizando uma
                arquitetura moderna (Astro) focada em performance. O projeto
                incluiu um novo design, redação de textos orientada para vendas
                (copywriting) e uma base técnica de SEO para melhorar o
                posicionamento no Google.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Resultado
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                O resultado foi um site que carrega instantaneamente, funciona
                perfeitamente em qualquer dispositivo e alcançou a{' '}
                <strong className="text-primary">
                  nota máxima de 100/100/100/100 no Google PageSpeed Insights
                </strong>
                , posicionando a PetroEND como uma referência de qualidade e
                profissionalismo no seu setor.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Astro
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                TypeScript
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                SEO
              </span>
            </div>
          </div>
        </div>

        {/* E-commerce Project */}
        <div className="hover:-translate-y-2 rounded-[20px] bg-secondary p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 font-medium text-primary text-sm">
              E-commerce
            </span>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Loja Virtual Completa
            </h3>
          </div>

          <div className="mb-6 space-y-4">
            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Problema
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Uma empresa precisava migrar de uma plataforma antiga e cara
                para uma solução moderna que permitisse controle total sobre a
                experiência do usuário e reduzisse custos operacionais
                significativamente.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Solução
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Desenvolvi uma plataforma e-commerce completa usando Next.js,
                com integração de pagamentos, gestão de estoque, painel
                administrativo personalizado e otimizações de performance para
                conversão.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Resultado
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                <strong className="text-primary">
                  Redução de 60% nos custos operacionais
                </strong>{' '}
                e aumento de 40% na taxa de conversão, com um site que carrega
                em menos de 2 segundos e oferece uma experiência de compra
                superior.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Next.js
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Stripe
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Supabase
              </span>
            </div>
          </div>
        </div>

        {/* SaaS Platform */}
        <div className="hover:-translate-y-2 rounded-[20px] bg-secondary p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 font-medium text-primary text-sm">
              SaaS Platform
            </span>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Plataforma de Gestão
            </h3>
          </div>

          <div className="mb-6 space-y-4">
            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Problema
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Uma startup precisava de uma plataforma SaaS escalável para
                automatizar processos internos e reduzir o tempo gasto em
                tarefas repetitivas, permitindo que a equipe focasse em
                atividades estratégicas.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Solução
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Arquitetura uma plataforma completa com autenticação, dashboard
                em tempo real, integração com APIs externas, sistema de
                notificações e analytics avançados para acompanhar o uso e
                performance.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Resultado
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                <strong className="text-primary">
                  Economia de 25 horas semanais
                </strong>{' '}
                em tarefas manuais e aumento de 35% na produtividade da equipe,
                com uma plataforma que suporta mais de 10.000 usuários
                simultâneos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Next.js
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Prisma
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Vercel
              </span>
            </div>
          </div>
        </div>

        {/* AI Integration */}
        <div className="hover:-translate-y-2 rounded-[20px] bg-secondary p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 font-medium text-primary text-sm">
              IA & Automação
            </span>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Chatbot Inteligente
            </h3>
          </div>

          <div className="mb-6 space-y-4">
            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Problema
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Uma empresa de e-commerce perdia vendas porque o atendimento ao
                cliente não conseguia responder rapidamente às dúvidas dos
                clientes, especialmente fora do horário comercial.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Solução
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                Desenvolvi um chatbot inteligente integrado com OpenAI,
                conectado ao sistema de produtos e capaz de responder dúvidas,
                fazer recomendações e até mesmo processar pedidos simples.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-foreground text-lg">
                Resultado
              </h4>
              <p className="text-base text-foreground/70 leading-6">
                <strong className="text-primary">
                  Aumento de 45% nas vendas
                </strong>{' '}
                fora do horário comercial e redução de 70% no tempo de resposta
                ao cliente, com uma taxa de satisfação de 92% nas interações com
                o chatbot.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                OpenAI
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Next.js
              </span>
              <span className="rounded bg-primary/20 px-2 py-1 text-primary text-xs">
                Vercel
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center sm:mt-16">
        <a
          className="hover:-translate-y-1 inline-block transform rounded-full bg-primary px-8 py-4 font-medium text-foreground text-lg transition-all duration-300"
          href="https://wa.me/5519993548926?text=Olá! Vi seus projetos no portfólio e gostaria de ver mais trabalhos seus."
          rel="noopener noreferrer"
          target="_blank"
        >
          Ver Todos os Projetos
        </a>
      </div>
    </section>
  );
}
