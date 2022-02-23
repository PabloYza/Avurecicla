import React from 'react'
import './Who.css'

const Who = () => {

  return (
    <>
      <div className="who__title">
        <div className="who__title-box">
          <h1 className="who__title-text">Quiénes</h1>
          <h1 className="who__title-text">Somos</h1>
        </div>
      </div>
      <div className="who__text-box">
        <div>
          <p>
            Nuestro inicio comenzó reciclando aceite vegetal usado convirtiéndolo en Biodiesel, 
            de ahí el nombre de la empresa, comenzamos en Canarias, pero pronto nos expandimos 
            a países de Latinoamérica, como República dominicana, Brasil o México.
          </p>
          <p>
            Nos volvimos pioneros, comenzando a asesorar a otras empresas del sector y 
            ayudando a comercializar su producto con la mayor calidad para ser vendido en Europa.
          </p>
          <p>
            Más adelante, de nuevo en Canarias adquirimos la gestión del reciclaje de inertes incluido
            el asfalto en la zona de Tenerife, con la planta más grande de la isla, en la cúal prestamos 
            nuestros servicios en obras de reasfaltado de Tenerife o La Palma.
          </p>
          <p>
            Siempre hemos creído en dar una segunda vida a los productos, siendo lo más eficiente posible 
            dentro de la época en la que comenzamos esta andadura.
          </p>
          <p>
            Junto a <a style={{color: "#046306", textDecoration: "none", margin: 0, fontWeight: 700}} target="_blank "href="https://grupowatio.com/">Grupo Watio</a> comenzamos el camino con la eficiencia energética, ofreciendo una reducción 
            en la factura de la luz, monitorizando y controlando con exactitud donde más se consumía para 
            asesorar adecuadamente a cada uno de nuestros clientes.
          </p>
          <p>
            Hoy en día asesoramos y preparamos proyectos de iluminación específica ambiental y sostenible para cada cliente en concreto.
          </p>
          <p>Aún así nos hemos dado cuenta que esta es solo una pequeña parte de una rama sostenible mucho mayor…</p>
          <p>
            En la actualidad, sabemos que los tiempos han cambiado, contaminamos demasiado y hay que actuar rápido y consecuentemente, 
            dando paso a un proyecto aún mas ambicioso con el medio ambiente, que es calcular los gases de efecto invernadero de una empresa 
            o producto, pero no nos quedamos ahí, verás todos los servicios que prestamos en la actualidad en la pestaña  “Nuestros servicios”.
          </p>
        </div>
      </div>
    </>
  )
}

export default Who