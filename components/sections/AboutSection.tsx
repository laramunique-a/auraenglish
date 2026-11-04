'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Gamepad2 } from 'lucide-react';

export default function AboutSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="scroll-mt-20 py-10 sm:py-16 px-5 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* AuraUP Video Demo (Left 6 Cols on Desktop, Below Text on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl glass-panel p-2.5 sm:p-4 border border-slate-200 overflow-hidden shadow-xl">
              {/* Top Browser Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 px-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-public-sans text-slate-500 tracking-wider uppercase font-mono">
                  auraup.auraenglish.com.br
                </span>
              </div>

              {/* AuraUP Screen Recording Video */}
              <div
                ref={containerRef}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-50 aspect-[1920/1392]"
              >
                {isVideoVisible && (
                  <video
                    src="/auraup-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full block object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Text Content (Right 6 Cols on Desktop, First on Mobile) */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Conheça o AuraUP
            </div>

            <h2 className="text-2xl sm:text-5xl font-metrophobic text-slate-900 leading-tight">
              Uma forma moderna de aprender inglês.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed">
              Com o app AuraUP você aprende inglês jogando e se divertindo! Aprenda palavras novas, adquira fluência, ganhe XP e entre em competição com seus colegas subindo de nível a cada aula.
            </p>

            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-left max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-start gap-3 p-3 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border border-slate-200/60 sm:border-0">
                <div className="p-2 rounded-xl bg-blue-100 text-[#2563eb] mt-0.5 flex-shrink-0">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-metrophobic text-slate-900 font-semibold">Aprendizado Gamificado</h3>
                  <p className="text-xs text-slate-500">Ganhe XP e aprenda se divertindo</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 sm:p-0 rounded-2xl bg-white/60 sm:bg-transparent border border-slate-200/60 sm:border-0">
                <div className="p-2 rounded-xl bg-emerald-100 text-[#059669] mt-0.5 flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-metrophobic text-slate-900 font-semibold">Ranking e Evolução</h3>
                  <p className="text-xs text-slate-500">Suba de nível a cada nova aula</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

