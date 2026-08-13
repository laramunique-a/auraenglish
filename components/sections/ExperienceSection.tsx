'use client';

import { motion } from 'framer-motion';
import { Laptop, MessageSquare, FolderKanban, BrainCircuit, Sparkles, TrendingUp } from 'lucide-react';

export default function ExperienceSection() {
  const items = [
    {
      title: 'Aulas 100% Online',
      subtitle: 'Estude de qualquer lugar do mundo com flexibilidade.',
      icon: Laptop,
      chip: 'Acesso Global',
      chipColor: 'bg-blue-50 text-[#2563eb] border-blue-200',
    },
    {
      title: 'Aulas em Conversação',
      subtitle: 'O inglês é praticado em todas as aulas desde o primeiro dia.',
      icon: MessageSquare,
      chip: 'Prática Ativa',
      chipColor: 'bg-emerald-50 text-[#059669] border-emerald-200',
    },
    {
      title: 'Materiais Digitais',
      subtitle: 'Sempre disponíveis no seu portal exclusivo de estudos.',
      icon: FolderKanban,
      chip: 'Nuvem Conectada',
      chipColor: 'bg-orange-50 text-[#ea580c] border-orange-200',
    },
    {
      title: 'Sistema de Vocabulário',
      subtitle: 'Memorize naturalmente através de repetição contextualizada.',
      icon: BrainCircuit,
      chip: 'Fixação Inteligente',
      chipColor: 'bg-blue-50 text-[#2563eb] border-blue-200',
    },
    {
      title: 'Feedback Personalizado',
      subtitle: 'Saiba exatamente onde e como evoluir a cada aula.',
      icon: Sparkles,
      chip: 'Orientação Individual',
      chipColor: 'bg-emerald-50 text-[#059669] border-emerald-200',
    },
    {
      title: 'Acompanhamento de Progresso',
      subtitle: 'Celebre cada conquista com métricas claras de evolução.',
      icon: TrendingUp,
      chip: 'Métricas em Tempo Real',
      chipColor: 'bg-orange-50 text-[#ea580c] border-orange-200',
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <span className="text-xs font-public-sans text-[#059669] uppercase tracking-widest font-bold">
            Experiência de Aprendizado
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            Tudo o que você precisa para evoluir.
          </h2>
          <p className="text-base text-slate-600 font-comfortaa">
            Um ecossistema feito sob medida para maximizar seu foco e acelerar sua fluência real.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel-interactive rounded-3xl p-8 space-y-5 flex flex-col justify-between group border border-slate-200/80"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-900 group-hover:border-[#2563eb] transition-colors shadow-sm">
                    <Icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <span className={`px-3 py-1 rounded-full border text-[11px] font-public-sans font-semibold ${item.chipColor}`}>
                    {item.chip}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-metrophobic text-slate-900 font-semibold group-hover:text-[#2563eb] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-comfortaa leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

