import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              digi<span className="text-digisaga-blue">Saga</span>
            </h2>
            <p className="text-gray-400 mb-6">Vi hjelper bedrifter med å implementere AI-automasjon for økt effektivitet, samt profesjonelle nettsider og digitale løsninger.</p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/digisaga_norge/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-digisaga-blue text-white p-3 rounded-full transition-colors group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  AI-automasjon
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Nettside Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  SEO Optimalisering
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  E-commerce Løsninger
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Web Utvikling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Raskt til</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Tjenester
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <Link to="/personvern" className="text-gray-400 hover:text-digisaga-blue transition-colors">
                  Personvern
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nyhetsbrev</h3>
            <p className="text-gray-400 mb-4">
              Meld deg på vårt nyhetsbrev for å få tips om AI-automasjon og
              digital markedsføring.
            </p>
            <form className="flex">
              <input type="email" placeholder="Din e-post" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-digisaga-blue text-gray-900" />
              <button type="submit" className="bg-digisaga-blue hover:bg-digisaga-darkBlue px-4 py-2 rounded-r-md transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} DigiSaga. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
