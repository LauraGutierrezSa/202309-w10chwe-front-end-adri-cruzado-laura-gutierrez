import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Footer component", () => {
  const text = "© 2023 All rights reserved";

  describe("When it receives the text '© 2023 All rights reserved'", () => {
    test("Then it should show a '© 2023 All rights reserved' text", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Footer text={text} />
        </ThemeProvider>,
      );

      const footer = screen.getByRole("heading", { name: text });

      expect(footer).toBeInTheDocument();
    });
  });
});
