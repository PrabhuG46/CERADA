import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export const DeadlineCard = ({ title, date, icon: Icon }: { title: string, date: string, icon: LucideIcon }) => (
  <motion.div 
    whileHover={{ x: 5, backgroundColor: "rgba(240, 253, 244, 0.5)" }}
    className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-0.5">{title}</p>
      <p className="font-bold text-slate-800 font-display">{date}</p>
    </div>
  </motion.div>
);
