import React from "react";
import "./Footer.css";
import { ReactComponent as MySvg } from "../../assets/2.svg";
import { WhatsAppOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <MySvg className="footer__logo" />
      </div>
      <hr />
      <div className="footer__navigation">
        <a href="#" className="footer__link">
          Compañia
        </a>
        <a
            href="../../assets/pdfs/AvisoLegal.pdf"
            target="_blank"
            className="footer__link"
            download
          >
            Aviso legal
        </a>
        <a
          href="../../assets/pdfs/Cookies.pdf"
          target="_blank"
          className="footer__link"
          download
        >
          Política de cookies
        </a>
        <a
          href="../../assets/pdfs/Privacidad.pdf"
          target="_blank"
          className="footer__link"
          download
        >
          Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;
