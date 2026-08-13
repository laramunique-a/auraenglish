import type { Metadata } from 'next';
import { Metrophobic, Comfortaa, Public_Sans } from 'next/font/google';
import './globals.css';
import StarfieldCanvas from '@/components/ui/StarfieldCanvas';

const metrophobic = Metrophobic({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-metrophobic',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://auraenglish.com'),
  title: 'Aura English',
  description:
    'A Aura English é uma plataforma moderna e premium de inglês focada em confiança, oportunidades e crescimento pessoal. Expanda seu mundo através do inglês.',
  keywords: [
    'Curso de Inglês',
    'Aura English',
    'Aulas Particulares de Inglês',
    'Inglês para Negócios',
    'Fluência em Inglês',
    'Educação Premium',
  ],
  authors: [{ name: 'Aura English' }],
  icons: {
    icon: '/logo-aura-icon.png',
    shortcut: '/logo-aura-icon.png',
    apple: '/logo-aura-icon.png',
  },
  openGraph: {
    title: 'Aura English',
    description:
      'Aprender inglês não é sobre memorizar regras gramaticais. É sobre construir confiança, criar oportunidades e se tornar a pessoa que você deseja ser.',
    url: 'https://auraenglish.com',
    siteName: 'Aura English',
    images: [
      {
        url: '/logo-aura.png',
        width: 1200,
        height: 630,
        alt: 'Aura English Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura English',
    description:
      'Expanda seu mundo através do inglês. Aprendizado de inglês personalizado e premium.',
    images: ['/logo-aura.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Aura English',
  url: 'https://auraenglish.com',
  logo: 'https://auraenglish.com/logo-aura.png',
  description:
    'Uma forma moderna de aprender inglês focada em confiança, comunicação global e crescimento pessoal.',
  slogan: 'Expanda Seus Horizontes',
  sameAs: ['https://instagram.com', 'https://wa.me'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${metrophobic.variable} ${comfortaa.variable} ${publicSans.variable} h-full`}
    >
      <head>
        <link rel="icon" href="/logo-aura-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-aura-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a] font-sans relative selection:bg-[#2563eb] selection:text-white">
        <StarfieldCanvas />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

