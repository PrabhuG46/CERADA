import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700",
    secondary: "bg-white text-brand-900 border border-slate-200 hover:bg-slate-50",
    outline: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md"
  };
  
  return (
    <motion.button 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn("px-8 py-4 rounded-xl font-bold transition-all", variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
