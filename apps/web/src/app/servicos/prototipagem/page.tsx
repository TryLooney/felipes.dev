import Image from 'next/image';
import Link from 'next/link';
import { CheckList } from '@/components/icons/check-list';
import { Layers01 } from '@/components/icons/layers-01';
import { Rocket } from '@/components/icons/rocket';
import { ServiceHeader } from '@/components/service-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PrototipagemPage() {
  return (
    <>
      <ServiceHeader />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
            <Badge className="gap-1" variant="secondary">
              <Layers01 className="h-3 w-3" />
              Design & UX
            </Badge>
            <h1 className="text-pretty text-center font-medium text-3xl lg:text-5xl">
              Design de Interface e UX - Criando Experiências que Convertem
            </h1>
            <p className="text-center text-muted-foreground lg:text-lg">
              Descubra como nosso processo de design centrado no usuário pode
              transformar sua presença digital. Aprenda sobre as metodologias e
              ferramentas que criam interfaces intuitivas e experiências que
              realmente convertem visitantes em clientes.
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
              alt="Design e UX"
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
                      href="#processo"
                    >
                      Nosso Processo
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#pesquisa"
                    >
                      Pesquisa de Usuário
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#design"
                    >
                      Design System
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#prototipagem"
                    >
                      Prototipagem
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary"
                      href="#testes"
                    >
                      Testes e Validação
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-2">
              <div>
                <h1 className="font-extrabold text-3xl">
                  Design de Interface e UX
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Criamos interfaces intuitivas e experiências de usuário que
                  não apenas impressionam, mas também convertem. Nossa abordagem
                  combina design thinking, pesquisa de usuário e tecnologia
                  moderna para criar soluções que realmente funcionam.
                </p>
                <Image
                  alt="Design e UX"
                  className="my-8 aspect-video w-full rounded-md object-cover"
                  height={400}
                  src="/technologies.svg"
                  width={800}
                />
              </div>

              <section className="prose dark:prose-invert mb-8" id="processo">
                <h2>Nosso Processo de Design</h2>
                <p>
                  Seguimos uma metodologia comprovada que garante resultados
                  excepcionais em cada projeto. Nosso processo é iterativo e
                  centrado no usuário, sempre priorizando a experiência final.
                </p>
                <div className="relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border bg-card px-4 py-3 text-card-foreground text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current">
                  <Layers01 className="h-4 w-4" />
                  <div className="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">
                    Processo Comprovado!
                  </div>
                  <div className="col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed">
                    Nossa metodologia já foi testada em mais de 50 projetos com
                    resultados comprovados
                  </div>
                </div>
              </section>

              <section className="prose dark:prose-invert mb-8" id="pesquisa">
                <h2>Pesquisa de Usuário</h2>
                <p>
                  Tudo começa com uma pesquisa profunda sobre seus usuários,
                  concorrência e mercado. Entendemos o comportamento,
                  necessidades e frustrações dos seus usuários para criar
                  soluções realmente relevantes.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Método de Pesquisa</th>
                        <th>Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Entrevistas com Usuários</td>
                        <td>Insights Comportamentais</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Análise de Concorrência</td>
                        <td>Oportunidades de Diferenciação</td>
                      </tr>
                      <tr className="m-0 border-t p-0 even:bg-muted">
                        <td>Testes de Usabilidade</td>
                        <td>Identificação de Problemas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Com base na pesquisa, criamos personas detalhadas e jornadas
                  do usuário que guiam todo o processo de design.
                </p>
              </section>

              <section className="prose dark:prose-invert mb-8" id="design">
                <h2>Design System</h2>
                <p>
                  Desenvolvemos um sistema de design completo que garante
                  consistência visual e
                  <a className="text-primary hover:underline" href="#">
                    experiência coesa
                  </a>{' '}
                  em toda a plataforma.
                </p>
                <blockquote>
                  "Um design system bem estruturado é a base para escalabilidade
                  e consistência."
                </blockquote>
                <p>Nosso design system inclui:</p>
                <ul>
                  <li>Paleta de cores e tipografia</li>
                  <li>Componentes reutilizáveis</li>
                  <li>Padrões de interação</li>
                  <li>Guia de acessibilidade</li>
                  <li>Documentação completa</li>
                </ul>
                <p>
                  Isso garante que sua marca mantenha uma identidade visual
                  consistente e que o desenvolvimento seja mais eficiente e
                  escalável.
                </p>
              </section>

              <section
                className="prose dark:prose-invert mb-8"
                id="prototipagem"
              >
                <h2>Prototipagem Interativa</h2>
                <p>
                  Criamos protótipos de alta fidelidade que permitem testar a
                  experiência antes mesmo de começar o desenvolvimento. Isso
                  reduz riscos e garante que o produto final atenda às
                  expectativas.
                </p>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-semibold">Wireframes</h4>
                      <p className="text-muted-foreground text-sm">
                        Estrutura básica e hierarquia de informações
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-semibold">Protótipos</h4>
                      <p className="text-muted-foreground text-sm">
                        Interações e fluxos de navegação
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="prose dark:prose-invert mb-8" id="testes">
                <h2>Testes e Validação</h2>
                <p>
                  Realizamos testes de usabilidade com usuários reais para
                  validar nossas soluções e identificar oportunidades de
                  melhoria antes do lançamento.
                </p>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">95%</div>
                      <div className="text-muted-foreground text-sm">
                        Taxa de Sucesso
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        +40%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Conversão
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-2xl text-primary">
                        -60%
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Taxa de Abandono
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            {/* Sidebar Direita */}
            <div className="prose dark:prose-invert sticky top-8 hidden h-fit rounded-lg border p-6 lg:block">
              <h5 className="font-semibold text-xl">
                Transforme Sua Experiência Digital
              </h5>
              <ul className="my-6 text-sm [&>li]:pl-0">
                <li>✓ Pesquisa de usuário completa</li>
                <li>✓ Design system personalizado</li>
                <li>✓ Protótipos interativos</li>
                <li>✓ Testes de usabilidade</li>
                <li>✓ Documentação completa</li>
              </ul>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href="/contato">Solicitar Orçamento</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/projetos">Ver Portfólio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
