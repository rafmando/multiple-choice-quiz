import {
  QuestionButtons,
  QuestionCardContainer,
  QuestionCardInfo,
  QuestionCardListItem,
  QuestionCardOptions,
  QuestionCardQuestion,
  QuestionCheckmark,
} from "./question-card.styles";
import { OptionsProps, QuestionCardProps } from "../../types/types";
import { useState } from "react";
import Button from "./button/button";
import ProgressBar from "./progress-bar/progress-bar";

export default function QuestionCard({
  setScore,
  questions,
  setShowResults,
  resultsDictonary,
}: QuestionCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion].question;
  const info = questions[currentQuestion].text;
  const questionOptions = questions[currentQuestion].options;

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getTotalScore = () => {
    let sum = 0;

    resultsDictonary.forEach((value) => {
      sum += value;
    });
    setScore(sum);
  };

  const storeAnswer = (isCorrect: boolean | undefined) => {
    if (isCorrect) {
      resultsDictonary.set(question, 1);
    }

    if (!isCorrect) {
      resultsDictonary.set(question, 0);
    }
    getTotalScore();
  };

  return (
    <QuestionCardContainer>
      {currentQuestion + 1} out of {questions.length}
      <ProgressBar currentQuestion={currentQuestion} />
      <QuestionCardInfo>{info}</QuestionCardInfo>
      <QuestionCardQuestion>{question}</QuestionCardQuestion>
      <QuestionCardOptions>
        {questionOptions?.map((option: OptionsProps) => {
          const { id, isCorrect, text } = option;
          return (
            <QuestionCardListItem key={id} role="list-item">
              <QuestionCheckmark
                type="radio"
                role="radio-item"
                name="radio"
                onChange={() => storeAnswer(isCorrect)}
              />
              {text}
            </QuestionCardListItem>
          );
        })}
      </QuestionCardOptions>
      <QuestionButtons>
        {currentQuestion >= 1 ? (
          <Button name="Previous" func={prevQuestion} />
        ) : null}
        <Button name="Next" func={nextQuestion} />
      </QuestionButtons>
    </QuestionCardContainer>
  );
}
