import { QuizProps } from "@/interfaces/interfaces";

export interface QuizComponentProps {
  data: QuizProps;
  quizIndex: number;
  isFinished: (index: number, isCorrect: boolean) => void;
}
