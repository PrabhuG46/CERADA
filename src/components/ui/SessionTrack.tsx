import React from 'react';
import { motion } from 'motion/react';

export const SessionTrack = ({ number, title, delay = 0 }: { number: number, title: string, delay?: number }) => (
  <motion.div 
    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-secondary-500 hover:shadow-lg transition-all cursor-pointer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ x: 10, backgroundColor: "#f8fafc" }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <span className="text-2xl font-bold font-display text-secondary-200/50">0{number}</span>
    <h4 className="font-bold text-slate-800">{title}</h4>
  </motion.div>
);
