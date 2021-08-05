import React from "react";
import "./Footer.css";
import { ReactComponent as MySvg } from "../../assets/2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <MySvg className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer_list">
              <li className="footer__item">
                {/* eslint-disable-next-line */}
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="../../assets/pdfs/AvisoLegal.pdf"
                  target="_blank"
                  className="footer__link"
                >
                  Aviso legal
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="../../assets/pdfs/Cookies.pdf"
                  target="_blank"
                  className="footer__link"
                >
                  Política de cookies
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="../../assets/pdfs/Privacidad.pdf"
                  target="_blank"
                  className="footer__link"
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
