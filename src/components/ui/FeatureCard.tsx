import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: LucideIcon, title: string, description: string, delay?: number }) => (
  <motion.div 
    className="h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-brand-500/50 transition-all group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-secondary-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold font-display mb-3 text-white group-hover:text-brand-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{description}</p>
    </div>
  </motion.div>
);
