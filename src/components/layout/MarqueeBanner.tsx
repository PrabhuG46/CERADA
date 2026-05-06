import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export const MarqueeBanner = () => (
  <div className="bg-brand-900 text-white py-3 sticky top-0 z-50 overflow-hidden border-b border-white/10">
    <div className="marquee-container flex">
      <motion.div 
        className="flex gap-12 text-sm font-medium whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            HYBRID EVENT - Participate in person at Bangkok, Thailand or Virtually from your home or office.
          </span>
        ))}
      </motion.div>
    </div>
  </div>
);
