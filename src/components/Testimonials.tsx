import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Personal Trainer',
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80',
    content: 'O Cyan Fit transformou minha forma de trabalhar. Antes eu perdia horas organizando fichas e treinos. Agora tudo é automático e profissional.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Personal Trainer',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    content: 'A funcionalidade de criar treinos com IA é incrível! Economizo muito tempo e meus alunos adoram o app. Já aumentei minha receita em 40%.',
    rating: 5,
  },
  {
    name: 'Rafael Mendes',
    role: 'Dono de Estúdio',
    location: 'Belo Horizonte, MG',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    content: 'Gerencio 3 professores e mais de 150 alunos. O Cyan Fit facilitou tudo: agenda, pagamentos, relatórios. Recomendo muito!',
    rating: 5,
  },
  {
    name: 'Ana Paula Rodrigues',
    role: 'Personal Trainer',
    location: 'Curitiba, PR',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    content: 'A loja integrada me permitiu vender suplementos para meus alunos sem complicação. É uma renda extra que faz muita diferença!',
    rating: 5,
  },
  {
    name: 'Felipe Santos',
    role: 'Personal Trainer',
    location: 'Brasília, DF',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    content: 'O suporte é excepcional e o app é muito intuitivo. Meus alunos conseguem usar sem dificuldade e eu tenho controle total do meu negócio.',
    rating: 5,
  },
  {
    name: 'Juliana Ferreira',
    role: 'Personal Trainer',
    location: 'Porto Alegre, RS',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    content: 'Melhor investimento que fiz na minha carreira. Profissionalizou completamente meu trabalho e meus alunos ficaram impressionados.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            Depoimentos
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Amado por{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              milhares
            </span>{' '}
            de profissionais
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-lg text-gray-600">
            Veja o que personal trainers estão dizendo sobre o CyanFit
          </p>
        </div>

        {/* Testimonials Grid - Show only 3 on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <div className="mb-3 sm:mb-4">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              10.000+
            </div>
            <div className="text-xs sm:text-base text-gray-600">Personal Trainers</div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              50.000+
            </div>
            <div className="text-xs sm:text-base text-gray-600">Alunos Ativos</div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              4.9/5
            </div>
            <div className="text-xs sm:text-base text-gray-600">Avaliação Média</div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              98%
            </div>
            <div className="text-xs sm:text-base text-gray-600">Taxa de Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
}