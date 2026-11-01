'use client';

import Image from 'next/image';
import { MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-xl py-6 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="space-y-2 max-w-sm">
            <a href="#" className="relative flex items-center gap-3 group justify-center md:justify-start">
              <Image
                src="/logo-aura-icon.png"
                alt="Aura English Emblem"
                width={64}
                height={64}
                unoptimized
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-comfortaa font-bold text-slate-900 leading-tight">
                Aura <span className="text-[#2563eb]">English</span>
              </span>
            </a>
            <p className="text-xs font-metrophobic text-[#2563eb] tracking-widest uppercase font-semibold">
              Expand Yourself
            </p>
            <p className="text-xs text-slate-500 font-comfortaa leading-relaxed">
              Uma plataforma moderna de inglês feita para destravar sua confiança, comunicação global e transformação pessoal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm font-comfortaa">
            <div className="space-y-2">
              <h4 className="text-xs font-public-sans uppercase tracking-widest text-slate-900 font-semibold">
                Contato
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <a
                    href="https://www.instagram.com/julianoteacher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#2563eb] transition-colors justify-center md:justify-start"
                  >
                    <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5551992832896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#059669] transition-colors justify-center md:justify-start"
                  >
                    <MessageCircle className="w-4 h-4 text-[#059669]" />
                    <span>(51) 99283-2896</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:auraenglish7@gmail.com"
                    className="flex items-center gap-2 hover:text-[#ea580c] transition-colors justify-center md:justify-start"
                  >
                    <Mail className="w-4 h-4 text-[#ea580c]" />
                    <span>auraenglish7@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center sm:items-start justify-between text-xs text-slate-500 font-public-sans gap-2">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {currentYear} Aura English. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a
                href="https://wa.me/5551984425053"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563eb] underline underline-offset-2 transition-colors"
              >
                Lara Almeida
              </a>
            </p>
          </div>
          <p>Feito para acelerar sua fluência.</p>
        </div>
      </div>
    </footer>
  );
}

