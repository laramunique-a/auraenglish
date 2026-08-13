'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export default function FinalCTASection({ onOpenBooking }: FinalCTASectionProps) {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass-panel rounded-3xl p-10 sm:p-16 text-center space-y-8 border border-slate-200 shadow-xl overflow-hidden"
        >
          {/* Background Ambient Nebula Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#059669]" />
            <span className="text-xs font-public-sans tracking-widest text-[#059669] uppercase font-bold">
              Transforme Seu Futuro
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-metrophobic text-slate-900 max-w-3xl mx-auto leading-tight font-semibold">
            A sua próxima versão começa hoje.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-comfortaa max-w-2xl mx-auto leading-relaxed">
            Cada aula é mais um passo rumo a novas oportunidades, nova confiança e um mundo maior.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto py-4 px-9 rounded-full btn-primary-bloom text-white font-medium text-sm flex items-center justify-center gap-3 group"
            >
              <span>Agendar minha primeira aula</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-9 rounded-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-[#059669] font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group backdrop-blur-md shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

