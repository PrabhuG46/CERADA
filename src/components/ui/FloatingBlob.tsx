import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const FloatingBlob = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div 
    className={cn("absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20", className)}
    animate={{
      x: [0, 40, 0],
      y: [0, 60, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 10 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
);
