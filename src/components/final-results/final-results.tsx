import { useEffect, useState } from "react";
import { FinalResultsProps } from "../../types/types";
import {
  FinalResultsButton,
  FinalResultsContainer,
  FinalResultsQuestions,
  FinalResultsScore,
  FinalResultsTitle,
} from "./final-results.styled";

export default function FinalResults({
  score,
  resultsDictonary,
}: FinalResultsProps) {
  const [wrongQuestions, setWrongQuestions] = useState<string[]>([]);
  const [correctQuestions, setCorrectQuestions] = useState<string[]>([]);

  useEffect(() => {
    let tempWrongArr = [];
    let tempCorrectArr = [];

    for (let [key, value] of resultsDictonary.entries()) {
      if (value === 0) tempWrongArr.push(key);
      if (value === 1) tempCorrectArr.push(key);
    }
    setWrongQuestions(tempWrongArr);
    setCorrectQuestions(tempCorrectArr);
  }, [resultsDictonary]);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <FinalResultsContainer>
      <FinalResultsScore>
        You got {score} / {resultsDictonary.size}
      </FinalResultsScore>
      <FinalResultsTitle>Correct questions</FinalResultsTitle>
      <FinalResultsQuestions $isGreen>
        {score === 0 ? (
          <li>You got 0 questions correct</li>
        ) : (
          correctQuestions.map((correctQuestion: string) => {
            return (
              <li key={correctQuestion} role="correct-question">
                {correctQuestion}
              </li>
            );
          })
        )}
      </FinalResultsQuestions>
      <FinalResultsTitle>Incorrect questions</FinalResultsTitle>
      <FinalResultsQuestions $isGreen={false}>
        {score === resultsDictonary.size ? (
          <li>You got 0 questions wrong</li>
        ) : (
          wrongQuestions.map((wrongQuestion: string) => {
            return (
              <li key={wrongQuestion} role="wrong-question">
                {wrongQuestion}
              </li>
            );
          })
        )}
      </FinalResultsQuestions>
      <FinalResultsButton onClick={refreshPage}>Reset Quiz</FinalResultsButton>
    </FinalResultsContainer>
  );
}
