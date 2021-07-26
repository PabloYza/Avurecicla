import React from "react";
import "./Partners.css";
import RGSLogo from "../../assets/RGS_LOGO_BN.jpg";
import WatioLogo from "../../assets/logoWatio.jpg";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners__header">
        <h2 className="heading-secondary">Con quien trabajamos</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={RGSLogo} alt="RGS Logo" className="story__img" />
          </figure>
          <div className="story__text">
            <h5>DISEÑO Y CONSTRUCCIÓN</h5>
            <h3 className="heading-tertiary u-margin-bottom-small">
              RGS / Ramón García y Sutega
            </h3>
            <p>
              El Grupo Ramón García y Sutega son dos empresas que tienen más de
              75 años de historia nacional e internacional en el negocio de la
              carpintería, el mobiliario y el equipamiento. Las sinergias entre
              Ramón García y Sutega permiten combinar la experiencia y el
              conocimiento en Carpintería, Diseño y Mobiliario de dos empresas,
              referencia en el mercado, con una una trayectoria de éxito.
            </p>
          </div>
          <div className="container">
            <a
              download
              href="../../assets/pdfs/RGS_ESP_TECH.pdf"
              target="_blank"
            >
              Descargar dossier
            </a>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <img src={WatioLogo} alt="Watio Logo" className="story__img" />
          </figure>
          <div className="story__text">
            <h5>ENERGÍA Y HUELLA DE CARBONO</h5>
            <h3 className="heading-tertiary u-margin-bottom-small">
              GRUPO WATIO
            </h3>
            <p>
              Grupo Watio es una gestora energética que ofrece servicios
              integrales ajustados a cada consumidor. Enfocados en la eficiencia
              energética y el desarrollo sostenible, poseen las herramientas más
              potentes del mercado para garantizar una equitatividad entre el
              consumo y la responsabilidad de empresas con el medio ambiente.
            </p>
          </div>
          <div className="container">
            <a
              download
              href="../../assets/pdfs/DossierGrupoWatio.pdf"
              target="_blank"
            >
              Descargar dossier
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
