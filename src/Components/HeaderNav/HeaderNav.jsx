import React from 'react'
import { Layout } from 'antd';
import { ReactComponent as MySvg } from "../../assets/2.svg";
import './HeaderNav.css'
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  AreaChartOutlined,
  SwapOutlined
} from '@ant-design/icons';


const HeaderNav = () => {
  const { Header } = Layout;

  return (
    <>
      <div className="headerNav">
        <Header>
          <div className="headerNav__content">
            <MySvg className="header__logo"/>
            <div className="headerNav__links">
              <div className="headerNav__links-inicio">
                <HomeOutlined />
                <Link to="/">Inicio</Link>
              </div>
              <div className="headerNav__links-compensar">
                <SwapOutlined />
                <Link to="/Compensar&reducir">Compensar & Reducir</Link>
              </div>
              <div className="headerNav__links-compensar">
                <AreaChartOutlined />
                <Link to="/Beneficios">Beneficios</Link>
              </div>
            </div>
          </div>
        </Header>
      </div>
    </>
  )
}

export default HeaderNav