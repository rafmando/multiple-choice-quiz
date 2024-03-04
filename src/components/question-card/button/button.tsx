import styled from "styled-components";
import { ButtonProps } from "../../../types/types";

const ButtonContainer = styled.button`
  width: 80px;
  height: 25px;
  background-color: #101029;
  border-radius: 5px;
  color: white;
  border: none;
`;
export default function Button({ name, func }: ButtonProps) {
  return (
    <ButtonContainer
      onClick={func}
      role={name === "Next" ? "next-button" : "prev-button"}
    >
      {name}
    </ButtonContainer>
  );
}
