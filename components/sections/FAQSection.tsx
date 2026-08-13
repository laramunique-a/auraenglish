'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Nunca estudei inglês antes. Consigo realmente aprender?',
      answer:
        'Sim, com certeza. O Método Aura é estruturado para construir sua confiança passo a passo desde o primeiro dia. Você aprenderá a se expressar naturalmente, sem medo de errar a gramática.',
    },
    {
      question: 'Quanto tempo leva para ficar fluente?',
      answer:
        'A fluência é uma evolução contínua. A maioria dos alunos da Aura nota um aumento significativo na confiança e na fala dentro de 3 a 6 meses de prática ativa.',
    },
    {
      question: 'As aulas são online?',
      answer:
        'Sim. 100% das nossas aulas são ao vivo e interativas, podendo ser acessadas de qualquer lugar do mundo pelo computador ou celular.',
    },
    {
      question: 'Com que frequência devo estudar?',
      answer:
        'Recomendamos de 2 a 3 sessões ao vivo por semana, combinadas com uma imersão leve diária usando nossos recursos digitais e sistemas de vocabulário.',
    },
    {
      question: 'Posso alternar entre aulas individuais e em grupo?',
      answer:
        'Sim, você tem total flexibilidade para ajustar o formato das suas aulas conforme sua rotina, orçamento ou objetivos de carreira mudem.',
    },
    {
      question: 'Vocês fornecem material didático?',
      answer:
        'Sim! Todos os cadernos digitais, módulos interativos de vocabulário e ferramentas de acompanhamento de progresso já estão incluídos, sem taxas ocultas.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-5xl font-metrophobic text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600 font-comfortaa">
            Tudo o que você precisa saber para iniciar sua jornada com a Aura.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-metrophobic text-lg text-slate-900 font-semibold hover:text-[#2563eb] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-600"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 font-comfortaa leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

