'use client';

import Image from 'next/image';
import { MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-xl pt-16 pb-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="space-y-4 max-w-sm">
            <a href="#" className="relative flex items-center gap-3 group justify-center md:justify-start">
              <Image
                src="/logo-aura-icon.png"
                alt="Aura English Emblem"
                width={64}
                height={64}
                unoptimized
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-comfortaa font-bold text-slate-900 leading-tight">
                Aura <span className="text-[#2563eb]">English</span>
              </span>
            </a>
            <p className="text-sm font-metrophobic text-[#2563eb] tracking-widest uppercase font-semibold">
              Expanda seus horizontes.
            </p>
            <p className="text-xs text-slate-500 font-comfortaa leading-relaxed">
              Uma plataforma moderna de inglês feita para destravar sua confiança, comunicação global e transformação pessoal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-10 text-sm font-comfortaa">
            <div className="space-y-3">
              <h4 className="text-xs font-public-sans uppercase tracking-widest text-slate-900 font-semibold">
                Navegação
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#about" className="hover:text-slate-900 transition-colors">Sobre</a></li>
                <li><a href="#method" className="hover:text-slate-900 transition-colors">Método</a></li>
                <li><a href="#classes" className="hover:text-slate-900 transition-colors">Aulas</a></li>
                <li><a href="#faq" className="hover:text-slate-900 transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-public-sans uppercase tracking-widest text-slate-900 font-semibold">
                Contato
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a
                    href="https://instagram.com"
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
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#059669] transition-colors justify-center md:justify-start"
                  >
                    <MessageCircle className="w-4 h-4 text-[#059669]" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@auraenglish.com"
                    className="flex items-center gap-2 hover:text-[#ea580c] transition-colors justify-center md:justify-start"
                  >
                    <Mail className="w-4 h-4 text-[#ea580c]" />
                    <span>contact@auraenglish.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-public-sans uppercase tracking-widest text-slate-900 font-semibold">
                Legal
              </h4>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Termos de Serviço</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-public-sans gap-4">
          <p>© {currentYear} Aura English. Todos os direitos reservados.</p>
          <p>Feito para acelerar sua fluência.</p>
        </div>
      </div>
    </footer>
  );
}

