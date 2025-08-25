import Image from 'next/image';
import Link from 'next/link';
import { CheckList } from '@/components/icons/check-list';
import { Factory } from '@/components/icons/factory';
import { Rocket } from '@/components/icons/rocket';
import { ServiceHeader } from '@/components/service-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function DesignIndustrialPage() {
  return (
    <>
      <ServiceHeader />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
            <Badge className="gap-1" variant="secondary">
              <Factory className="h-3 w-3" />
              Indústria 4.0
            </Badge>
            <h1 className="text-pretty text-center font-medium text-3xl lg:text-5xl">
              Desenvolvimento para Indústria - Soluções Especializadas para o
              Setor Industrial
            </h1>
            <p className="text-center text-muted-foreground lg:text-lg">
              Descubra como nossas soluções digitais especializadas podem
              transformar sua operação industrial. Aprenda sobre as tecnologias
              e metodologias projetadas para otimizar processos, gerar leads
              qualificados e automatizar operações complexas.
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
              alt="Desenvolvimento Industrial"
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
                      href="#especializacao"
                    >
                      Nossa Especialização
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#solucoes"
                    >
                      Soluções Industriais
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#automacao"
                    >
                      Automação de Processos
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#leads"
                    >
                      Geração de Leads
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#resultados"
                    >
                      Resultados Comprovados
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-2">
              <div>
                <h1 className="font-extrabold text-3xl">
                  Desenvolvimento para Indústria
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Especializamos em criar soluções digitais específicas para o
                  setor industrial. Nossa experiência inclui sistemas de gestão,
                  automação de processos, geração de leads qualificados e
                  otimização de operações complexas.
                </p>
                <Image
                  alt="Desenvolvimento Industrial"
                  className="my-8 aspect-video w-full rounded-md object-cover"
                  height={400}
                  src="/technologies.svg"
                  width={800}
                />
              </div>

              <section
                className="prose dark:prose-invert mb-8"
                id="especializacao"
              >
                <h2>Nossa Especialização Industrial</h2>
                <p>
                  Com anos de experiência no setor industrial, entendemos as
                  particularidades e desafios únicos que as empresas enfrentam.
                  Nossa especialização abrange desde pequenas indústrias até
                  grandes corporações.
                </p>
                <div className="relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border bg-card px-4 py-3 text-card-foreground text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current">
                  <Factory className="h-4 w-4" />
                  <div className="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">
                    Especialização Comprovada!
                  </div>
                  <div className="col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed">
                    Já atendemos mais de 30 empresas industriais com soluções
                    personalizadas
                  </div>
                </div>
              </section>

              <section className="prose dark:prose-invert mb-8" id="solucoes">
                <h2>Soluções Industriais Especializadas</h2>
                <p>
                  Desenvolvemos soluções específicas para diferentes segmentos
                  industriais, sempre considerando as particularidades de cada
                  setor e as necessidades específicas de cada empresa.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Solução</th>
                        <th>Benefício</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sistemas de Gestão</td>
                        <td>Controle Total de Operações</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Automação de Vendas</td>
                        <td>Geração Automática de Leads</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Dashboards Analytics</td>
                        <td>Insights em Tempo Real</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Nossas soluções são desenvolvidas com foco na eficiência
                  operacional, redução de custos e aumento da produtividade.
                </p>
              </section>

              <section className="prose dark:prose-invert mb-8" id="automacao">
                <h2>Automação de Processos</h2>
                <p>
                  Implementamos sistemas de automação que eliminam tarefas
                  repetitivas e
                  <a className="text-primary hover:underline" href="#">
                    otimizam fluxos de trabalho
                  </a>
                  , permitindo que sua equipe foque no que realmente importa.
                </p>
                <blockquote>
                  "A automação não substitui pessoas, ela libera pessoas para
                  fazer o que máquinas não podem fazer."
                </blockquote>
                <p>Nossos sistemas de automação incluem:</p>
                <ul>
                  <li>Automação de marketing e vendas</li>
                  <li>Gestão de leads e prospects</li>
                  <li>Relatórios automáticos</li>
                  <li>Integração com sistemas existentes</li>
                  <li>Workflows personalizados</li>
                </ul>
                <p>
                  Isso resulta em maior eficiência, redução de erros e aumento
                  significativo na produtividade da sua equipe.
                </p>
              </section>

              <section className="prose dark:prose-invert mb-8" id="leads">
                <h2>Geração de Leads Qualificados</h2>
                <p>
                  Desenvolvemos estratégias específicas para o setor industrial
                  que geram leads altamente qualificados e prontos para
                  conversão.
                </p>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-semibold">Inbound Marketing</h4>
                      <p className="text-muted-foreground text-sm">
                        Atração de leads através de conteúdo especializado
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-semibold">
                        Qualificação Automática
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Sistema inteligente de scoring e qualificação
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="prose dark:prose-invert mb-8" id="resultados">
                <h2>Resultados Comprovados</h2>
                <p>
                  Nossos clientes industriais experimentam melhorias
                  significativas em métricas-chave como geração de leads,
                  conversão e eficiência operacional.
                </p>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +200%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Leads Qualificados
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +150%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Conversão
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +80%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Eficiência
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Sidebar Direita */}
            <div className="prose dark:prose-invert sticky top-8 hidden h-fit rounded-lg border p-6 lg:block">
              <h5 className="font-semibold text-xl">
                Transforme Sua Operação Industrial
              </h5>
              <ul className="my-6 text-sm [&>li]:pl-0">
                <li>✓ Soluções especializadas para indústria</li>
                <li>✓ Automação de processos</li>
                <li>✓ Geração de leads qualificados</li>
                <li>✓ Sistemas de gestão</li>
                <li>✓ Suporte técnico especializado</li>
              </ul>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href="/contato">Solicitar Consultoria</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/projetos">Ver Cases Industriais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
