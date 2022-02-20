import React from 'react'
import './Compensar.css'

const Compensar = () => {


  return (
    <>
      <div className="compensar__title">
        <div className="compensar__title-box">
          <h1 className="compensar__title-text" >Compensar</h1>
          <h1 className="compensar__title-text" >Y</h1>
          <h1 className="compensar__title-text" >Reducir</h1>
        </div>
      </div>
      <h1 className="compensar__header">
        ¿Sabes que es la compensación de emisiones de carbono?
      </h1>
      <div className="compensar__text-box">
        <div>
          <p>
            La compensación es la acción de neutralizar la cantidad de
            emisiones de CO2 (Huella de carbono) que no se haya logrado
            reducir. 
          </p>
          <p>
            Dicha compensación consiste en realizar un proyecto de ahorro o
            eficiencia energética, de sustitución de combustibles fósiles por
            energías renovables, tratamiento de residuos o conservación de
            masas forestales amenazadas por la deforestación.
            O bien, usar otro de los mecanismos propuestos por el protocolo de
            Kioto, que son los conocidos como créditos de carbono.
            Están planteados como un mecanismo internacional para reducir
            las emisiones de dióxido de carbono (CO2) La idea es recompensar
            a las empresas que menos contaminen, y multar a las que
            contaminan más de lo permitido.
          </p>
          <p>
            Esto fue de especial relevancia para convertir a las empresas en
            actores del cambio contra el cambio climático; y en especial en
            naciones muy industrializadas, que además cuentan con una
            legislación que hace obligatorio para ellas encontrar y aplicar
            estrategias para reducir las emisiones de GEI—especialmente el
            CO2.
          </p>
        </div>
      </div>
    </>
  )
}

export default Compensar