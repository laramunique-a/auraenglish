'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=juliano+teacher+english#mpd=~91451425451981504/customers/reviews';

const testimonials = [
  {
    name: 'João Guilherme Barbosa',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-1.png',
    text: 'Com seu apoio, eu fui capaz de melhorar minhas habilidades de falar, ler e escrever. Sua orientação e suporte me ajudaram a conseguir um emprego internacional em uma multinacional, mudando muito minha vida em diversos aspectos.\n\nEu tive o prazer de aprender inglês com o Juliano durante os últimos meses. Ele é um professor incrível que tem um grande conhecimento no que ensina e uma grande habilidade de ensinar de forma clara e fácil de entender. Sua paixão e dedicação em ensinar são evidentes em cada aula. Eu recomendaria este professor para qualquer pessoa que esteja procurando dar um boost no seu inglês.',
  },
  {
    name: 'Rúbia Luísa Wiest',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-2.png',
    text: 'Eu já fiz outros cursos de inglês, mas nunca criei apreço pelo idioma. Quando conheci o teacher Juliano já percebi que seria diferente.\n\nEle ensina para o aluno entender, não para decorar. Sempre traz ferramentas e tecnologias que inserem o idioma no dia a dia e as aulas são muito leves, divertidas e cheias de curiosidades.\n\nA aula de inglês é a hora terapêutica da minha semana. Super recomendo!!',
  },
  {
    name: 'Fernanda Barbosa',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-3.png',
    text: 'Minha experiência com o Teacher Juliano e suas aulas está sendo a melhor possível!! Logo eu, uma pessoa que odiava inglês, tinha muito preconceito, mas precisava dar mais esse passo na vida por necessidade. Já havia tentado fazer inglês, mas não deu certo, por sempre ter aquele método onde segue o calendário da escola, apostilas e afins, não se preocupando com o que realmente importa que é o aprendizado do aluno.\n\nHoje já fazem 6 meses que literalmente posso dizer que estou aprendendo inglês, foi um dos melhores investimentos, pois ele ensina, explica, tudo conforme nosso tempo de aprendizado, com toda paciência do mundo, sempre atento em como estamos indo, mostrando alternativas de jogos, filmes, séries e dicas para introduzir o inglês na nossa rotina e nos familiarizar ainda mais. Obrigada teacher por me fazer dar um novo sentido para o inglês!',
  },
  {
    name: 'Andresa Rosado',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-4.png',
    text: 'Eu recomendo muito o Teacher Juliano, ele me ajudou a entender determinadas regras que eu não conseguia entender quando passei por escolas tradicionais.\n\nAlém da aula ser bem dinâmica e voltada pra você e suas dificuldades. Tem conversação desde a 1ª aula, o que ajuda e muito a destravar o inglês.',
  },
  {
    name: 'Kamyla Martini',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-5.png',
    text: 'Já fui aluna de escolas de idioma e nenhuma me ensinou o tanto quanto já aprendi com o Juliano. De fato é o professor que vai destravar o medo de falar inglês, com aulas dinâmicas, leves e de fácil acesso para se tirar dúvidas, super competente, disposto e o melhor de tudo empático, desde que comecei a ter aulas com ele, fui perdendo essa trava, adoro as aulas do Juliano, The best Teacher. ❤️\n\nSou muito grata mesmo por estar aprendendo um novo idioma contigo!',
  },
  {
    name: 'Alex Gunther',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-6.png',
    text: 'Teacher Juliano tem uma metodologia de ensino extremamente eficiente, porque suas aulas não se resumem a repetições engessadas, presentes na maior parte dos cursos encontrados no mercado.\n\nO profissional tem uma linguagem leve, simples e bem-humorada, que cativa e estimula o aprendizado constante. Ele tem total atenção aos detalhes, especialmente às dificuldades apresentadas pelo aluno.\n\nHá uma preocupação pela excelência nesse sentido e respeitar o ritmo de aprendizado do aluno. Trata-se de um tutor de mão cheia e recomendo muito seu trabalho, para quem realmente deseja uma imersão na língua inglesa.',
  },
  {
    name: 'Jennifer Stein',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-7.png',
    text: 'O teacher Juliano é incrível, uma pessoa que se preocupa realmente com o teu aprendizado e não mede esforços para que tu realmente progrida nas aulas. A metodologia dele é pensada exclusivamente para cada aluno, o que otimiza o tempo e nos faz colher mais resultados - nos motivando mais a continuar.\n\nPosso dizer que minha experiência nas aulas foi fantástica, eu realmente aprendi a usar o que vimos em aula no cotidiano sem nenhuma dificuldade (coisa que antes eu achava que era bem mais difícil). As aulas com o teacher são as melhores não apenas pelo domínio dele no idioma ou pela paixão que ele tem em dar aulas, mas por que ele se coloca no nosso lugar, persiste conosco nas dificuldades e não nos deixa desistir!',
  },
  {
    name: 'Gelceu Cabral',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-8.png',
    text: 'Simplesmente a melhor experiência que já tive com a Língua Inglesa. Professor dedicado, atencioso, didática excelente na qual você realmente aprende o caminho da fluência no idioma.\n\nFiz o curso e indico sem medo!',
  },
  {
    name: 'Vitoria Giacomolli',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-9.png',
    text: 'Juliano é um EXCELENTE professor.\n\nAs aulas não são nem um pouco monótonas, mas sim dinâmicas e divertidas, a energia dele é contagiante. A dedicação e comprometimento vão muito além da aula. Consegue encontrar a forma que cada aluno tem de aprender, sem perder a personalidade.\n\nRecomendo tanto para quem já fala e quer se aperfeiçoar, como para quem vem do zero, sem saber absolutamente nada. Esse é o professor que vai fazer tu perder o medo, e se apaixonar por inglês.',
  },
  {
    name: 'Carine Bittencourt',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-10.png',
    text: 'De longe o melhor professor que já tive! Me fez realmente gostar de estudar inglês.\n\nAulas dinâmicas e com muita conversação, super indico.',
  },
  {
    name: 'Nathalia Matias',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-11.png',
    text: 'Tive aulas com o professor Juliano por aproximadamente 10 meses e foi de longe o melhor professor que já tive.\n\nAprendi inglês na prática, com aulas diferentes e interativas e não só com frases decoradas de livros.\n\nRecomendo muito para qualquer um que busque aprender inglês de um jeito fácil e excelente. Saí do curso tendo certeza que ele me abriria muitas portas para o futuro.',
  },
  {
    name: 'Giovana Pinheiro',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-12.png',
    text: 'Aulas muito dinâmicas e divertidas! Fiquei muito satisfeita com as aulas e me sinto muito mais preparada para falar inglês!\n\nAcredito que outro ponto é o incentivo a continuar buscando contatos e novos aprendizados depois do curso!',
  },
  {
    name: 'Felipe Vargas',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-13.png',
    text: 'Ótimo professor, didático, dinâmico e descontraído. Me senti à vontade para falar, errar e aprender nas aulas do Juliano.\n\nAprendi muito nas aulas dele.',
  },
  {
    name: 'Ana Carvalho',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-14.png',
    text: 'O Juliano me abriu as portas para o mundo do Inglês. A partir das suas aulas dinâmicas e cheias de carisma, tenho certeza que me proporcionou muito conhecimento.\n\nFoi um prazer estar contigo aos sábados pela manhã. Obrigada por tudo!',
  },
  {
    name: 'Julian Andrews',
    location: 'Avaliação no Google',
    avatar: '/reviews/review-15.png',
    text: 'Posso afirmar com toda certeza que o Teacher Juliano é o melhor professor de inglês que já conheci. Ele tem uma didática excelente e mantém o inglês do início ao fim em todas as aulas.\n\nDesde que iniciei as aulas com o Juliano, tenho evoluído bastante no inglês, graças a competência e dedicação dele em ensinar de maneira extremamente clara e eficaz. Thank you so much, Teacher!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="scroll-mt-20 py-10 sm:py-16 px-5 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
        >
          <span className="text-xs font-public-sans text-[#2563eb] uppercase tracking-widest font-bold">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-5xl font-metrophobic text-slate-900">
            Alunos reais. Transformação real.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-comfortaa">
            Histórias de pessoas que expandiram seu mundo através do inglês.
          </p>

          {/* Google Reviews Rating Pill Link */}
          <div className="pt-2 flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 rounded-2xl sm:rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              {/* Google "G" Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-metrophobic font-bold text-slate-900">5.0</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-public-sans text-slate-600 group-hover:text-[#2563eb] transition-colors font-medium">
                Ver avaliações no Google
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563eb] transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Carousel Box */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-slate-200 shadow-xl min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
            <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 text-slate-200/60 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-public-sans text-slate-500">• Google Reviews</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-comfortaa leading-relaxed whitespace-pre-line">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200 flex-wrap">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 bg-slate-100">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-metrophobic text-slate-900 font-bold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-xs text-slate-500 font-public-sans">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-public-sans font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Conferir no Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Discreet Carousel Controls */}
          <div className="flex items-center justify-between pt-4 px-2">
            <div className="flex items-center gap-1 flex-wrap">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="p-2 flex items-center justify-center cursor-pointer"
                  aria-label={`Ir para depoimento ${idx + 1}`}
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-300 block ${
                      idx === currentIndex
                        ? 'w-5 bg-[#2563eb]/80'
                        : 'w-1.5 bg-slate-300/80 hover:bg-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition-all cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition-all cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
