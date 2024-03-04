// question card type

type ResultsDictonary = Map<string, number>;

export interface QuestionCardProps {
  setScore: (result: number) => void;
  questions: QuestionProps[];
  setShowResults: (result: boolean) => void;
  resultsDictonary: ResultsDictonary;
}

//option types

export interface OptionsProps {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface QuestionProps {
  id: number;
  text: string;
  question: string;
  options: OptionsProps[];
}

// button types
type ButtonName = "Next" | "Previous";

export interface ButtonProps {
  name: ButtonName;
  func: () => void;
}

export interface FinalResultsProps {
  score: number;
  resultsDictonary: any;
}
