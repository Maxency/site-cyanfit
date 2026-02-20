/*
 * DESIGN: Dark Tech Premium — Hero Section
 * Fundo: gradiente roxo profundo com orbs de luz
 * Título: branco + gradiente roxo/magenta
 * Botões: roxo sólido + outline
 * Stats: 3 cards glassmorphism
 */

import { Sparkles, Mail, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

const stats = [
  { value: "1+", label: "Produtos Ativos" },
  { value: "10k+", label: "Usuários" },
  { value: "4.9★", label: "Avaliação" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d0118 0%, #1a0533 40%, #0d0118 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #d946ef, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-0">
        {/* Badge */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-premium text-white/80 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          style={{ transitionDelay: "0ms" }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          Tecnologia &amp; Desenvolvimento
        </div>

        {/* Main Title */}
        <h1
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-2xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6"
          style={{ transitionDelay: "100ms" }}
        >
          Transformando ideias em{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            soluções digitais
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          Criamos produtos SaaS inovadores que resolvem problemas reais. Tecnologia de ponta com foco em experiência do usuário.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-16"
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => scrollToSection("produtos")}
            className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-base text-white transition-all duration-300 hover:scale-105 w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              boxShadow: "0 0 25px rgba(124, 58, 237, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(124, 58, 237, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px rgba(124, 58, 237, 0.4)";
            }}
          >
            Ver Produtos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={openModal}
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-base text-white/80 border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto px-2 sm:px-0"
          style={{ transitionDelay: "400ms" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl glass-premium px-2 sm:px-4 py-3 sm:py-5 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-lg sm:text-2xl font-bold text-white mb-1" style={{color: '#dd73e1'}}>{stat.value}</div>
              <div className="text-xs text-white/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0d0118)",
        }}
      />
    </section>
  );
}
