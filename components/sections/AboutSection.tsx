'use client';

import { motion } from 'framer-motion';
import { Sparkles, Globe2, MessageSquare, Zap, Target } from 'lucide-react';
import Counter from '@/components/ui/Counter';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Interactive Workspace Mockup (Left 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl glass-panel p-8 border border-slate-200 overflow-hidden shadow-lg">
              {/* Top Bar of Interface */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-public-sans text-slate-400 tracking-wider uppercase font-mono">
                  Central de Comando Aura v2.4
                </span>
              </div>

              {/* Learning Dashboard Content Mockup */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-100 text-[#2563eb]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-metrophobic text-slate-900 font-semibold">Prática de Conversação Ativa</h4>
                      <p className="text-xs text-slate-500">Feedback de fluência em tempo real</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-public-sans font-semibold">
                    100% Ativo
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <div className="text-xs text-slate-500 font-public-sans">Índice de Confiança</div>
                    <div className="text-2xl font-metrophobic text-slate-900 font-bold flex items-center gap-1">
                      <Counter end={96} suffix="%" />
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#059669] w-[96%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <div className="text-xs text-slate-500 font-public-sans">Retenção de Vocabulário</div>
                    <div className="text-2xl font-metrophobic text-slate-900 font-bold">
                      <Counter end={3} suffix="x Mais Rápido" prefix="" />
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden mt-2">
                      <div className="h-full bg-gradient-to-r from-[#ea580c] to-[#059669] w-[88%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-[#2563eb]" />
                    <span className="text-xs text-slate-700 font-comfortaa font-medium">Rede de Mentoria Global</span>
                  </div>
                  <Zap className="w-4 h-4 text-[#ea580c]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content (Right 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Conheça a Aura English
            </div>

            <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900 leading-tight">
              Uma forma moderna de aprender inglês.
            </h2>

            <p className="text-base text-slate-600 font-comfortaa leading-relaxed">
              Com o app AuraUP você aprende inglês jogando e se divertindo! Aprenda palavras novas, adquira fluência, ganhe XP e entre em competição com seus colegas subindo de nível a cada aula.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-100 text-[#2563eb] mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-metrophobic text-slate-900 font-semibold">Focado em Objetivos</h4>
                  <p className="text-xs text-slate-500">Sob medida para sua carreira</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-[#059669] mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-metrophobic text-slate-900 font-semibold">Alcance Global</h4>
                  <p className="text-xs text-slate-500">Conecte-se a oportunidades globais</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

