
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <section id="ai-quiz" className="py-20 bg-gradient-to-br from-digisaga-lightBlue/30 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto text-center p-6 md:p-12 shadow-xl border-none">
          <div className="mb-6">
            <div className="w-16 h-16 bg-digisaga-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Finn <span className="gradient-text">din perfekte</span> AI-løsning
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Svar på 5 enkle spørsmål og få en personlig anbefaling for hvordan AI kan hjelpe din bedrift på bare 1 minutt.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 justify-center items-center mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span>Tar kun 1 minutt</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span>Gratis personlig anbefaling</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span>Ingen forpliktelser</span>
            </div>
          </div>

          <Button 
            onClick={onStart}
            className="bg-digisaga-blue hover:bg-digisaga-darkBlue text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium w-full max-w-xs mx-auto"
            size="lg"
          >
            <span className="truncate">Start AI-quiz</span>
            <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default QuizIntro;
