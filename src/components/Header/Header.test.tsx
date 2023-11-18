import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Robopedia'", () => {
      const expectedText = "Robopedia";

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
