'use client';

import { motion } from 'framer-motion';
import { BookOpen, MessagesSquare, Mic, Sparkles } from 'lucide-react';

export default function MethodSection() {
  const steps = [
    {
      number: '01',
      title: 'Aprenda',
      description: 'Compreenda o idioma de forma natural através de conceitos imersivos e contextualizados, em vez de memorizar regras decoradas.',
      icon: BookOpen,
      gradient: 'from-blue-100/60 to-transparent',
      borderColor: 'border-blue-200',
      badgeColor: 'text-[#2563eb]',
    },
    {
      number: '02',
      title: 'Pratique',
      description: 'Aplique cada conceito imediatamente com cenários do mundo real, simulações profissionais e conversas autênticas.',
      icon: MessagesSquare,
      gradient: 'from-orange-100/60 to-transparent',
      borderColor: 'border-orange-200',
      badgeColor: 'text-[#ea580c]',
    },
    {
      number: '03',
      title: 'Fale',
      description: 'Desenvolva uma confiança inabalável falando inglês desde o primeiro dia em um ambiente acolhedor e focado.',
      icon: Mic,
      gradient: 'from-emerald-100/60 to-transparent',
      borderColor: 'border-emerald-200',
      badgeColor: 'text-[#059669]',
    },
    {
      number: '04',
      title: 'Expanda',
      description: 'Transforme o inglês em uma extensão natural do seu dia a dia, impulsionando sua carreira e oportunidades globais.',
      icon: Sparkles,
      gradient: 'from-indigo-100/60 to-transparent',
      borderColor: 'border-indigo-200',
      badgeColor: 'text-indigo-600',
    },
  ];

  return (
    <section id="method" className="py-24 px-6 sm:px-8 relative z-10">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Metodologia
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            O Método Aura
          </h2>
          <p className="text-base text-slate-600 font-comfortaa leading-relaxed">
            Uma experiência de aprendizado construída em torno de como as pessoas realmente se tornam fluentes.
          </p>
        </motion.div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass-panel-interactive rounded-3xl p-8 flex flex-col justify-between overflow-hidden group min-h-[320px] border border-slate-200/80"
              >
                {/* Subtle Gradient Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.gradient} rounded-bl-full pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-metrophobic font-bold ${step.badgeColor}`}>
                      Etapa {step.number}
                    </span>
                    <div className={`p-3 rounded-2xl bg-white border ${step.borderColor} ${step.badgeColor} shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-metrophobic text-slate-900 font-semibold mb-3 group-hover:text-[#2563eb] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-comfortaa leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-public-sans text-slate-500 group-hover:text-slate-800 transition-colors">
                  <span>Fase {step.number} de 04</span>
                  <div className="flex-1 h-[2px] bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2563eb]"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

