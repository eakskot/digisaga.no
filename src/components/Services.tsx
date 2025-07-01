import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Bot, Globe, Layout, Rocket, Search, Users, ChevronRight, Percent, Plus } from "lucide-react";

const coreServices = [
  {
    title: "AI Automasjon",
    description: "Revolusjonér din bedrift med intelligente AI-løsninger som automatiserer komplekse oppgaver og øker produktiviteten dramatisk.",
    icon: <Bot className="w-10 h-10 text-digisaga-blue" />,
    isClickable: true,
    originalPricing: "Fra 3.000 kr",
    pricing: "Fra 2.250 kr",
    monthlyOriginal: "1.300 kr/måned",
    monthlyPrice: "975 kr/måned",
    discount: "25% rabatt",
    examples: [{
      title: "Intelligente chatbots",
      description: "24/7 kundeservice som håndterer innsalg, support og booking automatisk — frigjør teamet ditt til viktigere oppgaver."
    }, {
      title: "Automatisk dokumenthåndtering",
      description: "AI som leser, sorterer og behandler regninger, kontrakter og rapporter — eliminer manuelle rutiner helt."
    }, {
      title: "Smart leads-generering",
      description: "Kvalifiser og følg opp potensielle kunder automatisk basert på deres oppførsel og interesser."
    }, {
      title: "Prosessautomatisering",
      description: "Automatiser repetitive arbeidsflyter mellom systemer — fra bestillinger til fakturering."
    }, {
      title: "Prediktiv analyse",
      description: "AI som forutsier trender, kundeoppførsel og optimale tidspunkt for markedsføring."
    }, {
      title: "Automatisk rapportering",
      description: "Generer innsiktsfulle rapporter og dashboards automatisk fra dine forretningsdata."
    }]
  }, {
    title: "Profesjonelle Nettsider",
    description: "Moderne, konverteringsoptimaliserte nettsider som reflekterer din ekspertise og driver forretningsvekst.",
    icon: <Layout className="w-10 h-10 text-digisaga-blue" />,
    isClickable: true,
    originalPricing: "Fra 8.500 kr",
    pricing: "Fra 6.375 kr",
    discount: "25% rabatt",
    examples: [{
      title: "Moderne responsive design",
      description: "Perfekt brukeropplevelse på alle enheter med fokus på konvertering og brukervennlighet."
    }, {
      title: "Søkemotoroptimalisering",
      description: "Bygget for å rangere høyt på Google fra dag én — teknisk SEO integrert i designet."
    }, {
      title: "Lynrask ytelse",
      description: "Optimalisert for hastighet og Core Web Vitals — bedre brukeropplevelse gir høyere konvertering."
    }, {
      title: "Innholdshåndtering",
      description: "Enkelt CMS som lar deg oppdatere innhold selv, eller vi kan håndtere det for deg."
    }, {
      title: "Integrasjoner",
      description: "Sømløs kobling til CRM, betalingssystemer, booking-plattformer og andre verktøy."
    }]
  }, {
    title: "E-commerce Plattformer",
    description: "Skalerbare nettbutikker som konverterer besøkende til kunder med avanserte salgsoptimaliseringer.",
    icon: <Rocket className="w-10 h-10 text-digisaga-blue" />,
    isClickable: true,
    originalPricing: "Fra 20.000 kr",
    pricing: "Fra 15.000 kr",
    discount: "25% rabatt",
    examples: [{
      title: "Konverteringsoptimalisert design",
      description: "Strategisk utformet for å maksimere salg med psykologisk baserte designprinsipper."
    }, {
      title: "Avansert produktkatalog",
      description: "Dynamisk produktvisning med filtrering, søk og anbefalingsmotorer som øker handlekurvverdien."
    }, {
      title: "Sikker betalingsprosess",
      description: "Flere betalingsmetoder med fokus på sikkerhet og brukervennlighet for økt konvertering."
    }, {
      title: "Intelligent lagerstyring",
      description: "Automatisk oppdatering av lagerstatus med varsler og prognoser for optimal drift."
    }, {
      title: "Kundelojalitetssystemer",
      description: "Belønningsprogrammer og personaliserte opplevelser som øker kundelivstidsverdi."
    }]
  }, {
    title: "SEO & Digital Synlighet",
    description: "Datadriven SEO-strategi som sikrer topp-plasseringer og økt organisk trafikk til din bedrift.",
    icon: <Search className="w-10 h-10 text-digisaga-blue" />,
    isClickable: true,
    originalPricing: "Fra 2.000 kr/måned",
    pricing: "Fra 1.500 kr/måned",
    discount: "25% rabatt",
    examples: [{
      title: "Strategisk søkeordsanalyse",
      description: "Identifiser høyverdige søkeord som dine konkurrenter ikke har oppdaget — få konkurransefortrinn."
    }, {
      title: "Teknisk SEO-ekspertise",
      description: "Optimaliser nettsidens tekniske struktur for maksimal søkemotorprestasjon."
    }, {
      title: "Innholdsstrategi som konverterer",
      description: "SEO-optimalisert innhold som ikke bare rangerer, men også engasjerer og konverterer besøkende."
    }, {
      title: "Lokal SEO-dominans",
      description: "Dominer lokale søkeresultater og Google My Business for økt fotfall og henvendelser."
    }, {
      title: "Konkurranseanalyse",
      description: "Kontinuerlig overvåking og analyse av konkurrenter for å holde deg foran i søkeresultatene."
    }]
  }
];

const ServiceCard = ({
  service,
  index
}: {
  service: typeof coreServices[0];
  index: number;
}) => {
  if (service.isClickable) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="border-none shadow-lg card-hover bg-white overflow-hidden cursor-pointer relative group h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="mr-4 bg-digisaga-lightBlue p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-digisaga-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              
              <div className="space-y-1 mt-auto">
                {service.originalPricing && (
                  <p className="text-sm text-gray-400 line-through">{service.originalPricing}</p>
                )}
                <p className="text-lg font-bold text-digisaga-orange">{service.pricing}</p>
              </div>
              
              <div className="mt-4 text-sm text-digisaga-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Klikk for detaljer →
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-digisaga-darkBlue flex items-center gap-3">
              {service.icon}
              {service.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-bold text-digisaga-darkBlue mb-2">
                  Oppsett/engangssum
                </h3>
                {service.originalPricing && (
                  <p className="text-lg text-gray-400 line-through mb-1">{service.originalPricing}</p>
                )}
                <p className="text-2xl font-bold text-digisaga-orange">{service.pricing}</p>
              </div>
              
              {service.monthlyPrice && (
                <div className="text-center border-t pt-4">
                  <h3 className="text-xl font-bold text-digisaga-darkBlue mb-2">
                    Månedlig drift
                  </h3>
                  {service.monthlyOriginal && (
                    <p className="text-lg text-gray-400 line-through mb-1">{service.monthlyOriginal}</p>
                  )}
                  <p className="text-2xl font-bold text-digisaga-orange">{service.monthlyPrice}</p>
                </div>
              )}
            </div>

            {service.discount && (
              <div className="bg-digisaga-blue/10 p-4 rounded-lg border-l-4 border-digisaga-blue">
                <p className="text-digisaga-darkBlue font-medium">
                  🎯 <strong>Tidsbegrenset tilbud!</strong> Som et relativt nytt byrå ønsker vi å samle verdifull erfaring og bygge vårt rykte. 
                  Derfor tilbyr vi nå 25% rabatt til våre første kunder.
                </p>
              </div>
            )}
            
            <div>
              <h4 className="text-xl font-semibold text-digisaga-darkBlue mb-4">Våre spesialområder:</h4>
              {service.examples.map((example, idx) => (
                <div key={idx} className="border-l-4 border-digisaga-blue pl-4 bg-gray-50 p-4 rounded-r-lg mb-4">
                  <h5 className="text-lg font-semibold text-digisaga-darkBlue mb-2">
                    {example.title}
                  </h5>
                  <p className="text-gray-700">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-digisaga-blue/10 rounded-lg text-center">
              <p className="text-digisaga-darkBlue font-medium">
                Interessert i {service.title.toLowerCase()}?{" "}
                <a href="#contact" className="underline font-bold hover:text-digisaga-blue transition-colors">
                  Kontakt oss
                </a>{" "}
                for en gratis konsultasjon og tilpasset tilbud
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  
  return (
    <Card className="border-none shadow-lg card-hover bg-white overflow-hidden h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className="mr-4 bg-digisaga-lightBlue p-3 rounded-lg">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <p className="text-lg font-bold text-digisaga-orange mt-auto">{service.pricing}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-digisaga-gray">
      <div className="container mx-auto px-4 md:px-6">
        {/* SEO-optimized heading structure */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-digisaga-orange to-digisaga-yellow text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-bold flex items-center justify-center gap-2">
              Tidsbegrenset: 25% rabatt på alle tjenester!
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Vi er nye og ønsker å bygge erfaring - derfor gir vi deg en fantastisk pris</p>
        </header>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-digisaga-blue uppercase mb-3">
            Våre kjernetjenester
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="highlight-box">AI og webutvikling</span> for små og mellomstore bedrifter
          </h2>
          <p className="text-lg text-gray-600">
            Vi spesialiserer oss på å hjelpe norske SMB-bedrifter med å implementere AI-løsninger 
            og moderne webutvikling som driver forretningsvekst. Vi fokuserer på praktiske løsninger 
            som gir reell verdi for din bedrift.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-digisaga-blue/10 px-6 py-3 rounded-full">
            <p className="text-digisaga-darkBlue font-medium">
              Ikke sikker på hva som passer best for din bedrift? <a href="#contact" className="underline font-bold">Kontakt oss</a> for en gratis konsultasjon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
