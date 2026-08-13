'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Lucas Rossi',
      role: 'Engenheiro de Software Senior',
      location: 'São Paulo → Londres, Reino Unido',
      text: 'A Aura English mudou a trajetória da minha carreira. Passei de hesitar nas reuniões globais a liderar apresentações de arquitetura de software internacionais com total confiança.',
      initials: 'LR',
      gradient: 'from-[#2563eb] to-[#1d4ed8]',
    },
    {
      name: 'Mariana Duarte',
      role: 'Product Designer',
      location: 'Lisboa, Portugal',
      text: 'A abordagem focada em conversação fez toda a diferença. Pela primeira vez senti que estava expressando minhas ideias diretamente em inglês, sem ficar traduzindo regras na cabeça.',
      initials: 'MD',
      gradient: 'from-[#ea580c] to-[#f97316]',
    },
    {
      name: 'Gabriel Alcantara',
      role: 'Líder de Growth Remoto',
      location: 'Toronto, Canadá',
      text: 'As escolas de idiomas tradicionais pareciam repetitivas. A Aura é como um centro de alta performance para desenvolvimento pessoal. O feedback individual é incrível.',
      initials: 'GA',
      gradient: 'from-[#059669] to-[#10b981]',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            Alunos reais. Transformação real.
          </h2>
          <p className="text-base text-slate-600 font-comfortaa">
            Histórias de pessoas que expandiram seu mundo através do inglês.
          </p>
        </motion.div>

        {/* Carousel Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-200 shadow-xl min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-200/60 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-slate-800 font-comfortaa leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-metrophobic font-bold text-sm shadow-md`}
                  >
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-base font-metrophobic text-slate-900 font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 font-public-sans">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#2563eb]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-sm"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-sm"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

