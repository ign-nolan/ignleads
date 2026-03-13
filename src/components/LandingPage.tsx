import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="portfolio-logo text-xl leading-none flex flex-col">
          <span>Port</span>
          <div className="flex items-center gap-1">
            <span>Folio</span>
            <div className="w-8 h-3 border-2 border-ink rounded-sm"></div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
        <a href="#" className="hover:opacity-100 transition-opacity">Home</a>
        <a href="#" className="hover:opacity-100 transition-opacity">About</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Portfolio</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Projects</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>

      <div className="text-[10px] text-right hidden lg:block max-w-[120px] opacity-40 leading-tight">
        Passionate about creating visually stunning designs.
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-20 overflow-hidden">
      {/* Background Art Splash */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60vh] z-0 pointer-events-none opacity-80">
        <img 
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract Art" 
          className="w-full h-full object-contain object-bottom mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Center Logo/Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-24"
        >
          <div className="relative">
             <h2 className="portfolio-logo text-7xl md:text-9xl flex items-center gap-4">
              P<div className="w-24 md:w-48 h-12 md:h-20 border-4 border-ink rounded-2xl"></div>rtfolio
              <span className="text-4xl md:text-6xl align-top">*</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm tracking-[0.5em] font-light opacity-50">
              2024
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-4 w-full max-w-md">
            <div className="h-[1px] flex-1 bg-ink/20"></div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
              Crafting Digital Experiences
            </div>
            <div className="h-[1px] flex-1 bg-ink/20"></div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full"
        >
          <h1 className="hero-text text-5xl md:text-[8vw] font-bold flex flex-wrap items-center gap-x-8 gap-y-4">
            <span>TRUE VALUE</span>
            <div className="flex items-center gap-4">
               <span>IS IN</span>
               <div className="pill-outline text-sm md:text-base px-10 py-4">
                 Portfolio Design
               </div>
            </div>
            <span>UNIQUENESS</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export const ValueProps = () => {
  const props = [
    {
      id: '01',
      title: 'Strategic Design',
      desc: 'We don\'t just make things look pretty. We build visual identities that are strategically aligned with your business goals and audience needs.'
    },
    {
      id: '02',
      title: 'Digital Innovation',
      desc: 'Staying ahead of the curve with the latest web technologies and interactive patterns to ensure your digital presence is future-proof.'
    },
    {
      id: '03',
      title: 'User-Centricity',
      desc: 'Every pixel is placed with intent. We prioritize the human experience to create intuitive interfaces that convert and delight.'
    }
  ];

  return (
    <section className="py-32 px-8 bg-ink text-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {props.map((prop) => (
          <div key={prop.id} className="flex flex-col gap-6">
            <span className="text-4xl font-display font-light opacity-30">{prop.id}</span>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{prop.title}</h3>
            <p className="text-sm leading-relaxed opacity-60 font-light">
              {prop.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Creative Team" 
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className="text-sm uppercase tracking-widest font-bold text-accent">Proof of Excellence</div>
          <h2 className="text-5xl font-display font-bold leading-tight">Trusted by Industry Leaders</h2>
          <div className="flex flex-col gap-12 mt-8">
            <div className="flex flex-col gap-4">
              <p className="text-xl italic font-light leading-relaxed">
                "The attention to detail and unique perspective brought our brand to life in ways we never imagined. A true partner in our digital journey."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-ink/10"></div>
                <div>
                  <div className="font-bold text-sm">Sarah Jenkins</div>
                  <div className="text-xs opacity-50">CEO, CreativeFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-5xl font-display font-bold uppercase">Let's Create Together</h2>
          <p className="opacity-50">Have a project in mind? We'd love to hear from you.</p>
        </div>
        
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Email Address" className="input-field" />
          </div>
          <input type="text" placeholder="Subject" className="input-field" />
          <textarea placeholder="Tell us about your project" rows={4} className="input-field resize-none"></textarea>
          
          <button className="mt-8 bg-ink text-bg py-6 rounded-full uppercase tracking-[0.3em] font-bold text-xs hover:bg-accent transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
