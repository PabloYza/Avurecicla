import React from "react";
import "./Header.css";
import { ReactComponent as MySvg } from "../../assets/2.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <MySvg className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Avurecicla</span>
          <span className="heading-primary--sub">Huella de Carbono</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
