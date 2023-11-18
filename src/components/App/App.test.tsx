import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Robopedia'", () => {
      const expectedHeadingText = "Robopedia";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const currentHeadingText = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(currentHeadingText).toBeInTheDocument();
    });
  });
});
