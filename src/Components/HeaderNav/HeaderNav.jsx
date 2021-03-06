import React from 'react'
import { Layout } from 'antd';
import { ReactComponent as MySvg } from "../../assets/2.svg";
import './HeaderNav.css'
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const { Header } = Layout;

  return (
    <>
      <div className="headerNav">
        <Header>
          <div className="headerNav__content">
            <MySvg className="header__logo"/>
            <div className="headerNav__links">
              <div>
                <Link to="/">Inicio</Link>
              </div>
              <div>
                <Link to="/Nosotros">Nosotros</Link>
              </div>
              <div>
                <Link to="/Servicios">Servicios</Link>
              </div>
              <div>
                <Link to="/Contacto">Contacto</Link>
              </div>
            </div>
          </div>
        </Header>
      </div>
    </>
  )
}

export default HeaderNav