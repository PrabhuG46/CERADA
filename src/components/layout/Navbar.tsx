import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'Call for Papers', href: 'https://wa.me/918870885555' },
  { name: 'Deadlines', href: '#deadlines' },
  { name: 'Registration', href: '#contact' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img src="/icaebmslogo_transparent.png" alt="ICAEBMS Logo" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="py-2.5 px-6 text-sm">
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay (Side Drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-white shadow-2xl z-[70] flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <span className="font-bold font-display text-lg text-slate-800">Menu</span>
                <button 
                  className="p-2 text-slate-600 hover:text-brand-600 transition-colors bg-slate-100 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-2 py-6 px-6 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors py-3 border-b border-slate-100 last:border-0"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4">
                  <Button variant="primary" className="w-full py-4 text-base">
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
