import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import RobotsPage from "./RobotsPage";

describe("Given a RobotsPage page", () => {
  describe("When it it rendered", () => {
    test("Then it should show a heading with the text 'Explore robots:'", () => {
      const headingText = "Explore robots:";

      render(
        <ThemeProvider theme={mainTheme}>
          <RobotsPage />
        </ThemeProvider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
