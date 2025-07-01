
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { QuizResult as QuizResultType } from "@/types/quiz";

interface QuizResultProps {
  result: QuizResultType;
  onContinue: () => void;
}

const QuizResult = ({ result, onContinue }: QuizResultProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-digisaga-lightBlue/30 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto p-6 md:p-12 shadow-xl border-none">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-digisaga-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Din anbefaling: <span className="gradient-text break-words">{result.title}</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Basert på dine svar anbefaler vi {result.title.toLowerCase()} for din bedrift. Dette kan revolusjonere måten dere jobber på.
            </p>
          </div>

          <div className="bg-gradient-to-r from-digisaga-lightBlue/20 to-blue-50 p-6 md:p-8 rounded-xl mb-8">
            <h4 className="text-lg md:text-xl font-bold mb-4 text-center">Noen av fordelene du kan forvente:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {result.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center text-center">
                  <div className="w-full">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
                    <span className="text-sm md:text-base font-medium">{benefit.split(':')[0] || benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-digisaga-blue p-6 md:p-8 rounded-xl mb-8">
            <div className="flex items-start">
              <div className="flex-grow">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-digisaga-darkBlue">
                  Få din personlige AI-implementeringsplan
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-digisaga-blue mr-2 flex-shrink-0" />
                    Konkrete implementeringsforslag for din bransje
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-digisaga-blue mr-2 flex-shrink-0" />
                    Detaljert tidsplan og ROI-estimater
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-digisaga-blue mr-2 flex-shrink-0" />
                    Skreddersydde råd basert på din bedriftsstørrelse
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={onContinue}
              className="bg-digisaga-blue hover:bg-digisaga-darkBlue text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium w-full max-w-md mx-auto"
              size="lg"
            >
              <span className="truncate">Få min personlige AI-rapport</span>
              <Mail className="ml-2 w-5 h-5 flex-shrink-0" />
            </Button>
            <p className="text-xs md:text-sm text-gray-500 mt-4 px-4 leading-relaxed">
              <strong>100% gratis</strong> - Vi lager en detaljert rapport spesielt for din bedrift og sender den på e-post
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuizResult;
