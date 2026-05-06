import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../layout/Section';

const BENEFITS = [
  { title: "Present Your Research", desc: "Share your ideas, findings and innovations with a global audience." },
  { title: "Get Published", desc: "Opportunities in reputed Scopus indexed journals and high-impact conference proceedings." },
  { title: "Learn from Experts", desc: "Gain insights from keynote addresses and workshops by leading scholars." },
  { title: "Expand Your Network", desc: "Connect with industry leaders, policymakers and fellow researchers worldwide." },
  { title: "Interdisciplinary Exposure", desc: "Explore diverse perspectives by engaging with multiple fields of study." },
  { title: "Global Visibility", desc: "Enhance your academic profile and contribute to international collaborations." }
];

export const WhyJoin = () => (
  <Section id="why-join" className="bg-accent-blue text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
    
    <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic">Why Join Us at <span className="text-brand-500">ICAEBMS?</span></h2>
      <p className="text-slate-400 text-lg">More than just an academic event, it’s a global platform for innovation, collaboration and growth.</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
       {BENEFITS.map((benefit, i) => (
         <motion.div 
           key={i} 
           className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.05 }}
         >
           <h4 className="text-xl font-bold mb-3 text-brand-400">{benefit.title}</h4>
           <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
         </motion.div>
       ))}
    </div>
  </Section>
);
