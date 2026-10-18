'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MethodSection() {
  return (
    <section id="method" className="py-24 px-6 sm:px-8 relative z-10">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Metodologia
          </span>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            O Método Aura
          </h2>
          <p className="text-xl sm:text-2xl font-metrophobic font-semibold text-[#2563eb] tracking-wide">
            Inglês 360°
          </p>
        </motion.div>

        {/* Methodology Cycle Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-4xl rounded-3xl bg-white/80 backdrop-blur-xl p-4 sm:p-8 md:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/40 flex justify-center items-center overflow-hidden group">
            <Image
              src="/metodologia-ingles-360.png"
              alt="Metodologia Inglês 360° - Aura English"
              width={1024}
              height={764}
              priority
              className="w-full h-auto max-w-3xl object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

