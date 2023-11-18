import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import RobotsPage from "../../pages/RobotsPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="robots" />} />
          <Route path="/robots" element={<RobotsPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
