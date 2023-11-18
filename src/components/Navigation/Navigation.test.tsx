import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' link", () => {
      const expectedHomeText = "Home";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationHomeLink = screen.getByRole("link", {
        name: expectedHomeText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a 'Add robot' link", () => {
      const expectedAddRobotText = "Add robot";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationAddRobotLink = screen.getByRole("link", {
        name: expectedAddRobotText,
      });

      expect(navigationAddRobotLink).toBeInTheDocument();
    });
  });
});
