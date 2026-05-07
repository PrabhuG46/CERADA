import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, Facebook, Youtube, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-white pt-20 pb-6 px-6 lg:pl-48 lg:pr-8">
    <div className="max-w-[90rem] mx-auto grid md:grid-cols-6 gap-8 lg:gap-12 mb-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6 bg-white p-2 rounded-full inline-block shadow-lg">
          <img src="/ceradalogo.webp" alt="CERADA Logo" className="h-24 w-24 object-contain rounded-full" />
        </div>
        <div className="text-slate-400 text-sm leading-relaxed space-y-4 pr-8">
          <p className="font-bold text-white">
            International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities - (ICAEBMS)
          </p>
          <p>
            Theme: "Interdisciplinary Innovations for a Sustainable Future"
            Organized by: Confworld Educational Research and Development Association
          </p>
         
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 text-brand-400 uppercase tracking-widest text-xs">Quick Links</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          {['Home', 'About', 'Committee', 'Important Dates', 'Registration'].map((link) => (
            <li key={link}>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4 text-brand-500" />
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 text-brand-400 uppercase tracking-widest text-xs">Social Links</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Facebook className="w-4 h-4" /> Facebook</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Youtube className="w-4 h-4" /> Youtube</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Instagram className="w-4 h-4" /> Instagram</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Twitter className="w-4 h-4" /> Twitter</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /> Linkedin</a></li>
          <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><MessageCircle className="w-4 h-4" /> Whatsapp</a></li>
        </ul>
      </div>
      
      <div className="col-span-2 lg:col-span-2">
        <h4 className="font-bold mb-6 text-brand-400 uppercase tracking-widest text-xs">Contact Info</h4>
        <div className="space-y-4 text-slate-400 text-sm">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-brand-500 mt-0.5" />
            <span>+91 88 70 88 55 55</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-brand-500 mt-0.5" />
            <span>info@icaebms.com</span>
          </div>
          <div className="flex items-start gap-3 mt-6">
            <MapPin className="w-6 h-6 text-brand-500 shrink-0 mt-1" />
            <div>
              <p className="font-bold text-white mb-1">Address</p>
              <p>No.147/383A, Second Floor, <br></br>Paper Mills Road, Peravallur, <br></br>Chennai-600082, Tamil Nadu, India.</p>
            </div>
            
          </div>
        </div>
        <div className="flex justify-start gap-4 mt-10">
          <Button variant="primary" className="py-2 px-6 text-xs" onClick={() => window.open('https://wa.me/918870885555', '_blank')}>Submit Paper</Button>
          <Button variant="primary" className="py-2 px-6 text-xs">Register Now</Button>
        </div>
      </div>
    </div>
    
   
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
      <p>© 2026 CERADA. All Rights Reserved.</p>
      <br></br>
      <p>
  Designed By{" "}
  <a
    href="https://www.akprabhu46.co.in"
    className="text-white hover:text-red-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    Prabhu G
  </a>
</p>
    </div>
  </footer>
);
