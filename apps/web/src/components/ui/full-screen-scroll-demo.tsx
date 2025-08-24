'use client';

import { FullScreenScrollFX } from '@/components/ui/full-screen-scroll-fx';

const sections = [
  {
    leftLabel: 'Estratégia',
    title: <>Resultados</>,
    rightLabel: 'Estratégia',
    background:
      'https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?cs=srgb&dl=pexels-alexfu-3289156.jpg&fm=jpg&_gl=1*1acr8i7*_ga*MTI3MjA2NDU0Mi4xNzU1NzM3ODI5*_ga_8JE65Q40S6*czE3NTU3NjkyMzgkbzMkZzEkdDE3NTU3Njk1MTckajYwJGwwJGgw',
    audioSrc: '/sfx/click-01.mp3',
  },
  {
    leftLabel: 'Tecnologia',
    title: <>Performance</>,
    rightLabel: 'Tecnologia',
    background:
      'https://images.pexels.com/photos/163790/at-night-under-a-lantern-guy-night-city-163790.jpeg',
    audioSrc: '/sfx/whoosh-02.mp3',
  },
  {
    leftLabel: 'Projetos',
    title: <>Soluções</>,
    rightLabel: 'Projetos',
    background: 'https://images.pexels.com/photos/9817/pexels-photo-9817.jpeg',
    audioSrc: '/sfx/whoosh-02.mp3',
  },
  {
    leftLabel: 'Contato',
    title: <>Conversão</>,
    rightLabel: 'Contato',
    background:
      'https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg',
    audioSrc: '/sfx/whoosh-02.mp3',
  },
  // ...
];

export default function DemoOne() {
  return (
    <FullScreenScrollFX
      durations={{ change: 0.7, snap: 800 }}
      footer={<div />}
      header={
        <>
          <h1 className="font-bold text-8xl">Luis Felipe</h1>
          <h2 className="font-bold text-4xl">Desenvolvedor Full-Stack</h2>
        </>
      }
      sections={sections}
      showProgress
    />
  );
}
