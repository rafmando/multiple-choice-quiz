import React from "react";
import styled from "styled-components";

const ProgBarContainer = styled.div`
  width: 100px;
  height: 5px;
  background-color: #e6e6e6;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ProgBarFill = styled.div`
  height: 100%;
  background-color: green;
  transition: width 0.5s ease-out;
  border-radius: 10px;
`;

export default function ProgressBar({
  currentQuestion,
}: {
  currentQuestion: number;
}) {
  return (
    <ProgBarContainer>
      <ProgBarFill style={{ width: `${currentQuestion * 20}%` }} />
    </ProgBarContainer>
  );
}
