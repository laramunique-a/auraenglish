'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AURAUP_LOGIN_URL = 'https://auraup.auraenglish.com.br/login';

interface NavbarProps {
  onOpenBooking: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Método', href: '#method' },
    { name: 'Aulas', href: '#classes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Name Lockup */}
          <a href="#" className="relative flex items-center gap-3 group">
            <Image
              src="/logo-aura-icon.png"
              alt="Aura English Emblem"
              width={64}
              height={64}
              priority
              unoptimized
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-comfortaa font-bold text-slate-900 leading-tight tracking-tight">
                Aura <span className="text-[#2563eb]">English</span>
              </span>
              <span className="text-[10px] font-public-sans tracking-[0.18em] text-[#2563eb] uppercase font-extrabold leading-tight">
                Expand yourself
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 font-comfortaa transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563eb] hover:after:w-full after:transition-all after:duration-250"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="navbar-auraup-login"
              href={AURAUP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-full btn-primary-bloom text-white text-xs font-semibold tracking-wide flex items-center gap-2"
            >
              <span>AuraUP Login</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] z-30 bg-white/95 backdrop-blur-2xl md:hidden px-6 py-8 flex flex-col justify-between border-t border-slate-200"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-metrophobic text-slate-800 hover:text-[#2563eb] transition-colors py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-6">
              <a
                id="mobile-auraup-login"
                href={AURAUP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full btn-primary-bloom text-white font-medium text-sm flex items-center justify-center gap-2"
              >
                <span>AuraUP Login</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

