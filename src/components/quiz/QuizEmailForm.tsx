
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Mail } from "lucide-react";

interface QuizEmailFormProps {
  email: string;
  setEmail: (email: string) => void;
  companyName: string;
  setCompanyName: (name: string) => void;
  industry: string;
  setIndustry: (industry: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const QuizEmailForm = ({ 
  email, 
  setEmail, 
  companyName, 
  setCompanyName,
  industry,
  setIndustry,
  onSubmit, 
  isSubmitting, 
  isSubmitted 
}: QuizEmailFormProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-digisaga-lightBlue/30 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto p-6 md:p-12 shadow-xl border-none text-center">
          {!isSubmitted ? (
            <>
              <div className="w-16 h-16 bg-digisaga-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Få din <span className="gradient-text">gratis rapport</span>
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Vi sender deg en detaljert, AI-generert anbefaling tilpasset din bedrift og bransje med konkrete forslag og neste steg.
              </p>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="text-left">
                  <Label htmlFor="companyName" className="text-sm md:text-base font-medium">
                    Bedriftsnavn
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Navn på bedriften din"
                    required
                    className="mt-2 h-12 text-base w-full"
                  />
                </div>

                <div className="text-left">
                  <Label htmlFor="industry" className="text-sm md:text-base font-medium">
                    Bransje
                  </Label>
                  <Input
                    id="industry"
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="F.eks. handel, teknologi, helse, etc."
                    required
                    className="mt-2 h-12 text-base w-full"
                  />
                </div>
                
                <div className="text-left">
                  <Label htmlFor="email" className="text-sm md:text-base font-medium">
                    E-postadresse
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din@epost.no"
                    required
                    className="mt-2 h-12 text-base w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-digisaga-blue hover:bg-digisaga-darkBlue text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium w-full"
                  size="lg"
                >
                  <span className="truncate">
                    {isSubmitting ? "Sender..." : "Send meg rapporten gratis"}
                  </span>
                </Button>
              </form>

              <p className="text-xs md:text-sm text-gray-500 mt-6 leading-relaxed">
                Vi respekterer ditt personvern. Ingen spam, kun verdifull innsikt.
              </p>
            </>
          ) : (
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-600 leading-tight">
                Takk for din interesse!
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Vi genererer nå din personlige AI-rapport for <strong>{companyName}</strong> og sender den til <strong className="break-all">{email}</strong>
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Sjekk innboksen din (og spam-mappen) i løpet av de neste minuttene. 
                Vi kommer også til å ta kontakt for en gratis konsultasjon hvis du ønsker det.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default QuizEmailForm;
