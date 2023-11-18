import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import Header from "../Header/Header";
import RobotsPage from "../../pages/RobotsPage";
import Footer from "../Footer/Footer";

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
      <Footer text={"© 2023 All rights reserved"} />
    </AppStyled>
  );
};

export default App;
