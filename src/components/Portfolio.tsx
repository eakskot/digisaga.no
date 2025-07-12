import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, ExternalLink, Brain } from "lucide-react";
import { getPortfolioImageUrl } from "@/utils/imageUtils";

const portfolioCategories = [
  "Alle",
  "AI & Automation",
  "Nettsider",
  "Web App"
];

const portfolioItems = [
  {
    title: "AI Backend Automation",
    category: "AI & Automation",
    image: getPortfolioImageUrl("document_make.jpg"),
    description: "Intelligent backend-automatisering som kobler sammen ulike komponenter med AI. Brukt blant annet i AI-quizen for å effektivisere manuelle oppgaver med høy nøyaktighet.",
    isComplete: true,
    isClickable: true,
    scrollTarget: "ai-quiz",
    altText: "Make.com automatisering workflow - AI-drevet backend integrasjon for effektiv prosessering"
  },
  {
    title: "Smart Dokumentanalyse",
    category: "Web App",
    image: getPortfolioImageUrl("docsum.jpg"),
    description: "AI-drevet dokumentanalyse som automatisk ekstraherer nøkkelinformasjon.",
    isComplete: false,
    altText: "Skjermbilde av AI dokumentanalyse webapplikasjon - Smart automatisering for bedrifter"
  },
  {
    title: "Eiendomsmegler Portal",
    category: "Web App",
    image: getPortfolioImageUrl("emflow.jpg"),
    description: "Avansert webapplikasjon med kundehåndtering og datavisualisering.",
    isComplete: false,
    altText: "Eiendomsmegler portal webapplikasjon med kundehåndtering og datavisualisering"
  },
  {
    title: "skanditek.no",
    category: "Nettsider",
    image: "/skanditek.jpg",
    description: "Fullstack e-commerce løsning med produktkatalog og sikker betalingsprosessering.",
    isComplete: false,
    altText: "Skanditek e-commerce nettbutikk - Profesjonell netthandel løsning"
  },
  {
    title: "Schwabe Knives",
    category: "Nettsider",
    image: getPortfolioImageUrl("schwabe-knives.jpg"),
    description: "Responsiv nettside med moderne design og optimalisert brukeropplevelse.",
    isComplete: true,
    link: "https://www.norskekniver.no",
    altText: "Schwabe Knives responsiv nettside - Moderne design for norsk knivprodusent"
  },
  {
    title: "Istanbul Frisør",
    category: "Nettsider",
    image: getPortfolioImageUrl("barber.jpg"),
    description: "Moderne nettside med online bestillingssystem og responsiv design.",
    isComplete: false,
    altText: "Istanbul Frisør nettside med online bestillingssystem - Moderne frisørnettside"
  }
];

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
  console.log("Rendering portfolio card with image:", item.image);
  
  const handleCardClick = () => {
    if (item.scrollTarget) {
      const element = document.getElementById(item.scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.isComplete && item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <Card 
      className={`bg-white border-none shadow-lg overflow-hidden group card-hover relative ${
        (item.isComplete && item.link) || item.scrollTarget ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.altText}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="224"
          onError={(e) => {
            console.error("Image failed to load:", item.image);
            e.currentTarget.src = "/placeholder.svg";
          }}
          onLoad={() => {
            console.log("Image loaded successfully:", item.image);
          }}
        />
        
        {/* Status indicators */}
        {!item.isComplete && (
          <div className="absolute top-3 right-3 bg-digisaga-yellow/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium text-gray-800">
            <Settings className="w-3 h-3" />
            Under konstruksjon
          </div>
        )}
        
        {item.scrollTarget && (
          <div className="absolute top-3 right-3 bg-digisaga-blue/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Brain className="w-3 h-3" />
            Prøv AI-quiz
          </div>
        )}
        
        {item.isComplete && item.link && (
          <div className="absolute top-3 right-3 bg-digisaga-blue/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-3 h-3" />
            Besøk nettside
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm opacity-90 mt-2">{item.description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
      </div>
    </Card>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Alle");

  const filteredProjects = activeTab === "Alle" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* SEO-optimized heading structure */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-digisaga-blue uppercase mb-3">
            Våre prosjekter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Se hva vi kan <span className="highlight-box">bygge</span> for deg
          </h2>
          <p className="text-lg text-gray-600">
            Utforsk våre tekniske løsninger og funksjonaliteter. Fra moderne nettsider til avanserte AI-automatiseringer for norske bedrifter.
          </p>
        </header>

        <Tabs defaultValue="Alle" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto">
            <TabsList className="bg-digisaga-gray flex-shrink-0 min-w-fit">
              {portfolioCategories.map(category => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  onClick={() => setActiveTab(category)}
                  className="px-3 sm:px-6 py-2 text-sm sm:text-base whitespace-nowrap data-[state=active]:bg-digisaga-blue data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <PortfolioCard key={`${project.title}-${index}`} item={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block">
            <Button className="bg-digisaga-blue hover:bg-digisaga-darkBlue px-8 py-6 text-white text-lg">
              Kontakt oss for ditt prosjekt
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
