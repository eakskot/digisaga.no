
import React, { useState } from "react";
import { QuizStep } from "@/types/quiz";
import { quizQuestions } from "@/data/quizData";
import { calculateQuizResult, submitQuizToWebhook } from "@/utils/quizUtils";
import QuizIntro from "./quiz/QuizIntro";
import QuizQuestion from "./quiz/QuizQuestion";
import QuizResult from "./quiz/QuizResult";
import QuizEmailForm from "./quiz/QuizEmailForm";

const AIQuiz = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const calculatedResult = calculateQuizResult(newAnswers);
      setResult(calculatedResult);
      setCurrentStep('result');
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && companyName && industry && result) {
      setIsSubmitting(true);
      
      const success = await submitQuizToWebhook(email, companyName, industry, result, answers);
      
      if (success) {
        setIsSubmitted(true);
      }
      
      setIsSubmitting(false);
    }
  };

  if (currentStep === 'intro') {
    return <QuizIntro onStart={() => setCurrentStep('quiz')} />;
  }

  if (currentStep === 'quiz') {
    return (
      <QuizQuestion
        question={quizQuestions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (currentStep === 'result' && result) {
    return (
      <QuizResult
        result={result}
        onContinue={() => setCurrentStep('email')}
      />
    );
  }

  if (currentStep === 'email') {
    return (
      <QuizEmailForm
        email={email}
        setEmail={setEmail}
        companyName={companyName}
        setCompanyName={setCompanyName}
        industry={industry}
        setIndustry={setIndustry}
        onSubmit={handleEmailSubmit}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
      />
    );
  }

  return null;
};

export default AIQuiz;
