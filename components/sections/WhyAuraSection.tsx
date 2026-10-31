'use client';

import { motion } from 'framer-motion';
import { Video, Smartphone, Laptop, Waves, ArrowRight } from 'lucide-react';

export default function WhyAuraSection() {
  const pillars = [
    {
      icon: Video,
      title: 'Conversação Online',
      description:
        'Aulas de 1 hora realizadas pelo Zoom com interação dinâmica. Foco intenso na conversação para desenvolver habilidades comunicativas de forma prática e eficaz.',
    },
    {
      icon: Smartphone,
      title: 'Materiais Didáticos',
      description:
        'Os materiais didáticos são 100% digitais e gratuitos. Além de usarmos aplicativo de memorização para gravar palavras novas e aprender mais rápido.',
    },
    {
      icon: Laptop,
      title: 'Aulas Individuais ou em Grupo',
      description:
        'Todas as aulas são personalizadas para atender às necessidades específicas de cada aluno e você pode escolher entre individuais ou em pequenos grupos de até três pessoas.',
    },
    {
      icon: Waves,
      title: '100% em Inglês',
      description:
        'Todas as aulas são 100% em inglês desde o nível básico, imersão total na língua! Sem tradutores, para um aprendizado natural e eficiente. Acredite, você dá conta e eu vou te provar na sua primeira aula.',
    },
  ];

  return (
    <section className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Por que a Aura
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            Por que os alunos escolhem a Aura
          </h2>
          <p className="text-base text-slate-600 font-comfortaa">
            Desenhado para quem vê o inglês como um investimento na sua transformação pessoal.
          </p>
        </motion.div>

        {/* 2x2 Grid with Vertical Divider on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-x-20 pt-2">
          {/* Central Vertical Line on Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />

          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-4 px-4 sm:px-8 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-metrophobic text-slate-900 font-bold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed max-w-md">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button leading to ClassesSection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <a
            id="why-aura-quero-ser-fluente"
            href="#classes"
            className="py-4 px-10 rounded-full btn-primary-bloom text-white font-medium text-sm sm:text-base flex items-center justify-center gap-3 group shadow-lg"
          >
            <span>Quero ser fluente</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

