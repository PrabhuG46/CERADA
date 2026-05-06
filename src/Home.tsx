import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MarqueeBanner } from './components/layout/MarqueeBanner';
import { FloatingBlob } from './components/ui/FloatingBlob';
import { LogoStrip } from './components/ui/LogoStrip';
import { Preloader } from './components/ui/Preloader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { CallForPapers } from './components/sections/CallForPapers';
import { WhyJoin } from './components/sections/WhyJoin';
import { Proceedings } from './components/sections/Proceedings';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-500 selection:text-white relative overflow-clip">
      <Preloader />
      {/* Background Motion Elements */}
      <FloatingBlob className="top-1/4 -left-20 w-96 h-96 bg-brand-500" />
      <FloatingBlob className="top-3/4 -right-20 w-[500px] h-[500px] bg-secondary-500" delay={2} />
      <FloatingBlob className="top-1/2 left-1/2 w-64 h-64 bg-secondary-500" delay={4} />

     <div className="bg-green-600 text-white p-2 text-center text-xs font-medium border-b border-green-700 relative z-10">
  Registration is now open for Early Bird attendees. Special discounts apply !
</div>
      
      <MarqueeBanner />
      <Navbar />
      
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Highlights />
        <CallForPapers />
        <WhyJoin />
        <Proceedings />
      </main>

      <Footer />
    </div>
  );
}
