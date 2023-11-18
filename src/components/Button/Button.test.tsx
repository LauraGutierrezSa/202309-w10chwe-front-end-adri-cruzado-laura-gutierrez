import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Delete robot";
  const actionOnClick = vi.fn();

  describe("When it receives the text 'Delete robot", () => {
    test("Then it should show a 'Delete robot' text", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button text={text} actionOnClick={actionOnClick} />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it receives an action and the user makes a click", () => {
    test("Then it should call the received action", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button text={text} actionOnClick={actionOnClick} />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      await userEvent.click(button);
      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
