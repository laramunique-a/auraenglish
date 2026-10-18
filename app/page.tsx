'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyAuraSection from '@/components/sections/WhyAuraSection';
import MethodSection from '@/components/sections/MethodSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ClassesSection from '@/components/sections/ClassesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/layout/Footer';
import BookingModal from '@/components/ui/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] relative selection:bg-[#2563eb] selection:text-white">
      {/* Scroll-sensitive Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Landing Sections */}
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <WhyAuraSection />
      <ExperienceSection />
      <ClassesSection onOpenBooking={handleOpenBooking} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}

