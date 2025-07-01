
import { quizQuestions, quizResults } from "@/data/quizData";
import { QuizResult } from "@/types/quiz";
import { toast } from "@/hooks/use-toast";

export const calculateQuizResult = (answers: Record<string, string>): QuizResult => {
  const scores = { chatbot: 0, automation: 0, analytics: 0 };
  
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    const option = question?.options.find(o => o.value === answer);
    
    if (option) {
      Object.entries(option.weight).forEach(([type, weight]) => {
        scores[type as keyof typeof scores] += weight;
      });
    }
  });

  const topResult = Object.entries(scores).reduce((a, b) => 
    scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
  )[0];

  return quizResults[topResult];
};

export const submitQuizToWebhook = async (
  email: string,
  companyName: string,
  industry: string,
  result: QuizResult,
  answers: Record<string, string>
): Promise<boolean> => {
  try {
    const webhookUrl = "https://hook.eu2.make.com/c0assetr04tfm6loxir95ty3pjiyb1ob";
    
    console.log("Sending AI quiz data to Make.com webhook:", {
      email,
      companyName,
      industry,
      result: result.type,
      answers
    });

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        company_name: companyName,
        industry: industry,
        result_type: result.type,
        result_title: result.title,
        result_description: result.description,
        answers: answers,
        timestamp: new Date().toISOString(),
        source: "Digisaga AI-quiz"
      })
    });

    if (response.ok) {
      toast({
        title: "Takk for din interesse!",
        description: "Vi genererer din personlige AI-rapport og sender den på e-post.",
        variant: "default"
      });
      return true;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending to webhook:", error);
    toast({
      title: "Noe gikk galt",
      description: "Vennligst prøv igjen senere.",
      variant: "destructive"
    });
    return false;
  }
};
