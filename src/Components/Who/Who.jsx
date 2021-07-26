import React from "react";
import "./Who.css";

const Who = () => {
  return (
    <div className="who">
      <div className="who__text-box">
        <h1 className="who__header">Quiénes somos</h1>
        <p>
          Toda empresa sigue una filosofía empresarial que le permite ligrar sus
          objetivos, planteados generalmente con una perspectiva de rentabilidad
          y crecimiento.
        </p>
        <p>
          <strong>Grupo Avurecicla</strong> es un conjunto de empresas que tiene
          como objetivo aportar las herramientas necesarias para el ideal
          desarrollo de relaciones comerciales que ayuden a alcanzar los
          objetivos empresariales de forma rentable, cuya orientación hacia el
          mercado, consiste en facilitar esos intercambios a través de entender
          el comportamiento de compra.
        </p>
        <p>
          Todo esto es posible gracias a una amplia red de contactos que incluye
          las empresas más punteras de cada sector, tanto en España (Península y
          Canarias) como en el extranjero.
        </p>
      </div>
    </div>
  );
};

export default Who;
