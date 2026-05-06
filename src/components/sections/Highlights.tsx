import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, FileText, Mic2, Sparkles, Handshake, Award, GraduationCap } from 'lucide-react';
import { Section } from '../layout/Section';
import { FeatureCard } from '../ui/FeatureCard';

const HIGHLIGHT_ITEMS = [
  { 
    icon: Users, 
    title: "Multidisciplinary Platform", 
    description: "A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities." 
  },
  { 
    icon: Globe, 
    title: "Global Participation", 
    description: "Engage with renowned scholars, industry leaders and professionals from across the world." 
  },
  { 
    icon: FileText, 
    title: "Call for Papers & Publications", 
    description: "Selected papers will be considered for publication in Scopus indexed and high-impact journals globally." 
  },
  { 
    icon: Mic2, 
    title: "Expert Keynote Sessions", 
    description: "Insights from distinguished speakers on cutting-edge research and global challenges." 
  },
  { 
    icon: Sparkles, 
    title: "Interactive Workshops", 
    description: "Hands-on learning and thought-provoking panel discussions on contemporary real-world issues." 
  },
  { 
    icon: Handshake, 
    title: "Networking Opportunities", 
    description: "Build academic, industrial and international collaborations with experts in your field." 
  },
  { 
    icon: Award, 
    title: "Recognition & Awards", 
    description: "Best paper and presentation awards to acknowledge outstanding academic contributions." 
  },
  { 
    icon: GraduationCap, 
    title: "Young Researcher Engagement", 
    description: "Special sessions to inspire and guide the next generation of scholars and innovators." 
  }
];

export const Highlights = () => (
  <Section id="highlights" className="bg-slate-950 px-0 py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 px-6">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-brand-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
      >
        Excellence & Innovation
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white italic">
        Key <span className="text-brand-500">Highlights</span> of ICAEBMS
      </h2>
      <div className="h-1.5 w-24 bg-gradient-to-r from-brand-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
      <p className="text-slate-400 text-lg leading-relaxed">
        Experience a world-class academic environment designed to foster interdisciplinary growth and global recognition.
      </p>
    </div>
    
    <div className="relative z-10 overflow-hidden">
      <motion.div 
        className="flex gap-8 px-6 pt-12 pb-12 w-max"
        animate={{ x: [0, -1600] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        whileHover={{ transition: { duration: 100 } }}
      >
        {[...Array(2)].map((_, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {HIGHLIGHT_ITEMS.map((item, idx) => (
              <div key={`${groupIdx}-${idx}`} className="w-[320px] md:w-[400px]">
                <FeatureCard 
                  icon={item.icon} 
                  title={item.title} 
                  description={item.description} 
                  delay={0} 
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      

    </div>
  </Section>
);
