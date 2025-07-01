
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-3">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-digisaga-darkBlue">
              digi<span className="text-black">Saga</span>
            </span>
          </button>
        </div>
      </nav>
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Personvernerklæring for Digisaga
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Vi i Digisaga tar personvern på alvor. Når du besøker nettsiden vår eller bruker våre tjenester, 
              samler vi inn nødvendige opplysninger for å kunne levere og forbedre våre tjenester.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hva vi samler inn:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Navn og e-post ved kontaktskjema</li>
                <li>Bruksdata via Google Analytics eller lignende verktøy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hvordan vi bruker informasjonen:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>For å besvare henvendelser</li>
                <li>For å forbedre brukeropplevelsen</li>
                <li>For markedsføring (f.eks. nyhetsbrev, Google Ads)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt oss</h2>
              <p>
                Hvis du har spørsmål om vår personvernerklæring, kan du kontakte oss via vårt kontaktskjema 
                eller e-post.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
