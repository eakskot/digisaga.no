
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" onClick={handleLogoClick} className="flex items-center">
          <span className="text-2xl font-bold text-digisaga-darkBlue">
            digi<span className="text-black">Saga</span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="text-gray-700 hover:text-digisaga-blue font-medium transition-colors"
          >
            Tjenester
          </a>
          <a
            href="#ai-quiz"
            onClick={(e) => handleSmoothScroll(e, 'ai-quiz')}
            className="text-gray-700 hover:text-digisaga-blue font-medium transition-colors"
          >
            AI Quiz
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, 'portfolio')}
            className="text-gray-700 hover:text-digisaga-blue font-medium transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="text-gray-700 hover:text-digisaga-blue font-medium transition-colors"
          >
            Kontakt
          </a>
          <ContactDialog>
            <Button className="bg-digisaga-blue hover:bg-digisaga-darkBlue text-white font-medium">
              Få tilbud
            </Button>
          </ContactDialog>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with staggered animation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className={`text-gray-700 hover:text-digisaga-blue font-medium transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
            >
              Tjenester
            </a>
            <a
              href="#ai-quiz"
              onClick={(e) => handleSmoothScroll(e, 'ai-quiz')}
              className={`text-gray-700 hover:text-digisaga-blue font-medium transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
            >
              AI Quiz
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, 'portfolio')}
              className={`text-gray-700 hover:text-digisaga-blue font-medium transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className={`text-gray-700 hover:text-digisaga-blue font-medium transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
            >
              Kontakt
            </a>
            <ContactDialog>
              <Button
                className={`bg-digisaga-blue hover:bg-digisaga-darkBlue text-white font-medium w-full transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? "translate-y-0 opacity-100" 
                    : "-translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Få tilbud
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
