import img from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../animate-ui/radix/tooltip';
import { Facebook01 } from '../icons/facebook-01';
import { Github } from '../icons/github';
import { Instagram } from '../icons/instagram';
import { Link01 } from '../icons/link-01';
import { Linkedin01 } from '../icons/linkedin-01';
import { QuoteUp } from '../icons/quote-up';
import { Twitter } from '../icons/twitter';

export default function ClientSection() {
  return (
    <section className="mt-4" style={{ opacity: 1, transform: 'none' }}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-[20px] bg-secondary p-6 sm:p-8 lg:col-span-1">
          <h3 className="mb-4 font-medium text-2xl text-foreground sm:text-3xl">
            O que os clientes dizem
          </h3>
          <p className="mb-8 font-normal text-base text-foreground/50 italic leading-7">
            O Luis Felipe é um ótimo programador. Depois do novo site, tivemos
            mais clientes e a conversão aumentou bastante.
          </p>
          <div className="border-[#ffffff14] border-t pt-2">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="font-medium text-base text-foreground">
                  Eduardo Silva
                </h4>
                <p className="mt-1 font-normal text-base text-foreground/50">
                  <span className="text-primary">Diretor & CEO</span>
                </p>
              </div>
              <QuoteUp className="h-auto w-16 text-muted-foreground/15 sm:w-20" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-secondary lg:col-span-1">
          <div className="-top-10 absolute left-0 h-16 w-full bg-primary/30 blur-2xl" />
          <h3 className="relative z-10 p-6 font-medium text-2xl sm:p-8 sm:text-3xl">
            Tecnologias que utilizo
          </h3>
          <img
            alt="Software Tools"
            className="h-auto w-full"
            height={240}
            src="https://portfolio-template-1-seven.vercel.app/_next/image?url=%2Fimages%2Fimg_6625065aaabd00c_white_a700_240x420.png&w=1080&q=75"
            style={{ color: 'transparent' }}
            width={420}
          />
        </div>

        <div className="flex flex-col justify-between lg:col-span-1">
          <div className="grid grid-cols-4 gap-4">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Link
                    className="flex items-center justify-center rounded-[16px] bg-secondary p-4 sm:p-6"
                    href="https://instagram.com/felipes.dev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Link
                    className="flex items-center justify-center rounded-[16px] bg-secondary p-4 sm:p-6"
                    href="https://linkedin.com/in/felipesdev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin01 />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Link
                    className="flex items-center justify-center rounded-[16px] bg-secondary p-4 sm:p-6"
                    href="https://twitter.com/felipesdev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Twitter />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Link
                    className="flex items-center justify-center rounded-[16px] bg-secondary p-4 sm:p-6"
                    href="https://github.com/felipesdev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="relative overflow-hidden rounded-[20px] bg-secondary p-6 sm:p-8">
            <div className="-bottom-10 absolute right-0 h-16 w-1/2 bg-primary/20 blur-2xl" />
            <h2 className="font-medium text-6xl text-foreground leading-tight sm:text-7xl md:text-[100px]">
              5+
            </h2>
            <div className="mt-2 border-button-1 border-l-2 pl-4">
              <p className="font-medium text-base text-foreground leading-6">
                ANOS DE EXPERIÊNCIA
                <br />
                EM DESENVOLVIMENTO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
