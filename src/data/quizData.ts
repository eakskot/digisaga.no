
import { QuizQuestion, QuizResult } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "time_usage",
    question: "Hva bruker dere mest tid på i dag?",
    options: [
      {
        value: "customer_service",
        label: "Kundeservice og support",
        weight: { chatbot: 3, automation: 2, analytics: 1 }
      },
      {
        value: "manual_tasks",
        label: "Manuelle administrative oppgaver",
        weight: { automation: 3, chatbot: 1, analytics: 1 }
      },
      {
        value: "data_analysis",
        label: "Dataanalyse og rapportering",
        weight: { analytics: 3, automation: 1, chatbot: 1 }
      },
      {
        value: "marketing",
        label: "Markedsføring og salg",
        weight: { analytics: 2, automation: 2, chatbot: 1 }
      }
    ]
  },
  {
    id: "main_goal",
    question: "Hvilket mål er viktigst for dere?",
    options: [
      {
        value: "efficiency",
        label: "Øke effektivitet og spare tid",
        weight: { automation: 3, analytics: 2, chatbot: 1 }
      },
      {
        value: "customer_experience",
        label: "Forbedre kundeopplevelsen",
        weight: { chatbot: 3, automation: 1, analytics: 2 }
      },
      {
        value: "growth",
        label: "Vokse og skalere virksomheten",
        weight: { analytics: 3, automation: 2, chatbot: 2 }
      },
      {
        value: "cost_reduction",
        label: "Redusere kostnader",
        weight: { automation: 3, chatbot: 2, analytics: 1 }
      }
    ]
  },
  {
    id: "company_size",
    question: "Hvor mange ansatte er dere?",
    options: [
      {
        value: "1_5",
        label: "1-5 ansatte",
        weight: { automation: 2, chatbot: 3, analytics: 1 }
      },
      {
        value: "6_20",
        label: "6-20 ansatte",
        weight: { automation: 3, chatbot: 2, analytics: 2 }
      },
      {
        value: "21_50",
        label: "21-50 ansatte",
        weight: { analytics: 3, automation: 2, chatbot: 2 }
      },
      {
        value: "50_plus",
        label: "50+ ansatte",
        weight: { analytics: 3, automation: 3, chatbot: 2 }
      }
    ]
  },
  {
    id: "digitalization",
    question: "Hvor digitalisert er dere i dag?",
    options: [
      {
        value: "basic",
        label: "Grunnleggende (e-post, enkle systemer)",
        weight: { chatbot: 3, automation: 1, analytics: 1 }
      },
      {
        value: "intermediate",
        label: "Middels (CRM, nettside, sosiale medier)",
        weight: { automation: 2, chatbot: 2, analytics: 2 }
      },
      {
        value: "advanced",
        label: "Avansert (integrerte systemer, data-drevet)",
        weight: { analytics: 3, automation: 2, chatbot: 1 }
      }
    ]
  },
  {
    id: "priority_area",
    question: "Hvilket område ønsker dere å forbedre først?",
    options: [
      {
        value: "customer_contact",
        label: "Kundekontakt og kommunikasjon",
        weight: { chatbot: 3, automation: 1, analytics: 1 }
      },
      {
        value: "internal_processes",
        label: "Interne prosesser og arbeidsflyt",
        weight: { automation: 3, analytics: 2, chatbot: 1 }
      },
      {
        value: "decision_making",
        label: "Beslutningsgrunnlag og innsikt",
        weight: { analytics: 3, automation: 1, chatbot: 1 }
      },
      {
        value: "everything",
        label: "Alt sammen - en helhetlig løsning",
        weight: { analytics: 2, automation: 2, chatbot: 2 }
      }
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  chatbot: {
    type: "chatbot",
    title: "AI-Chatbot Løsning",
    description: "Basert på dine svar anbefaler vi en intelligent chatbot som kan håndtere kundehenvendelser 24/7.",
    benefits: [
      "Svarer på 80-90% av kundehenvendelser automatisk",
      "Reduserer responstid fra timer til sekunder",
      "Frigjør tid til mer verdiskapende arbeid",
      "Bedre kundeopplevelse døgnet rundt"
    ],
    recommendation: "En AI-chatbot vil spare dere mye tid på kundeservice og gi kundene øyeblikkelig hjelp. Dette er ofte det første steget mot smartere kundebehandling."
  },
  automation: {
    type: "automation",
    title: "Prosessautomatisering",
    description: "Vi anbefaler automatisering av dine manuelle oppgaver og arbeidsflyter for å øke effektiviteten betydelig.",
    benefits: [
      "Automatiserer repetitive oppgaver",
      "Reduserer feil og øker nøyaktighet",
      "Frigjør tid til strategisk arbeid",
      "Skalerer med virksomhetens vekst"
    ],
    recommendation: "Automatisering av arbeidsflyter vil transformere hvordan dere jobber. Vi kan hjelpe dere med å identifisere og automatisere de mest tidkrevende prosessene."
  },
  analytics: {
    type: "analytics",
    title: "AI-drevet Dataanalyse",
    description: "En intelligent analyseløsning som gir deg verdifull innsikt for bedre forretningsbeslutninger.",
    benefits: [
      "Sanntidsrapporter og dashboards",
      "Prediktiv analyse for bedre planlegging",
      "Identifiserer trends og muligheter",
      "Databaserte beslutninger"
    ],
    recommendation: "Med AI-drevet analyse får dere en konkurransefordel gjennom smartere beslutninger basert på reelle data og prediksjoner."
  }
};
