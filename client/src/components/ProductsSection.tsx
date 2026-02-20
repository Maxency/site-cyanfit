/*
 * DESIGN: Dark Tech Premium — Seção de Produtos
 * Card CyanFit: layout split (texto + imagem), tags coloridas, stats
 * Card "Em Desenvolvimento": badge + título + subtítulo
 */

import { ArrowRight, ExternalLink, Brain, Calendar, ShoppingBag, Smartphone, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const GYM_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/UDSOB10vYl1YbcucXm6lnQ/sandbox/07WAFbUAxHLbBQ8LY5fUus-img-1_1771542210000_na1fn_Y3lhbmZpdC1neW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVURTT0IxMHZZbDFZYmN1Y1htNmxuUS9zYW5kYm94LzA3V0FGYlVBeEhMYkJROExZNWZVdXMtaW1nLTFfMTc3MTU0MjIxMDAwMF9uYTFmbl9ZM2xoYm1acGRDMW5lVzAuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WpB-tcFg1lVaXnF~14ZGzEckXD0RFwHzBUYjT~gmeIO5XIKmZRSFNM3rnsJdTwVSVB7s1Is-2~dqJY1JE4tQ3I93TQ11Jeh8c7cxdsIAS9DXeV4CUys3txsOH1GkrvLTKZnlq-bwYEbuVcuYHo0G9zdo3-1g0z2mJAUsV3lopz9kYtV5i7TW3QiFOlRp-z2SCXs2Q5GjSiSYQFC-HhjCga0P9MGqey3n6qCmkbJB2ls3itOwILXSAPISQBahOevbSXGszt-6Esjq4K4vWJgtib9CqvsrJ86o1mLEv9eguR4dXsPcuZz5RKhWW~PnceB7TQ6AJDD2ttI9ejLpTkHLAw__";

const features = [
  { icon: Brain, label: "Treinos com IA", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { icon: Calendar, label: "Agenda Automática", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { icon: ShoppingBag, label: "Loja Integrada", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { icon: Smartphone, label: "App Mobile", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
];

const cyanfitStats = [
  { value: "10k+", label: "Usuários" },
  { value: "50k+", label: "Alunos" },
  { value: "4.9★", label: "Avaliação" },
];

export default function ProductsSection() {
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
      id="produtos"
      ref={sectionRef}
      className="py-14 sm:py-24 px-4"
      style={{ background: "linear-gradient(180deg, #0d0118 0%, #130028 50%, #0d0118 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Nossos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Produtos
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg">Soluções SaaS completas para diferentes segmentos de mercado</p>
        </div>

        {/* CyanFit Card */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 rounded-2xl glass-gradient overflow-hidden mb-4 sm:mb-6 hover:border-purple-500/30 transition-colors"
          style={{
            transitionDelay: "100ms",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-4 sm:p-6 lg:p-10">
              {/* Product Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white">CyanFit</h3>
                  <p className="text-xs sm:text-sm text-white/50">Gestão para Personal Trainers</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Plataforma completa que revoluciona a forma como personal trainers gerenciam seus alunos, treinos e negócios. IA integrada, agenda automática e loja própria.
              </p>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 sm:mb-3">Principais Recursos</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature.label}
                      className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border ${feature.color}`}
                    >
                      <feature.icon className="w-3 h-3" />
                      {feature.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <a
                  href="https://cyanfit.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-white text-xs sm:text-sm transition-all duration-300 hover:scale-105 w-auto"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(6, 182, 212, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.3)";
                  }}
                >
                  Acessar CyanFit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button className="flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-white/70 text-xs sm:text-sm border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-300 w-auto">
                  <ExternalLink className="w-4 h-4" />
                  Ver Demonstração
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {cyanfitStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block lg:h-auto overflow-hidden">
              <img
                src={GYM_IMAGE}
                alt="CyanFit - Academia e Personal Training"
                className="w-full h-full object-cover"
                style={{ minHeight: "300px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(13, 1, 24, 0.6) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Em Desenvolvimento Card */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 rounded-2xl glass-premium p-10 text-center"
          style={{
            transitionDelay: "200ms",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-btn text-purple-400 text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            Em Desenvolvimento
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Novos produtos em breve</h3>
          <p className="text-white/50">Estamos trabalhando em novas soluções inovadoras. Fique atento!</p>
        </div>
      </div>
    </section>
  );
}
