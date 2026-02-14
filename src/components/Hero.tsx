import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                🚀 Gestão Inteligente para Personal Trainers
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme sua{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                carreira fitness
              </span>{' '}
              com tecnologia
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              Controle alunos, crie treinos com IA, automatize sua agenda e venda produtos - 
              tudo em um único aplicativo profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-sm sm:text-base">
                Começar Grátis por 14 Dias
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Ver Demonstração
              </button>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 pt-2 sm:pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Personal Trainers</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-gray-300" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Alunos Ativos</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-gray-300" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="CyanFit App Interface"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Treino Criado</div>
                    <div className="text-sm text-gray-600">Com IA em 30seg</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    12
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Agendamentos</div>
                    <div className="text-sm text-gray-600">Hoje</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}