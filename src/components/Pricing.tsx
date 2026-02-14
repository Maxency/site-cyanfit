import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 60',
    period: '/mês',
    description: 'Perfeito para começar sua jornada',
    features: [
      'Até 20 alunos ativos',
      'Criação de treinos manual',
      'Agenda automática',
      'Loja integrada',
      'App para alunos',
      'Suporte por email',
      'Relatórios básicos',
    ],
    popular: false,
    cta: 'Começar Grátis',
  },
  {
    name: 'Professional',
    price: 'R$ 197',
    period: '/mês',
    description: 'Para personal trainers em crescimento',
    features: [
      'Até 100 alunos ativos',
      'Treinos com IA ilimitados',
      'Criação de treinos manual',
      'Agenda automática avançada',
      'Loja integrada (0% de comissão)',
      'App para alunos personalizado',
      'Suporte prioritário',
      'Relatórios avançados',
      'Controle financeiro',
      'Múltiplos locais de atendimento',
    ],
    popular: true,
    cta: 'Começar Grátis',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            Preços
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Planos que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              cabem no seu bolso
            </span>
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-lg text-gray-600">
            14 dias grátis em todos os planos. Cancele quando quiser, sem burocracia.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl lg:scale-105'
                  : 'bg-white border-2 border-gray-200 hover:border-blue-600 transition-all'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl sm:text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-base sm:text-lg ${
                      plan.popular ? 'text-blue-100' : 'text-gray-600'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold mb-6 sm:mb-8 transition-all text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`rounded-full p-1 ${
                        plan.popular ? 'bg-blue-500' : 'bg-blue-100'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          plan.popular ? 'text-white' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${
                        plan.popular ? 'text-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-10 sm:mt-16 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-gray-600">
            Dúvidas sobre qual plano escolher?{' '}
            <button className="text-blue-600 font-semibold hover:underline">
              Fale com nosso time
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}