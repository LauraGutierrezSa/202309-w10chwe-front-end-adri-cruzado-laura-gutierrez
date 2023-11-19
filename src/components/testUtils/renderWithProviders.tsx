import { configureStore } from "@reduxjs/toolkit";
import { RobotStructure } from "../../store/features/robots/types";
import { robotsReducer } from "../../store/features/robots/robotsSlice";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

const renderWithProviders = (
  children: React.ReactElement,
  mocksList: RobotStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      robotsState: robotsReducer,
    },
    preloadedState: { robotsState: { robots: mocksList } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};

export default renderWithProviders;
