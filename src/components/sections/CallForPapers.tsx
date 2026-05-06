import React from 'react';
import { motion } from 'motion/react';
import { Calendar, FileText, Lightbulb, GraduationCap } from 'lucide-react';
import { Section } from '../layout/Section';
import { SessionTrack } from '../ui/SessionTrack';
import { DeadlineCard } from '../ui/DeadlineCard';

export const CallForPapers = () => (
  <Section id="call-for-papers" className="bg-white">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Session Tracks</h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          We invite researchers, academicians and professionals to submit their papers across these core interdisciplinary sessions:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <SessionTrack number={1} title="Applied Science" />
          <SessionTrack number={2} title="Engineering & Tech" delay={0.1} />
          <SessionTrack number={3} title="Education & Pedagogy" delay={0.2} />
          <SessionTrack number={4} title="Business & Management" delay={0.3} />
          <SessionTrack number={5} title="Social Sci & Humanities" delay={0.4} />
          <SessionTrack number={6} title="Finance & Marketing" delay={0.5} />
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-secondary-600 to-brand-500 rounded-2xl text-white flex items-center justify-between flex-wrap gap-6 shadow-xl shadow-brand-500/20">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Ready to Submit?</h4>
                <p className="text-white/80 text-sm font-medium">Download our formatting guidelines first.</p>
              </div>
           </div>
           <button className="bg-white text-brand-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg">
             Submission Portal
           </button>
        </div>
      </div>
      
      <div id="deadlines" className="lg:col-span-5 bg-slate-50 p-10 rounded-[40px] border border-slate-200">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="w-6 h-6 text-brand-600" />
          <h3 className="text-2xl font-display font-bold">Important Dates</h3>
        </div>
        
        <div className="space-y-6">
          <DeadlineCard title="Early Bird Deadline" date="31 Dec 2025" icon={Lightbulb} />
          <DeadlineCard title="Abstract Submission" date="31 Jan 2026" icon={FileText} />
          <DeadlineCard title="Full Paper Submission" date="28 Feb 2026" icon={GraduationCap} />
          <DeadlineCard title="Final Registration" date="31 Mar 2026" icon={Calendar} />
        </div>
        
        <div className="mt-10 text-center">
           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Location: Bangkok, Thailand</p>
           <a 
             href="https://www.google.com/maps/place/Bangkok,+Thailand/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="block h-40 rounded-3xl bg-slate-200 overflow-hidden relative group"
           >
              <img 
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2012&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Bangkok Venue Map" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-brand-900/60 flex items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white font-bold bg-brand-600 px-6 py-2.5 rounded-full shadow-xl"
                >
                  View Venue
                </motion.span>
              </div>
           </a>
        </div>
      </div>
    </div>
  </Section>
);
