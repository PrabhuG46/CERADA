import React from 'react';
import { Section } from '../layout/Section';

export const Proceedings = () => (
  <Section id="registration" className="bg-white">
    <div className="max-w-4xl mx-auto     text-center">
       <h2 className="text-3xl font-display font-bold mb-8 italic text-slate-900">Proceedings & Publications</h2>
       <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {[
            { src: '/scopus-logo.webp', alt: 'Scopus' },
            { src: '/clarivate.png', alt: 'Clarivate' },
            { src: '/SDG-logo.png', alt: 'SDG' },
            { src: '/ceradalogo.webp', alt: 'CERADA' },
            { src: '/icaebmslogo_transparent.png', alt: 'WOS' },
            
          ].map(logo => (
            <div key={logo.alt} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-center h-20 w-40 sm:h-24 sm:w-48 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
       </div>
       <p className="text-slate-600 leading-relaxed italic max-w-2xl mx-auto">
         Note: ICAEBMS - 2026 Proceedings will be submitted to the Web of Science Book Citation Index (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.
       </p>
    </div>
  </Section>
);
