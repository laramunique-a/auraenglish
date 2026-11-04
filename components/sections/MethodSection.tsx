'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HollowCurvedArrowProps {
  rotation: number;
  isActive: boolean;
}

function HollowCurvedArrow({ rotation, isActive }: HollowCurvedArrowProps) {
  const maskId = `brush-reveal-mask-${rotation}`;
  const blurId = `brush-soft-edge-${rotation}`;

  return (
    <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.svg
            key={`brush-arrow-${rotation}`}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotation}deg)` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{
              duration: 1.25,
              times: [0, 0.78, 1],
              ease: 'easeInOut',
            }}
            className="w-full h-full select-none pointer-events-none overflow-visible"
          >
            <defs>
              {/* Soft Gaussian blur so the reveal edge of the arrow appears as a smooth gradient */}
              <filter id={blurId} x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" />
              </filter>

              {/* Progressive curved mask that reveals the brush arrow from tail to arrowhead */}
              <mask id={maskId}>
                <rect x="0" y="0" width="120" height="120" fill="black" />
                <motion.path
                  d="M 32 116 C 16 70, 42 26, 106 8"
                  stroke="white"
                  strokeWidth="68"
                  strokeLinecap="round"
                  filter={`url(#${blurId})`}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: 'easeOut',
                  }}
                />
              </mask>
            </defs>

            {/* Blue gradient brush-stroke arrow revealed smoothly along its curve */}
            <image
              href="/brush-arrow-blue.png"
              x="0"
              y="0"
              width="120"
              height="120"
              mask={`url(#${maskId})`}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MethodSection() {
  const [activeArrow, setActiveArrow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArrow((prev) => (prev + 1) % 4);
    }, 1150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="method" className="scroll-mt-16 py-8 sm:py-10 px-5 sm:px-8 relative z-10 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] bg-[#2563eb]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-6 relative">
        {/* Header matching standard section typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-5xl font-metrophobic text-slate-900 leading-tight">
            Inglês 360°
          </h2>
        </motion.div>

        {/* Interactive 360° Cycle Diagram - Dedicated 3x3 Grid so arrows never overlap text/images */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-8 md:gap-y-2 items-center">
            {/* CORNER 1 (Row 1, Col 1 on Desktop): Top-Left Arrow (Left -> Top) */}
            <div className="hidden md:flex md:col-start-1 md:row-start-1 items-end justify-end pr-4 pb-2 h-full">
              <HollowCurvedArrow rotation={0} isActive={activeArrow === 0} />
            </div>

            {/* TOP NODE (Row 1, Col 2 on Desktop): AuraUP */}
            <div className="order-1 md:order-none md:col-start-2 md:row-start-1 flex flex-col items-center text-center max-w-sm mx-auto group cursor-pointer">
              <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <Image
                  src="/method-app.png"
                  alt="AuraUP"
                  width={560}
                  height={560}
                  sizes="(max-width: 640px) 112px, 160px"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-metrophobic font-bold text-slate-900 leading-snug group-hover:text-[#2563eb] transition-colors duration-300 ease-out">
                AuraUP
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed">
                Nosso aplicativo de memorização que ajuda você a gravar as palavras, expressões de cada aula e consolidar seu vocabulário.
              </p>

              {/* Mobile Flow Connector */}
              <div className="md:hidden pt-4 text-[#2563eb]/60">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>

            {/* CORNER 2 (Row 1, Col 3 on Desktop): Top-Right Arrow (Top -> Right) */}
            <div className="hidden md:flex md:col-start-3 md:row-start-1 items-end justify-start pl-4 pb-2 h-full">
              <HollowCurvedArrow rotation={90} isActive={activeArrow === 1} />
            </div>

            {/* LEFT NODE (Row 2, Col 1 on Desktop): Aulas 100% em inglês */}
            <div className="order-4 md:order-none md:col-start-1 md:row-start-2 flex flex-col items-center text-center max-w-sm mx-auto group cursor-pointer">
              <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <Image
                  src="/method-aulas.png"
                  alt="Aulas 100% em inglês"
                  width={560}
                  height={560}
                  sizes="(max-width: 640px) 112px, 160px"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-metrophobic font-bold text-slate-900 leading-snug group-hover:text-[#2563eb] transition-colors duration-300 ease-out">
                Aulas 100% em inglês
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed">
                Desde a primeira aula, você terá um ambiente 100% em inglês para o seu nível, mesmo para um completo iniciante
              </p>
            </div>

            {/* CENTER NODE ON DESKTOP (Row 2, Col 2): Animated School Logo Orb matching HeroSection */}
            <div className="hidden md:flex md:col-start-2 md:row-start-2 items-center justify-center py-4">
              <div className="relative w-44 h-44 lg:w-48 lg:h-48 flex items-center justify-center">
                {/* Outer Rotating Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-slate-200 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-[#2563eb]/20 animate-[spin_20s_linear_infinite_reverse]" />

                {/* Curved "EXPAND YOURSELF" Slogan & Tapered Orange Arcs below the Outer Ring */}
                <svg
                  viewBox="0 0 420 420"
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="method-expand-yourself-arc"
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
                      href="#method-expand-yourself-arc"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      EXPAND YOURSELF
                    </textPath>
                  </text>
                </svg>

                {/* Glassmorphic Central Orb Container with Floating School Logo */}
                <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full glass-panel flex items-center justify-center p-4 text-center border border-slate-200 shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 via-transparent to-[#ea580c]/10 animate-pulse pointer-events-none" />

                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-full h-full flex items-center justify-center p-1"
                  >
                    <Image
                      src="/logo-aura.png"
                      alt="Aura English Logo"
                      width={220}
                      height={220}
                      sizes="(max-width: 1024px) 144px, 160px"
                      className="w-auto h-28 lg:h-32 max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* RIGHT NODE (Row 2, Col 3 on Desktop): Conversation */}
            <div className="order-2 md:order-none md:col-start-3 md:row-start-2 flex flex-col items-center text-center max-w-sm mx-auto group cursor-pointer">
              <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <Image
                  src="/method-conversation.png"
                  alt="Conversation"
                  width={560}
                  height={560}
                  sizes="(max-width: 640px) 112px, 160px"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-metrophobic font-bold text-slate-900 leading-snug group-hover:text-[#2563eb] transition-colors duration-300 ease-out">
                Conversation
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed">
                Destrave a fluência colocando em prática a teoria e as palavras da aula anterior
              </p>

              {/* Mobile Flow Connector */}
              <div className="md:hidden pt-4 text-[#2563eb]/60">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>

            {/* CORNER 4 (Row 3, Col 1 on Desktop): Bottom-Left Arrow (Bottom -> Left) */}
            <div className="hidden md:flex md:col-start-1 md:row-start-3 items-start justify-end pr-4 pt-2 h-full">
              <HollowCurvedArrow rotation={270} isActive={activeArrow === 3} />
            </div>

            {/* BOTTOM NODE (Row 3, Col 2 on Desktop): Avaliação Personalizada */}
            <div className="order-3 md:order-none md:col-start-2 md:row-start-3 flex flex-col items-center text-center max-w-sm mx-auto group cursor-pointer">
              <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <Image
                  src="/method-avaliacao.png"
                  alt="Avaliação Personalizada"
                  width={560}
                  height={560}
                  sizes="(max-width: 640px) 112px, 160px"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-metrophobic font-bold text-slate-900 leading-snug group-hover:text-[#2563eb] transition-colors duration-300 ease-out">
                Avaliação Personalizada
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600 font-comfortaa leading-relaxed">
                Você tem avaliação através de boletim, garantindo feedback constante e específico com progresso consistente
              </p>

              {/* Mobile Flow Connector */}
              <div className="md:hidden pt-4 text-[#2563eb]/60">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>

            {/* CORNER 3 (Row 3, Col 3 on Desktop): Bottom-Right Arrow (Right -> Bottom) */}
            <div className="hidden md:flex md:col-start-3 md:row-start-3 items-start justify-start pl-4 pt-2 h-full">
              <HollowCurvedArrow rotation={180} isActive={activeArrow === 2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

