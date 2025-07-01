
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Elisabeth Nordahl",
    company: "Nordahl Regnskap AS",
    position: "Daglig leder",
    text: "DigiSaga implementerte AI-løsninger som automatiserte vår bilagshåndtering. Vi sparer nå 15 timer i uken på manuelle oppgaver, og nøyaktigheten har økt dramatisk. ROI ble oppnådd på kun 4 måneder.",
    avatar: "/placeholder.svg",
    logo: "/placeholder.svg",
    metrics: "87% reduksjon i behandlingstid"
  },
  {
    name: "Thomas Eriksen",
    company: "Eriksen Tech Solutions",
    position: "CTO",
    text: "Vår nye nettside fra DigiSaga har økt konverteringsraten med 340%. De forstår teknologibransjen og leverte en løsning som virkelig skiller oss ut fra konkurrentene. Ekstremt profesjonell tilnærming.",
    avatar: "/placeholder.svg",
    logo: "/placeholder.svg",
    metrics: "340% økning i konvertering"
  },
  {
    name: "Ingrid Haugen",
    company: "Haugen Design Studio",
    position: "Kreativ direktør",
    text: "Den nye nettbutikken har revolusjonert hvordan vi selger. Salget økte med 180% første måned etter lansering. DigiSaga kombinerte design og funksjonalitet på en måte som overgikk alle forventninger.",
    avatar: "/placeholder.svg",
    logo: "/placeholder.svg",
    metrics: "180% økning i salg"
  },
  {
    name: "Kjetil Andersen",
    company: "Andersen Eiendom",
    position: "Partner",
    text: "AI-webapplikasjonen for kundeoppfølging har endret måten vi jobber på. Automatiserte rapporter og prediktive analyser har gjort oss 60% mer effektive. Kunde-responsene har vært fantastiske.",
    avatar: "/placeholder.svg",
    logo: "/placeholder.svg",
    metrics: "60% økning i effektivitet"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-digisaga-gray to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-digisaga-blue uppercase mb-3">
            Kundeomtaler
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hva våre <span className="highlight-box">kunder</span> sier
          </h2>
          <p className="text-lg text-digisaga-darkGray">
            Over 50 fornøyde bedriftskunder har allerede transformert sin virksomhet med våre AI-løsninger og nettsider.
          </p>
        </div>

        <div className="relative">
          {/* Desktop view - show multiple testimonials */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-digisaga-darkGray font-medium">{testimonial.position}</p>
                        <p className="text-digisaga-blue text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`}
                      className="w-12 h-12 object-contain opacity-60"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="mb-4 p-3 bg-digisaga-lightBlue rounded-lg">
                    <p className="text-digisaga-darkBlue font-semibold text-sm">
                      📈 {testimonial.metrics}
                    </p>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="mt-6 flex" aria-label="5 stjerner vurdering">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.934l-6.18 3.254 1.18-6.875-5-4.867 6.91-1.002L10 0 13.09 6.444l6.91 1.002-5 4.867 1.18 6.875z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden">
            <Card className="border-none shadow-lg bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-digisaga-darkGray font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-digisaga-blue text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  <img 
                    src={testimonials[currentIndex].logo} 
                    alt={`${testimonials[currentIndex].company} logo`}
                    className="w-12 h-12 object-contain opacity-60"
                    loading="lazy"
                  />
                </div>
                
                <div className="mb-4 p-3 bg-digisaga-lightBlue rounded-lg">
                  <p className="text-digisaga-darkBlue font-semibold text-sm">
                    📈 {testimonials[currentIndex].metrics}
                  </p>
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="mt-6 flex" aria-label="5 stjerner vurdering">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.254 1.18-6.875-5-4.867 6.91-1.002L10 0 13.09 6.444l6.91 1.002-5 4.867 1.18 6.875z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-digisaga-gray hover:bg-digisaga-lightBlue p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-digisaga-blue"
                aria-label="Forrige kundeomtale"
              >
                <svg
                  className="w-6 h-6 text-digisaga-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-digisaga-gray hover:bg-digisaga-lightBlue p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-digisaga-blue"
                aria-label="Neste kundeomtale"
              >
                <svg
                  className="w-6 h-6 text-digisaga-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-digisaga-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Gå til kundeomtale ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
