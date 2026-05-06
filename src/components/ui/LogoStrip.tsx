import React from 'react';
import { motion } from 'motion/react';

const LOGOS = [
  { src: '/scopus-logo.webp', alt: 'Scopus' },
  { src: '/icaebmslogo.png', alt: 'ICAEBMS' },
  { src: '/clarivate.png', alt: 'Clarivate' },
  { src: '/ceradalogo.webp', alt: 'CERADA' },
  { src: '/SDG-logo.png', alt: 'SDG' },
];

// Duplicate logos to create a seamless infinite marquee
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export const LogoStrip = () => (
  <div className="py-12 border-y border-slate-100 bg-slate-50/50 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
        Indexed & Partnered With
      </p>
      
      {/* Marquee Container with fade effect */}
      <div 
        className="relative flex overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        <motion.div 
          className="flex items-center gap-16 md:gap-32 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {MARQUEE_LOGOS.map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-32 shrink-0">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-26 w-auto max-w-full object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);
