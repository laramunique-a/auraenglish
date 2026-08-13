'use client';

import { motion } from 'framer-motion';
import { Check, User, Users, ArrowRight } from 'lucide-react';

interface ClassesSectionProps {
  onOpenBooking: () => void;
}

export default function ClassesSection({ onOpenBooking }: ClassesSectionProps) {
  return (
    <section id="classes" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <span className="text-xs font-public-sans text-[#ea580c] uppercase tracking-widest font-bold">
            Formatos de Aula
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            Escolha a experiência ideal para você.
          </h2>
          <p className="text-base text-slate-600 font-comfortaa">
            Mentoria de alto nível adaptada à sua rotina e preferências de aprendizado.
          </p>
        </motion.div>

        {/* 2 Format Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Private Classes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-interactive rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 border-[#2563eb]/40 relative overflow-hidden group shadow-md"
          >
            {/* Glow Badge */}
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-[11px] font-public-sans uppercase tracking-widest font-bold px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Mais Popular
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-100 text-[#2563eb]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-metrophobic text-slate-900 font-bold">Aulas Individuais</h3>
                  <span className="text-xs text-slate-500 font-public-sans">Mentoria 1-on-1</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-comfortaa leading-relaxed">
                Currículo 100% personalizado e desenvolvido de acordo com seus objetivos profissionais, prazos e contexto de atuação.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Aulas personalizadas e focadas na sua necessidade',
                  'Horários flexíveis adaptados à sua agenda',
                  'Feedback e correções individuais em tempo real',
                  'Evolução e fluência no menor tempo possível',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-comfortaa">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-full btn-primary-bloom text-white font-medium text-sm flex items-center justify-center gap-2 group"
              >
                <span>Começar Individualmente</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Small Group Classes */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-interactive rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-slate-200/80 relative overflow-hidden group shadow-md"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-100 text-[#ea580c]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-metrophobic text-slate-900 font-bold">Aulas em Grupo Reduzido</h3>
                  <span className="text-xs text-slate-500 font-public-sans">Máximo de 4 a 6 alunos</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-comfortaa leading-relaxed">
                Ambiente dinâmico e altamente interativo, focado em discussões colaborativas e fluência social.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Conversas interativas baseadas em situações reais',
                  'Ambiente colaborativo de aprendizado em grupo',
                  'Modelo de investimento acessível',
                  'Mesma metodologia rigorosa da Aura',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-comfortaa">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Entrar para um Grupo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

