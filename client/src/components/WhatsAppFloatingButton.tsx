/*
 * DESIGN: Dark Tech Premium — WhatsApp Floating Button
 * Layout: Botão flutuante no canto inferior direito
 * Animações: pulse glow, hover scale, tooltip
 * Glassmorphism: efeito glass premium com blur
 */

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os produtos da Alenya.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-premium p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group relative animate-pulse-glow"
          style={{
            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
          }}
          title="Abrir WhatsApp"
        >
          {/* Animated background glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
            }}
          />

          {/* Icon */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-green-400" />
            )}
          </div>
        </button>

        {/* Secondary Action Button */}
        {isOpen && (
          <button
            onClick={handleWhatsAppClick}
            className="glass-btn px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(34, 197, 94, 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px rgba(34, 197, 94, 0.4)";
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </button>
        )}
      </div>

      {/* Mobile-optimized version */}
      <style>{`
        @media (max-width: 640px) {
          .whatsapp-float {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
