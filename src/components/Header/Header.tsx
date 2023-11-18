import React from "react";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="main-header">
      <h1 className="app__logo">Robopedia</h1>
    </HeaderStyled>
  );
};

export default Header;
