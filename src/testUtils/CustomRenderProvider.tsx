import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import mainTheme from "../styles/mainTheme";
import { store } from "../store";

const CustomRenderProvider = (
  children: React.ReactElement,
  mockedStore: Store = store,
) => {
  return render(
    <BrowserRouter>
      <Provider store={mockedStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default CustomRenderProvider;
