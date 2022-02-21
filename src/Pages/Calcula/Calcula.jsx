import React from 'react'
import './Calcula.css'

const CalculateFootPrint = () => {


  return (
    <>
      <div className="calculateFootPrint__title">
        <div className="calculateFootPrint__title-box">
          <h1 className="calculateFootPrint__title-text">Calcula tu huella de </h1>
        </div>
      </div>
      <h1 className="calculateFootPrint__header">
        ¿Sabes que es la compensación de emisiones de carbono?
      </h1>
      <div className="intro__text-box">
        <p>
          La huella de carbono es un indicador medioambiental que refleja
          la totalidad de gases de efecto invernadero provenientes, por
          defecto  directo o indirecto, de la actividad de tu organización.
        </p>
        <h2>Obtén todos los beneficios</h2>
        <p>
          Al calcular tu huella de carbono consigues todos los beneficios
          Reducción del impacto ambiental y las emisiones de CO2
          Reafirmación del compromiso medioambiental de tu empresa
          Definición de un plan de reducción y objetivos anuales
          Implantación de plan de recopilación de datos
          Acceso a programas y ayudas específicas
        </p>
        <h2>Paso 1. Recopilación de datos</h2>
        <p>
          Asignaremos un gestor a tu proyecto que se encargará de la
          recopilación de los datos. Tu gestor será el único intermediario
          entre tu empresa, la entidad verificadora y MITECO.
        </p>
        <h2>Paso 2: Cálculo</h2>
          <p>
            Nuestros expertos realizarán un informe de cálculo de tu huella
            de carbono con los datos proporcionados por tu empresa.
          </p>
        <h2>Paso 3: Reducción y compensación</h2>
        <p>
          Definiremos un plan de reducción de CO2 con objetivos anuales y
          conseguiremos los proyectos adecuados para compensar tu
          huella de carbono.
        </p>
        <h2>Paso 4: Obtén el sello</h2>
        <p>
          Tu gestor completará todos los procesos necesarios para
          conseguir la validez de la huella y obtener el sello
          correspondiente por parte de la certificadora AENOR y Miteco
        </p>
      </div>
    </>
  )
}

export default CalculateFootPrint