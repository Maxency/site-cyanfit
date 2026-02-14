import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                CyanFit
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              A plataforma completa para personal trainers que querem profissionalizar 
              e escalar seu negócio fitness.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Produto</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Funcionalidades
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Preços
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Demonstração
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Integrações
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Atualizações
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Recursos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Tutoriais
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Central de Ajuda
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Comunidade
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Status
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Carreiras
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Contato
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Parceiros
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-xs sm:text-sm">
                  Afiliados
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-12 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                Pronto para começar?
              </h3>
              <p className="text-sm sm:text-base text-blue-100">
                Experimente grátis por 14 dias. Sem cartão de crédito.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all whitespace-nowrap text-sm sm:text-base">
                Começar Grátis
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all whitespace-nowrap flex items-center justify-center gap-2 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contato
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} CyanFit. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button className="text-gray-500 hover:text-white transition-colors">
                Privacidade
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Política de Dados
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}