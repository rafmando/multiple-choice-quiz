import "./App.css";
import QuestionCard from "./components/question-card/question-card";
import { useEffect, useState } from "react";
import React from "react";
import { questions } from "./data";
import styled from "styled-components";
import FinalResults from "./components/final-results/final-results";
import { QuestionProps } from "./types/types";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9ebf5;
  height: 100vh;
`;

function App() {
  const [showResults, setShowResults] = useState(false);
  const [resultsDictonary, setResultsDictonary] = useState(new Map());
  const [score, setScore] = useState(0);

  const populateResultsDictonary = () => {
    questions.map((q: QuestionProps) => {
      setResultsDictonary((map: any) => new Map(map.set(q.question, 0)));
    });
  };

  useEffect(() => {
    populateResultsDictonary();
  }, []);

  return (
    <AppContainer>
      {!showResults ? (
        <QuestionCard
          setScore={setScore}
          questions={questions}
          resultsDictonary={resultsDictonary}
          setShowResults={setShowResults}
        />
      ) : null}
      {showResults ? (
        <FinalResults score={score} resultsDictonary={resultsDictonary} />
      ) : null}
    </AppContainer>
  );
}

export default App;
