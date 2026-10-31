'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=juliano+teacher+english';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'João Guilherme Barbosa',
      role: 'Aluno Aura English',
      location: 'Avaliação no Google',
      text: 'Eu tive o prazer de aprender inglês com o Juliano durante os últimos meses. Ele é um professor incrível que tem um grande conhecimento no que ensina e uma grande habilidade de ensinar de forma clara e fácil de entender. Sua paixão e dedicação em ensinar são evidentes em cada aula. Eu recomendaria para qualquer pessoa que esteja procurando dar um boost no seu inglês.',
      initials: 'JG',
      gradient: 'from-[#2563eb] to-[#1d4ed8]',
    },
    {
      name: 'Lucas Rossi',
      role: 'Engenheiro de Software Senior',
      location: 'Avaliação no Google',
      text: 'Com seu apoio, eu fui capaz de melhorar minhas habilidades de falar, ler e escrever. Sua orientação e suporte me ajudaram a conseguir um emprego internacional em uma multinacional, mudando muito minha vida em diversos aspectos.',
      initials: 'LR',
      gradient: 'from-[#ea580c] to-[#f97316]',
    },
    {
      name: 'Mariana Duarte',
      role: 'Product Designer',
      location: 'Avaliação no Google',
      text: 'A abordagem focada em conversação 100% em inglês desde o primeiro dia fez toda a diferença. Pela primeira vez senti que estava expressando minhas ideias diretamente em inglês, sem ficar traduzindo regras na cabeça.',
      initials: 'MD',
      gradient: 'from-[#059669] to-[#10b981]',
    },
    {
      name: 'Andressa Silva',
      role: 'Aluna Aura English',
      location: 'Avaliação no Google',
      text: 'Professor excelente e muito didático! As aulas são totalmente focadas na minha necessidade de conversação e o método com o aplicativo de memorização ajuda demais a fixar o vocabulário de cada aula. Recomendo de olhos fechados!',
      initials: 'AS',
      gradient: 'from-[#2563eb] to-[#1d4ed8]',
    },
    {
      name: 'Rafael Mendes',
      role: 'Aluno Aura English',
      location: 'Avaliação no Google',
      text: 'Comecei do absoluto zero achando que não conseguiria acompanhar uma aula 100% em inglês, e já na primeira aula vi que era totalmente possível. A evolução na confiança para falar é impressionante!',
      initials: 'RM',
      gradient: 'from-[#ea580c] to-[#f97316]',
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
    <section className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
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

          {/* Google Reviews Rating Pill Link */}
          <div className="pt-2 flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              {/* Google "G" Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-metrophobic font-bold text-slate-900">5.0</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-public-sans text-slate-600 group-hover:text-[#2563eb] transition-colors font-medium">
                Ver avaliações no Google
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563eb] transition-colors" />
            </a>
          </div>
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
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-public-sans text-slate-400">• Google Reviews</span>
                </div>

                <p className="text-lg sm:text-xl text-slate-800 font-comfortaa leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200 flex-wrap">
                  <div className="flex items-center gap-4">
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

                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-public-sans font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Conferir no Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
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

