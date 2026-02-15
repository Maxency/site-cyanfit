import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export function CyanFitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
