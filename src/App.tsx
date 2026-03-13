import React from 'react';
import { Navbar, Hero, ValueProps, Testimonials, ContactForm } from './components/LandingPage';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ValueProps />
      <Testimonials />
      <ContactForm />
      
      <footer className="py-12 px-8 border-t border-ink/5 text-center">
        <div className="portfolio-logo text-lg opacity-20 mb-4">PortFolio</div>
        <div className="text-[10px] uppercase tracking-widest opacity-30">
          © 2024 Portfolio Design Studio. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
