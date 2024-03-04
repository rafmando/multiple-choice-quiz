import styled from "styled-components";

export const QuestionCardContainer = styled.div`
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
  @media (max-width: 285px) {
    width: 350px;
    height: 390px;
  }
`;

export const QuestionCardInfo = styled.div`
  font-weight: bold;
  width: 90%;
`;

export const QuestionCardQuestion = styled.div`
  margin-top: 10px;
`;

export const QuestionCardOptions = styled.ul`
  margin-top: 20px;
`;

export const QuestionCardListItem = styled.li`
  display: flex;
  margin-bottom: 5px;
`;

export const QuestionCheckmark = styled.input`
  height: 15px;
  width: 15px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 5px;
`;

export const QuestionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
