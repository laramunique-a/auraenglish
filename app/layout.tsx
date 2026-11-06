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

const SITE_URL = 'https://www.auraenglish.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Aura English | Escola de Inglês - Aulas Particular e em Grupo',
  description:
    'Aprenda inglês com aulas ao vivo 100% personalizadas, foco em conversação e aplicativo de memorização AuraUP. Destrave sua fluência do zero ao avançado.',
  keywords: [
    'Aura English',
    'Aulas de Inglês Online',
    'Curso de Inglês Online',
    'Aulas Particulares de Inglês',
    'Aulas de Inglês em Grupo',
    'Inglês para Conversação',
    'AuraUP',
    'Teacher Juliano',
    'Aprender Inglês Rápido',
    'Inglês para Negócios',
  ],
  authors: [{ name: 'Aura English' }],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo-aura-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  verification: {
    google: 'WukFNcDnPALhK7G_EpQcLfXL5s4f9Axl3743JnBtxH8',
  },
  openGraph: {
    title: 'Aura English | Expand Yourself',
    description:
      'Aprenda inglês com aulas ao vivo 100% personalizadas, foco em conversação e aplicativo de memorização AuraUP.',
    url: SITE_URL,
    siteName: 'Aura English',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aura English - Expand Yourself',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura English | Expand Yourself',
    description:
      'Aprenda inglês com aulas ao vivo 100% personalizadas, foco em conversação e aplicativo de memorização AuraUP.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Aura English',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-aura.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        'Aprenda inglês com aulas ao vivo 100% personalizadas, foco em conversação e aplicativo de memorização AuraUP.',
      slogan: 'Expand Yourself',
      telephone: '+5551992832896',
      email: 'auraenglish7@gmail.com',
      sameAs: [
        'https://www.instagram.com/julianoteacher/',
        'https://wa.me/5551992832896',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '15',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Aura English',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo são as aulas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As aulas tem duração de 1 hora, sempre ao vivo, nada gravado. Contudo, há a possibilidade de aumentar a carga horária de acordo com sua necessidade.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo é o curso?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Respondemos essa pergunta com outra: quanto tempo uma pessoa de 120kg leva para, começando a academia hoje, ficar no "shape"? Saiba que nosso cérebro é um músculo e que só depende de sua própria disciplina e dedicação para chegar no resultado que almeja. Cada um tem seu tempo, por isso as aulas são de acordo com a velocidade de aprendizado de cada aluno.',
          },
        },
        {
          '@type': 'Question',
          name: 'Nunca estudei inglês antes e não sei nada, sou um aluno do zero. Consigo aprender?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutamente sim! Não nascemos fluentes e hoje somos com tranquilidade. Tudo depende do seu esforço e dedicação nos estudos e de quanto, realmente, você quer tornar o sonho da fluência realidade.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gostei! Como faço pra começar as aulas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'É só clicar no botão abaixo que alinhamos via call o início das aulas!',
          },
        },
      ],
    },
  ],
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
        <link rel="icon" href="/icon.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
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
