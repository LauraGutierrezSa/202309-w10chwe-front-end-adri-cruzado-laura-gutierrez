import React from "react";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="main-header">
      <h1 className="app__logo">Robopedia</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
