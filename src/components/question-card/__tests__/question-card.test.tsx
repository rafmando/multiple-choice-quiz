import { render, screen } from "@testing-library/react";
import QuestionCard from "../question-card";
import userEvent from "@testing-library/user-event";
import { mockLookUp, mockQuestions } from "../../mocks/mocks";

describe("the QuestionCard component", () => {
  it("renders a question correctly", () => {
    const mockSetState = jest.fn();
    render(
      <QuestionCard
        questions={mockQuestions}
        resultsDictonary={mockLookUp}
        setScore={mockSetState}
        setShowResults={mockSetState}
      />
    );

    const text = screen.getByText(
      "When using Javscript frameworks like React or Vue we use a virtual dom."
    );

    const question = screen.getByText(
      "What is the difference between the virtual dom and the real dom?"
    );

    const listOptions = screen.getAllByRole("list-item");

    expect(text).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(listOptions[0]).toHaveTextContent("It's not a copy of the real dom");
    expect(listOptions[1]).toHaveTextContent(
      "It's a lightweight copy of the real dom"
    );
    expect(listOptions[2]).toHaveTextContent("It's slower that the real dom");
  });

  it("allows a user to select an option", async () => {
    const mockSetState = jest.fn();

    render(
      <QuestionCard
        questions={mockQuestions}
        resultsDictonary={mockLookUp}
        setScore={mockSetState}
        setShowResults={mockSetState}
      />
    );

    const radioButtons = screen.getAllByRole("radio-item");

    userEvent.click(radioButtons[0]);

    expect(radioButtons[0]).toBeChecked();
  });
});
