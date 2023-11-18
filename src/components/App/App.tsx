import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <main>
        <h1 className="app__logo">Robopedia</h1>
        <Routes>
          <Route path="/" element={<Navigate to="robots" />} />
          <Route path="/robots" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
