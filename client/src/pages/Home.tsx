/*
 * DESIGN: Dark Tech Premium — Página Principal
 * Integra: Navbar, HeroSection, ProductsSection, Footer
 * Tema: dark roxo profundo com gradientes vibrantes
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0d0118" }}
    >
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
