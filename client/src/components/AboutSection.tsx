/*
 * DESIGN: Dark Tech Premium — Seção Sobre Nós
 * Layout: Texto + cards de Missão, Visão, Valores
 * Animações: fade-in ao scroll, hover effects nos cards
 * Mobile: Responsivo com grid 1-2-4 colunas
 */

import { useEffect, useRef } from "react";
import { Target, Eye, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Transformar ideias em soluções digitais inovadoras que resolvem problemas reais e impactam positivamente os negócios de nossos clientes.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser a empresa de tecnologia mais confiável e inovadora, reconhecida por criar produtos SaaS que revolucionam a forma como as pessoas trabalham.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Inovação, integridade, colaboração e excelência. Acreditamos que a tecnologia deve servir às pessoas e que a qualidade nunca é negociável.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Compromisso",
    description: "Nos comprometemos com a excelência em tudo o que fazemos, desde o desenvolvimento de produtos até o atendimento ao cliente.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4"
      style={{ background: "linear-gradient(180deg, #0d0118 0%, #130028 50%, #0d0118 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Sobre{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              a Alenya
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Conheça a história, missão e valores que nos guiam na criação de soluções digitais inovadoras
          </p>
        </div>

        {/* Company Story */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-8 sm:mb-16 rounded-2xl glass-gradient p-4 sm:p-6 lg:p-12"
          style={{
            transitionDelay: "100ms",
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Nossa História</h3>
          <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
            <p>
              A Alenya nasceu da visão de transformar a forma como as empresas utilizam tecnologia. Fundada por um time apaixonado por inovação, começamos com uma missão clara: criar produtos SaaS que resolvem problemas reais e impactam positivamente a vida das pessoas.
            </p>
            <p>
              Desde o início, focamos em entender profundamente as necessidades de nossos clientes. Cada produto que desenvolvemos é resultado de pesquisa, dedicação e um compromisso inabalável com a qualidade. Hoje, somos orgulhosos de servir milhares de usuários em todo o Brasil.
            </p>
            <p>
              Continuamos crescendo, inovando e expandindo nosso portfólio de soluções. Mas nossa essência permanece a mesma: criar tecnologia que funciona, que é fácil de usar e que faz a diferença no dia a dia de nossos clientes.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 rounded-2xl glass-premium p-4 sm:p-6 hover:border-purple-500/30 transition-all duration-300 group"
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                style={{
                  boxShadow: `0 0 20px rgba(124, 58, 237, 0.3)`,
                }}
              >
                <value.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h4>

              {/* Description */}
              <p className="text-white/60 leading-relaxed text-xs sm:text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 rounded-2xl glass-gradient p-4 sm:p-6 lg:p-12 text-center"
          style={{
            transitionDelay: "600ms",
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Quer fazer parte da nossa jornada?</h3>
          <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos apaixonados por tecnologia e inovação. Se você compartilha de nossos valores, vamos adorar conhecê-lo!
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("carreiras");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-base text-white transition-all duration-300 hover:scale-105 w-auto"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0891b2)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(6, 182, 212, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px rgba(6, 182, 212, 0.4)";
            }}
          >
            Conheça nossas Carreiras
          </button>
        </div>
      </div>
    </section>
  );
}
