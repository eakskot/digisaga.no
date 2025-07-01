
export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    weight: Record<string, number>;
  }[];
}

export interface QuizResult {
  type: string;
  title: string;
  description: string;
  benefits: string[];
  recommendation: string;
}

export type QuizStep = 'intro' | 'quiz' | 'result' | 'email';
