'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5551992832896?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20minhas%20aulas%20de%20ingl%C3%AAs%20na%20Aura%20English.';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Quanto tempo são as aulas?',
      answer:
        'As aulas tem duração de 1 hora, sempre ao vivo, nada gravado. Contudo, há a possibilidade de aumentar a carga horária de acordo com sua necessidade.',
    },
    {
      question: 'Quanto tempo é o curso?',
      answer:
        'Respondemos essa pergunta com outra: quanto tempo uma pessoa de 120kg leva para, começando a academia hoje, ficar no "shape"?\nSaiba que nosso cérebro é um músculo e que só depende de sua própria disciplina e dedicação para chegar no resultado que almeja. Cada um tem seu tempo, por isso as aulas são de acordo com a velocidade de aprendizado de cada aluno.',
    },
    {
      question: 'Nunca estudei inglês antes e não sei nada, sou um aluno do zero. Consigo aprender?',
      answer:
        'Absolutamente sim! Não nascemos fluentes e hoje somos com tranquilidade. Tudo depende do seu esforço e dedicação nos estudos e de quanto, realmente, você quer tornar o sonho da fluência realidade.',
    },
    {
      question: 'Gostei! Como faço pra começar as aulas?',
      answer:
        'É só clicar no botão abaixo que alinhamos via call o início das aulas!',
      hasWhatsappCTA: true,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-8 relative z-10">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
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
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0"
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
                      <div className="px-6 pb-6 text-sm text-slate-600 font-comfortaa leading-relaxed border-t border-slate-100 pt-4 space-y-4">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                        {faq.hasWhatsappCTA && (
                          <div>
                            <a
                              href={WHATSAPP_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#059669] to-[#10b981] hover:from-[#047857] hover:to-[#059669] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-emerald-600/20"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>Chamar no WhatsApp</span>
                            </a>
                          </div>
                        )}
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

