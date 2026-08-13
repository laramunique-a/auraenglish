'use client';

import { motion } from 'framer-motion';
import { UserCheck, MessageSquareCode, ShieldCheck, Clock, Cpu, LineChart } from 'lucide-react';

export default function WhyAuraSection() {
  const cards = [
    {
      icon: UserCheck,
      title: 'Aprendizado Personalizado',
      description: 'Cada aluno segue uma trilha de aprendizado única, adaptada aos seus objetivos e ritmo.',
      accent: 'border-blue-200 bg-blue-50 text-[#2563eb]',
    },
    {
      icon: MessageSquareCode,
      title: 'Foco em Conversação',
      description: 'O inglês se aprende usando. Cada aula foca na comunicação ativa desde o primeiro momento.',
      accent: 'border-orange-200 bg-orange-50 text-[#ea580c]',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança Real',
      description: 'Desenvolva a segurança necessária para falar naturalmente em reuniões, entrevistas e viagens.',
      accent: 'border-emerald-200 bg-emerald-50 text-[#059669]',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Estude no seu próprio ritmo com horários adaptados ao seu estilo de vida e rotina.',
      accent: 'border-blue-200 bg-blue-50 text-[#2563eb]',
    },
    {
      icon: Cpu,
      title: 'Tecnologia Avançada',
      description: 'Recursos digitais de ponta e ferramentas interativas que aceleram sua jornada.',
      accent: 'border-orange-200 bg-orange-50 text-[#ea580c]',
    },
    {
      icon: LineChart,
      title: 'Feedback Contínuo',
      description: 'Acompanhe sua evolução exata com orientações claras e personalizadas dos mentores.',
      accent: 'border-emerald-200 bg-emerald-50 text-[#059669]',
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

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel-interactive rounded-3xl p-8 space-y-4 cursor-pointer group border border-slate-200/80"
              >
                <div className={`w-12 h-12 rounded-2xl border ${card.accent} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-metrophobic text-slate-900 font-semibold group-hover:text-[#2563eb] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 font-comfortaa leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

