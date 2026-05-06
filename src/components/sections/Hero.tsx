import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => (
  <header className="relative bg-accent-blue py-12 lg:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508933221974-98ae8a7e0ccd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-500/20 to-transparent pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] mb-6 shadow-[0_10px_30px_rgba(22,163,74,0.4)] border border-brand-500/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100 
          }}
        >
          <motion.span className="relative flex h-3 w-3">
            <motion.span 
              className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
              animate={{ scale: [1, 3], opacity: [0.75, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_10px_white]" />
          </motion.span>
          <span className="drop-shadow-sm">
            Hybrid Conference: In Person + Online
          </span>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-[1.1]">
          International Conference on <span className="text-brand-500">Applied Science, Engineering,</span> Education, Business, Management and <span className="text-secondary-500 font-light italic">Social Science & Humanities</span>
        </h1>
        <p className="text-lg text-slate-300 font-display mb-6 italic">
          "Interdisciplinary Innovations for a Sustainable Future"
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Calendar className="w-5 h-5 text-secondary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 font-bold uppercase">Date</p>
              <p className="font-semibold">10-11 Aug, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <MapPin className="w-5 h-5 text-secondary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
              <p className="font-semibold">Bangkok, Thailand</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Button variant="primary" className="w-full sm:w-auto bg-brand-500 shadow-brand-500/40">
            Submit Abstract
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-secondary-500/50 hover:bg-secondary-500/10">
            Download Brochure
          </Button>
        </div>
        
        <p className="mt-8 text-slate-400 text-sm font-mono tracking-tighter">
          ISBN: 978-95-813001-3-6
        </p>
      </motion.div>
      
      <motion.div 
        className="relative w-full max-w-xl mx-auto lg:ml-auto mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6">
          {/* Video Container */}
          <div className="rounded-3xl bg-slate-800 overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative aspect-video w-full">
            <video 
              src="https://icaebms.com/videos/icaebms-hero-video.webm" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Informational Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl bg-secondary-500/20 backdrop-blur-xl border border-secondary-500/30 flex items-center justify-center p-6 text-center">
              <p className="text-white font-display font-medium text-lg leading-snug">
                Join 500+ Researchers Globally
              </p>
            </div>
            <div className="rounded-3xl bg-accent-blue/50 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-6 text-center">
              <Building2 className="w-8 h-8 text-secondary-500 mb-2" />
              <p className="text-white text-[10px] font-bold uppercase tracking-wider">Organized By</p>
              <p className="text-white text-base font-medium">CERADA</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);
