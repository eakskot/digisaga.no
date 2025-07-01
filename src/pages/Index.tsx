
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import AIQuiz from "@/components/AIQuiz";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <AboutUs />
        <AIQuiz />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
