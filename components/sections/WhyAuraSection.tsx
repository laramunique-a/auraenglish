'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WhyAuraSection() {
  const pillars = [
    {
      iconSrc: '/why-conversacao.png',
      title: 'Conversação Online',
      description:
        'Aulas de 1 hora realizadas pelo Zoom com interação dinâmica. Foco intenso na conversação para desenvolver habilidades comunicativas de forma prática e eficaz.',
    },
    {
      iconSrc: '/why-materiais.png',
      title: 'Materiais Didáticos',
      description:
        'Os materiais didáticos são 100% digitais. Além de usarmos nosso aplicativo de memorização para você gravar palavras novas e aprender muito mais rápido.',
    },
    {
      iconSrc: '/why-aulas.png',
      title: 'Aulas Individuais ou em Grupo',
      description:
        'Todas as aulas são personalizadas para atender às suas necessidades específicas e você pode escolher entre individuais ou em pequenos grupos de até quatro pessoas.',
    },
    {
      iconSrc: '/why-ingles.png',
      title: '100% em Inglês',
      description:
        'Todas as aulas são 100% em inglês desde o nível básico, imersão total na língua! Sem tradutores, para um aprendizado natural e eficiente. Acredite, você dá conta e eu vou te provar na sua primeira aula.',
    },
  ];

  return (
    <section className="scroll-mt-20 py-10 sm:py-16 px-5 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Por que a Aura
          </span>
          <h2 className="text-2xl sm:text-5xl font-metrophobic text-slate-900">
            Por que você escolhe a Aura?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-comfortaa">
            Desenhado para você que vê o inglês como um investimento na sua transformação pessoal.
          </p>
        </motion.div>

        {/* 2x2 Grid with Vertical Divider on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-12 lg:gap-x-20 pt-2">
          {/* Central Vertical Line on Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />

          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3 px-2 sm:px-8 group cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={384}
                  height={384}
                  sizes="(max-width: 640px) 96px, 112px"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <h3 className="text-lg sm:text-2xl font-metrophobic text-slate-900 font-bold group-hover:text-[#2563eb] transition-colors duration-300 ease-out">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button leading to ClassesSection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-2 sm:pt-4"
        >
          <a
            id="why-aura-quero-ser-fluente"
            href="#classes"
            className="w-full sm:w-auto py-4 px-10 rounded-full btn-primary-bloom text-white font-medium text-sm sm:text-base flex items-center justify-center gap-3 group shadow-lg"
          >
            <span>Quero ser fluente</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

