
import React from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";

const Hero = () => {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Reduced background elements for better performance */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-digisaga-lightBlue rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
      <div className="absolute top-1/4 -left-24 w-32 h-32 bg-blue-100 rounded-full opacity-15 blur-2xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            {/* SEO-optimized heading structure */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Vi hjelper norske bedrifter med å implementere <span className="gradient-text">AI-løsninger</span>
            </h1>
            <p className="text-lg md:text-xl text-digisaga-darkGray max-w-xl leading-relaxed">Automatiser rutineoppgaver og øk effektiviteten med skreddersydde AI-løsninger. Vi hjelper din bedrift vokse digitalt.</p>
            <div className="flex flex-wrap gap-4">
              <ContactDialog>
                <Button className="bg-digisaga-blue hover:bg-digisaga-darkBlue text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Få gratis konsultasjon
                </Button>
              </ContactDialog>
              <Button variant="outline" className="border-2 border-digisaga-blue text-digisaga-darkBlue hover:bg-digisaga-lightBlue px-8 py-6 text-lg font-semibold transition-all duration-200" onClick={() => handleSmoothScroll('portfolio')}>
                Se våre prosjekter
              </Button>
            </div>
            
            {/* Trust indicator with better semantic structure */}
            <div className="flex items-center space-x-3 text-sm text-digisaga-darkGray" role="contentinfo">
              <svg className="w-5 h-5 text-digisaga-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p> <strong> </strong> - fra små bedrifter til større selskaper</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-[float_3s_ease-in-out_infinite]">
              <div className="bg-gradient-to-br from-digisaga-blue to-digisaga-purple p-2">
                <div className="flex space-x-1.5 mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true"></div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="w-full h-64 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
                    {/* Mobile image - original that worked well on mobile */}
                    <img 
                      src="/hero_mobile.png" 
                      alt="Digisaga - Hjelper norske bedrifter vokse med AI-løsninger og digital utvikling" 
                      className="w-full h-full object-contain block md:hidden" 
                      loading="lazy" 
                      width="600" 
                      height="400" 
                    />
                    {/* Desktop image - new wider image for better desktop fit */}
                    <img 
                      src="/hero_desktop.png" 
                      alt="Digisaga - Hjelper norske bedrifter vokse med AI-løsninger og digital utvikling" 
                      className="w-full h-full object-contain hidden md:block" 
                      loading="lazy" 
                      width="800" 
                      height="400" 
                    />
                  </div>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reduced decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-digisaga-lightBlue rounded-full opacity-30" aria-hidden="true"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full opacity-30" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
