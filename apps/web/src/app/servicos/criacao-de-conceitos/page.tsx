import Image from 'next/image';
import Link from 'next/link';
import { Bulb } from '@/components/icons/bulb';
import { CheckList } from '@/components/icons/check-list';
import { Rocket } from '@/components/icons/rocket';
import { ServiceHeader } from '@/components/service-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CriacaoDeConceitosPage() {
  return (
    <>
      <ServiceHeader />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
            <Badge className="gap-1" variant="secondary">
              <Bulb className="h-3 w-3" />
              Estratégia Digital
            </Badge>
            <h1 className="text-pretty text-center font-medium text-3xl lg:text-5xl">
              Estratégia e Consultoria Digital - Transformando Ideias em
              Resultados
            </h1>
            <p className="text-center text-muted-foreground lg:text-lg">
              Descubra como nossa metodologia de criação de conceitos pode
              transformar seu negócio. Aprenda sobre as ferramentas e
              estratégias projetadas para aumentar conversões, melhorar a
              experiência do cliente e otimizar seus processos digitais.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative flex size-12 shrink-0 overflow-hidden rounded-full border">
                <Image
                  alt="Luis Felipe"
                  className="aspect-square size-full object-cover"
                  height={48}
                  src="/me.png"
                  width={48}
                />
              </div>
              <div>
                <p className="font-medium text-sm">Luis Felipe</p>
                <p className="text-muted-foreground text-sm">
                  Atualizado em Dez 07, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-6xl rounded-lg border p-2">
            <Image
              alt="Estratégia Digital"
              className="aspect-video rounded-lg object-cover"
              height={600}
              src="/technologies.svg"
              width={1200}
            />
          </div>

          <div className="relative mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-4">
            {/* Sidebar de Navegação */}
            <div className="sticky top-8 hidden h-fit lg:block">
              <span className="mb-6 text-lg">Conteúdo</span>
              <nav className="mt-2">
                <ul className="space-y-2">
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#metodologia"
                    >
                      Nossa Metodologia
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#analise"
                    >
                      Análise Completa
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#estrategia"
                    >
                      Estratégia Personalizada
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#resultados"
                    >
                      Resultados Esperados
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-2">
              <div>
                <h1 className="font-extrabold text-3xl">
                  Estratégia e Consultoria Digital
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Transformamos sua visão de negócio em uma estratégia digital
                  sólida e executável. Nossa abordagem combina análise profunda
                  do mercado, tecnologia moderna e metodologias comprovadas para
                  criar soluções que realmente funcionam.
                </p>
                <Image
                  alt="Estratégia Digital"
                  className="my-8 aspect-video w-full rounded-md object-cover"
                  height={400}
                  src="/technologies.svg"
                  width={800}
                />
              </div>

              <section
                className="prose dark:prose-invert mb-8"
                id="metodologia"
              >
                <h2>Nossa Metodologia</h2>
                <p>
                  Desenvolvemos uma metodologia única que combina análise de
                  dados, pesquisa de mercado e insights comportamentais para
                  criar estratégias digitais que realmente convertem.
                </p>
                <div className="relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border bg-card px-4 py-3 text-card-foreground text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current">
                  <Bulb className="h-4 w-4" />
                  <div className="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">
                    Dica Estratégica!
                  </div>
                  <div className="col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed">
                    Sempre começamos com uma análise profunda do seu negócio e
                    concorrência antes de propor qualquer solução
                  </div>
                </div>
              </section>

              <section className="prose dark:prose-invert mb-8" id="analise">
                <h2>Análise Completa do Negócio</h2>
                <p>
                  Realizamos uma análise abrangente que inclui pesquisa de
                  mercado, análise da concorrência, auditoria de performance
                  atual e identificação de oportunidades de melhoria.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Análise Atual</th>
                        <th>Após Nossa Estratégia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Performance Baixa</td>
                        <td>Otimizada</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Conversão Limitada</td>
                        <td>Conversão Alta</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Experiência Fragmentada</td>
                        <td>Experiência Unificada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Nossa análise revela insights valiosos sobre como seu negócio
                  pode se posicionar melhor no mercado digital e maximizar o
                  retorno sobre investimento.
                </p>
              </section>

              <section className="prose dark:prose-invert mb-8" id="estrategia">
                <h2>Estratégia Personalizada</h2>
                <p>
                  Com base na análise, criamos uma estratégia digital
                  personalizada que inclui
                  <a className="text-primary hover:underline" href="#">
                    plano de ação detalhado
                  </a>{' '}
                  e roadmap de implementação.
                </p>
                <blockquote>
                  "Uma estratégia bem executada é melhor que uma estratégia
                  perfeita mal executada."
                </blockquote>
                <p>Nossa estratégia inclui:</p>
                <ul>
                  <li>Posicionamento de marca e mensagem</li>
                  <li>Estratégia de conteúdo e SEO</li>
                  <li>Otimização de conversão (CRO)</li>
                  <li>Plano de marketing digital</li>
                  <li>Automação de processos</li>
                </ul>
                <p>
                  Cada estratégia é única e adaptada às necessidades específicas
                  do seu negócio, garantindo resultados mensuráveis e
                  sustentáveis.
                </p>
              </section>

              <section className="prose dark:prose-invert mb-8" id="resultados">
                <h2>Resultados Esperados</h2>
                <p>
                  Nossos clientes experimentam melhorias significativas em
                  métricas-chave como conversão, engajamento e retorno sobre
                  investimento.
                </p>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +150%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Aumento em Conversões
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +200%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Melhoria em Performance
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +300%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        ROI em Marketing
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Sidebar Direita */}
            <div className="prose dark:prose-invert sticky top-8 hidden h-fit rounded-lg border p-6 lg:block">
              <h5 className="font-semibold text-xl">
                Comece Sua Transformação Digital
              </h5>
              <ul className="my-6 text-sm [&>li]:pl-0">
                <li>✓ Análise completa do seu negócio</li>
                <li>✓ Estratégia personalizada</li>
                <li>✓ Roadmap de implementação</li>
                <li>✓ Suporte contínuo</li>
              </ul>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href="/contato">Solicitar Consultoria</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/projetos">Ver Cases de Sucesso</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
