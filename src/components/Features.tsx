import React from 'react';
import { Brain, Calendar, ShoppingBag, Users, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Treinos com IA',
    description: 'Crie treinos personalizados em segundos com inteligência artificial ou manualmente com nosso editor intuitivo.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Gestão de Alunos',
    description: 'Controle completo sobre seus alunos: fichas, histórico, evolução, medidas e muito mais em um só lugar.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'Agenda Automática',
    description: 'Seus alunos agendam aulas diretamente pelo app. Receba notificações e evite conflitos de horário.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: ShoppingBag,
    title: 'Loja Integrada',
    description: 'Venda suplementos, produtos e acessórios diretamente para seus alunos através do aplicativo.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Relatórios e Análises',
    description: 'Acompanhe a evolução dos alunos, receitas, agendamentos e performance do seu negócio.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Zap,
    title: 'App para Alunos',
    description: 'Seus alunos têm acesso aos treinos, podem agendar aulas e comprar produtos pelo próprio celular.',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            Funcionalidades
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tudo que você precisa para{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              crescer
            </span>
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-lg text-gray-600">
            Ferramentas profissionais que economizam seu tempo e aumentam seus resultados
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-12">
            <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pronto para revolucionar sua gestão?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de personal trainers que já transformaram seu negócio
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-xl transition-all text-sm sm:text-base">
              Começar Teste Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}