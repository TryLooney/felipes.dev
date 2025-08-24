export default function AboutSection() {
  return (
    <section className="mt-20 sm:mt-24 lg:mt-32">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="font-medium text-4xl text-foreground leading-tight sm:text-5xl lg:text-[52px]">
          Sobre mim
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Minha Filosofia
            </h3>
            <p className="text-base text-foreground/70 leading-7">
              Acredito que um site ou um sistema não deve ser apenas bonito. Ele
              precisa ser uma ferramenta de alta performance, construída para
              gerar resultados de negócio. Meu trabalho é unir design moderno
              com a melhor tecnologia para criar soluções que sejam não apenas
              rápidas e eficientes, mas que também ajudem sua empresa a crescer.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Minha Especialidade
            </h3>
            <p className="text-base text-foreground/70 leading-7">
              Minha especialidade é o desenvolvimento de soluções web de alta
              performance, desde sites institucionais com notas máximas no
              Google PageSpeed até a arquitetura de plataformas SaaS complexas
              com integração de Inteligência Artificial.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
              Minhas Ferramentas
            </h3>
            <p className="mb-4 text-base text-foreground/70 leading-7">
              Minhas principais ferramentas são:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">Next.js</code>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">TypeScript</code>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">Astro</code>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">Cloudflare Workers</code>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">Supabase</code>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <code className="text-primary text-sm">Vercel</code>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] bg-secondary p-6 sm:p-8">
            <h3 className="mb-4 font-medium text-foreground text-xl sm:text-2xl">
              Por que escolher meus serviços?
            </h3>
            <ul className="space-y-3 text-base text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Sites com performance máxima (100/100 PageSpeed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Foco em resultados de negócio, não apenas código</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Tecnologia de ponta para soluções escaláveis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Suporte contínuo e otimizações</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
