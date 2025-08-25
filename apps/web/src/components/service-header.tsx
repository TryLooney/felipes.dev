'use client';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Whatsapp } from '@/components/icons/whatsapp';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const ServiceHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const SCROLL_THRESHOLD = 50;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <nav
        className="fixed z-20 w-full px-2"
        data-state={menuState && 'active'}
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5'
          )}
          data-scrolled={isScrolled}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  size="sm"
                  variant="ghost"
                >
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Voltar</span>
                  </Link>
                </Button>
                <div className="h-6 w-px bg-border" />
                <Link
                  aria-label="home"
                  className="flex items-center space-x-2"
                  href="/"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-black">
                    <span className="font-black font-mono">&lt;f&gt;</span>
                  </div>
                  <span>felipes.dev</span>
                </Link>
              </div>

              <button
                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                className="-m-2.5 -mr-4 relative z-20 block cursor-pointer p-2.5 lg:hidden"
                onClick={() => setMenuState(!menuState)}
                type="button"
              >
                <Menu className="m-auto size-6 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200" />
                <X className="-rotate-180 absolute inset-0 m-auto size-6 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 scale-0 in-data-[state=active]:opacity-100 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                <li>
                  <Link
                    className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    href="/#hero"
                  >
                    <span>Início</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    href="/#services"
                  >
                    <span>Serviços</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    href="/#projects"
                  >
                    <span>Projetos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    href="/#contact"
                  >
                    <span>Contato</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 in-data-[state=active]:block hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:in-data-[state=active]:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <li>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href="/#hero"
                    >
                      <span>Início</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href="/#services"
                    >
                      <span>Serviços</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href="/#projects"
                    >
                      <span>Projetos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      href="/#contact"
                    >
                      <span>Contato</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-primary/70 hover:shadow-xl"
                  size="sm"
                >
                  <Link className="flex items-center gap-2" href="/#contact">
                    <Whatsapp className="h-4 w-4" />
                    <span>Vamos Conversar</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
