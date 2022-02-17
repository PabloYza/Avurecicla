import React from 'react'
import { Layout } from 'antd';
import { ReactComponent as MySvg } from "../../assets/2.svg";
import './HeaderNav.css'


const HeaderNav = () => {
  const { Header } = Layout;

  return (
    <>
      <div className="headerNav">
        <Header>
          <div className="headerNav__content">
            <MySvg className="header__logo"/>
            <div className="headerNav__links">
            </div>
          </div>
        </Header>
      </div>
    </>
  )
}

export default HeaderNav