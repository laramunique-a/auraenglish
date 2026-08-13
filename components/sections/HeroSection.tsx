'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Hero Content (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Main Headline with Blur + Fade Up */}
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-metrophobic tracking-tight text-slate-900 leading-[1.1]"
          >
            Expanda seu mundo através do <span className="bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#fc9103] bg-clip-text text-transparent">Inglês</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-comfortaa max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Aprender inglês não é sobre memorizar regras gramaticais. É sobre construir confiança, criar oportunidades e se tornar a pessoa que você deseja ser.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto py-4 px-8 rounded-full btn-primary-bloom text-white font-medium text-sm flex items-center justify-center gap-3 group"
            >
              <span>Agende sua primeira aula</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#method"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white/80 hover:bg-white border border-slate-200 text-slate-800 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group backdrop-blur-md shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#2563eb] group-hover:rotate-45 transition-transform" />
              <span>Conheça o Método Aura</span>
            </a>
          </motion.div>

          {/* Trust Metrics Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-public-sans"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>100% Prático & Foco em Conversação</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Acessível e Personalizado</span>
          </motion.div>
        </div>

        {/* Abstract Cosmic Tech Visual Container (Right 5 Cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[420px] flex items-center justify-center"
          >
            {/* Outer Rotating Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[#2563eb]/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Glassmorphic Central Orb Container - Only Logo */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full glass-panel flex items-center justify-center p-6 text-center border border-slate-200 shadow-xl overflow-hidden">
              {/* Subtle Animated Background Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 via-transparent to-[#ea580c]/10 animate-pulse pointer-events-none" />

              {/* Slow Floating Official Transparent Logo */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full h-full flex items-center justify-center p-2"
              >
                <Image
                  src="/logo-aura.png"
                  alt="Aura English Logo"
                  width={300}
                  height={300}
                  priority
                  unoptimized
                  className="w-auto h-48 sm:h-56 max-w-full max-h-full object-contain drop-shadow-sm"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

