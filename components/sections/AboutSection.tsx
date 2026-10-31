'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy, Gamepad2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* AuraUP Video Demo (Left 6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl glass-panel p-3 sm:p-4 border border-slate-200 overflow-hidden shadow-xl">
              {/* Top Browser Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-public-sans text-slate-400 tracking-wider uppercase font-mono">
                  auraup.auraenglish.com.br
                </span>
              </div>

              {/* AuraUP Screen Recording Video */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-50">
                <video
                  src="/auraup-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block object-cover"
                />
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
              Conheça o AuraUP
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
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-metrophobic text-slate-900 font-semibold">Aprendizado Gamificado</h4>
                  <p className="text-xs text-slate-500">Ganhe XP e aprenda se divertindo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-[#059669] mt-0.5">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-metrophobic text-slate-900 font-semibold">Ranking e Evolução</h4>
                  <p className="text-xs text-slate-500">Suba de nível a cada nova aula</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

