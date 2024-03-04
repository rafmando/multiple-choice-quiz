import styled from "styled-components";

export const FinalResultsContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
  padding-top: 30px;
  font-size: 12px;
  box-shadow: 10px 10px 5px lightgray;
  color: #101029;
  @media (max-width: 400px) {
    width: 350px;
    height: 350px;
  }
`;

export const FinalResultsScore = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FinalResultsQuestions = styled.ul<{ $isGreen: boolean }>`
  list-style-type: none;
  li {
    color: ${(props) => (props.$isGreen ? "green" : "red")};
  }
  margin-bottom: 5px;
`;

export const FinalResultsTitle = styled.h1`
  font-size: 15px;
  font-weight: bold;
`;

export const FinalResultsButton = styled.p`
  cursor: pointer;
  font-weight: bold;
  border: none;
  text-decoration: underline;
`;
