'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center pt-28 pb-10 sm:pt-36 sm:pb-16 px-5 sm:px-8 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Hero Content (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Main Headline with Blur + Fade Up */}
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-6xl lg:text-7xl font-metrophobic tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1]"
          >
            Expanda seu mundo através do <span className="bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#fc9103] bg-clip-text text-transparent">Inglês</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg text-slate-600 font-comfortaa max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Aprender inglês não é sobre memorizar regras gramaticais. É sobre construir confiança, criar oportunidades e se tornar a pessoa que você deseja ser.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1 sm:pt-2"
          >
            <a
              id="hero-quero-ser-fluente"
              href="#classes"
              className="w-full sm:w-auto py-4 px-8 rounded-full btn-primary-bloom text-white font-medium text-sm flex items-center justify-center gap-3 group"
            >
              <span>Quero ser fluente</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#method"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white/80 hover:bg-white border border-slate-200 text-slate-800 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group backdrop-blur-md shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#2563eb] group-hover:rotate-45 transition-transform" />
              <span>Conheça o Método Aura</span>
            </a>
          </motion.div>
        </div>

        {/* Abstract Cosmic Tech Visual Container (Right 5 Cols - Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[420px] flex items-center justify-center"
          >
            {/* Outer Rotating Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[#2563eb]/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Curved "EXPAND YOURSELF" Slogan & Tapered Orange Arcs below the Outer Ring */}
            <svg
              viewBox="0 0 420 420"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none select-none"
              aria-hidden="true"
            >
              <defs>
                {/* Counter-clockwise bottom arc (r=236) so curved text reads upright left-to-right */}
                <path
                  id="hero-expand-yourself-arc"
                  d="M 5.62 328 A 236 236 0 0 0 414.38 328"
                  fill="none"
                />
              </defs>

              {/* Left Tapered Orange Arc (163° -> 140°) */}
              <path
                d="M -8.04 276.67 A 229.8 229.8 0 0 0 33.97 357.72 A 1.8 1.8 0 0 0 36.73 355.40 A 226.2 226.2 0 0 1 -8.04 276.67 Z"
                fill="#ff6b00"
              />

              {/* Right Tapered Orange Arc (17° -> 40°) */}
              <path
                d="M 428.04 276.67 A 229.8 229.8 0 0 1 386.03 357.72 A 1.8 1.8 0 0 1 383.27 355.40 A 226.2 226.2 0 0 0 428.04 276.67 Z"
                fill="#ff6b00"
              />

              {/* Curved Slogan Text */}
              <text
                fill="#ff6b00"
                fontSize="21.5"
                fontWeight="700"
                letterSpacing="0.21em"
                className="font-public-sans uppercase"
              >
                <textPath
                  href="#hero-expand-yourself-arc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  EXPAND YOURSELF
                </textPath>
              </text>
            </svg>

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

