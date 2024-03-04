import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FinalResults from "../final-results";
import { mockLookUp } from "../../mocks/mocks";

describe("the FinalResults component", () => {
  it("renders a final result correctly", () => {
    render(<FinalResults score={2} resultsDictonary={mockLookUp} />);

    expect(screen.getByText("You got 2 / 3")).toBeInTheDocument();
    expect(
      screen.getByText(
        "When using Javscript frameworks like React or Vue we use a virtual dom."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "A widely used library Next JS, is used by many companies in 2024."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Typescript (a superset of javascript) was released in 2012."
      )
    ).toBeInTheDocument();
  });

  it("renders the correct text color for each question", () => {
    render(<FinalResults score={2} resultsDictonary={mockLookUp} />);

    const correctQuestions = screen.getAllByRole("correct-question");
    const correctQuestion1 = getComputedStyle(correctQuestions[0]);
    const correctQuestion2 = getComputedStyle(correctQuestions[1]);

    expect(correctQuestion1.color).toBe("green");
    expect(correctQuestion2.color).toBe("green");

    const wrongQuestions = screen.getAllByRole("wrong-question");
    const wrongQuestion1 = getComputedStyle(wrongQuestions[0]);

    expect(wrongQuestion1.color).toBe("red");
  });

  it("displays correct message when user gets 0 questions correct", () => {
    render(<FinalResults score={0} resultsDictonary={mockLookUp} />);
    expect(screen.getByText("You got 0 questions correct")).toBeInTheDocument();
  });

  it("displays correct message when user gets all questions correct", () => {
    render(<FinalResults score={3} resultsDictonary={mockLookUp} />);
    expect(screen.getByText("You got 0 questions wrong")).toBeInTheDocument();
  });
});
