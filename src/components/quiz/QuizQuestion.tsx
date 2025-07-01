
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion as QuizQuestionType } from "@/types/quiz";

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuizQuestion = ({ question, currentQuestion, totalQuestions, onAnswer }: QuizQuestionProps) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-digisaga-lightBlue/30 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto p-6 md:p-12 shadow-xl border-none">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-digisaga-blue">
                Spørsmål {currentQuestion + 1} av {totalQuestions}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% fullført</span>
            </div>
            <Progress value={progress} className="h-2 mb-6" />
            
            <h3 className="text-xl md:text-3xl font-bold mb-8 text-center leading-tight">
              {question.question}
            </h3>
          </div>

          <div className="grid gap-4">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                onClick={() => onAnswer(option.value)}
                className="p-4 md:p-6 text-left justify-start hover:bg-digisaga-lightBlue/50 hover:border-digisaga-blue transition-all duration-200 h-auto min-h-[60px]"
              >
                <span className="text-sm md:text-base font-medium leading-relaxed text-left break-words w-full">
                  {option.label}
                </span>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuizQuestion;
