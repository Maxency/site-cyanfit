import React, { useState } from 'react';
import { Code2, Dumbbell, ArrowRight, Sparkles, Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import alenyaLogo from '../assets/95a19947732569c7fd04fd408c1c6a014a54e6bf.png'
import ContactForm from '../components/ContactForm';

export function AlenyaHub() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Alenya
              </span>
            </div>
            
            <div />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Tecnologia & Desenvolvimento</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Transformando ideias em{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              soluções digitais
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Criamos produtos SaaS inovadores que resolvem problemas reais. 
            Tecnologia de ponta com foco em experiência do usuário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Ver Produtos
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Fale Conosco
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-16 sm:mt-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                1+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Produtos Ativos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                10k+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Usuários</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                4.9★
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Nossos{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Produtos
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Soluções SaaS completas para diferentes segmentos de mercado
            </p>
          </div>

          {/* CyanFit Product Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 hover:border-blue-500/50 transition-all group">
            {/* Left - Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
                  <Dumbbell className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">CyanFit</h3>
                  <p className="text-sm text-gray-400">Gestão para Personal Trainers</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Plataforma completa que revoluciona a forma como personal trainers gerenciam 
                seus alunos, treinos e negócios. IA integrada, agenda automática e loja própria.
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Principais Recursos
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm border border-blue-500/30">
                    Treinos com IA
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-lg text-sm border border-purple-500/30">
                    Agenda Automática
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1.5 rounded-lg text-sm border border-green-500/30">
                    Loja Integrada
                  </span>
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-lg text-sm border border-orange-500/30">
                    App Mobile
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Link
                  to="/cyanfit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Acessar CyanFit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Ver Demonstração
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">10k+</div>
                  <div className="text-xs text-gray-400">Usuários</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">50k+</div>
                  <div className="text-xs text-gray-400">Alunos</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs text-gray-400">Avaliação</div>
                </div>
              </div>
            </div>

            {/* Right - Preview Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                  alt="CyanFit Preview"
                  className="w-full h-auto"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all" />
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="mt-8 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-lg border border-white/5 rounded-3xl p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Em Desenvolvimento</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Novos produtos em breve
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Estamos trabalhando em novas soluções inovadoras. Fique atento!
            </p>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ zIndex: 1000 }}
          onClick={() => setOpen(false)}
        >
          {/* Overlay escuro com opacidade para destacar o modal */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 6, 23, 0.85)' }} />
          <div className="relative z-10 w-full max-w-2xl p-4 mx-4" onClick={(e) => e.stopPropagation()}>
            <div
              className="border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8"
              style={{ backgroundColor: '#020617' }}
            >
              <ContactForm onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={alenyaLogo} alt="Alenya" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Desenvolvemos produtos SaaS inovadores que transformam negócios.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/cyanfit" className="text-sm text-gray-400 hover:text-white transition-colors">
                    CyanFit
                  </Link>
                </li>
                <li>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Em breve
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contato
                  </button>
                </li>
                <li>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Carreiras
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Redes Sociais</h3>
              <div className="flex gap-3 flex-wrap">
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Github className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Alenya. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
