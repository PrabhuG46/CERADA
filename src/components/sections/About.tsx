import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Section } from '../layout/Section';

export const About = () => (
  <Section id="about" className="bg-white">
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-brand-900">
          Welcome to ICAEBMS-2026
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            We warmly welcome you to the International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS).
          </p>
          <p>
            Theme <span className="font-bold text-brand-600">“Interdisciplinary Innovations for a Sustainable Future”</span> ICAEBMS serves as a global platform where researchers, academicians, professionals and students from around the world come together to exchange ideas, present findings and build collaborations across disciplines.
          </p>
          <p>
            This conference is not just an academic gathering, it is a space for innovation, interchange and the creation of solutions that address real-world challenges.
          </p>
        </div>
        
        <div className="mt-10 p-8 rounded-3xl bg-brand-50 border border-brand-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -translate-y-16 translate-x-16"></div>
           <h3 className="text-xl font-bold font-display text-brand-900 mb-4 flex items-center gap-2">
             <Lightbulb className="w-5 h-5 text-brand-600" />
             Conference Vision
           </h3>
           <p className="text-slate-700 leading-relaxed">
             By bringing together experts in science, engineering, education, business, management, social sciences and humanities, ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
           </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
         <div className="p-8 rounded-3xl bg-accent-blue text-white shadow-2xl">
            <h3 className="text-2xl font-display font-bold mb-6">Conference Theme</h3>
            <p className="text-slate-400 font-medium mb-8 leading-relaxed">
              “Interdisciplinary Innovations for a Sustainable Future”
            </p>
            <ul className="space-y-4">
              {[
                "Encourage interdisciplinary collaboration among researchers & industry experts.",
                "Promote innovative research that contributes to sustainable development.",
                "Bridge the gap between science, technology, business and society.",
                "Empower future leaders and young scholars for global engagement.",
                "Foster practical, inclusive and impactful solutions for real challenges."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-sm">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/40 shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  </div>
                  <span className="text-slate-300">{text}</span>
                </li>
              ))}
            </ul>
         </div>
         
         <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
               <p className="text-3xl font-display font-bold text-brand-600 mb-1">50+</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Countries</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center">
               <p className="text-3xl font-display font-bold text-brand-600 mb-1">200+</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Submissions</p>
            </div>
         </div>
      </div>
    </div>
  </Section>
);
