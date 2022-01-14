import React from "react";
import "./Who.css";

const Who = () => {
  return (
    <div className="who">
      <h1 className="who__header">Quiénes somos</h1>
      <div className="who__video"> 
        <iframe 
          width="1200" 
          height="700" 
          src="https://www.youtube.com/embed/GenycV14ZIY" 
          title="Huella de Carbono" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          >
        </iframe>
      </div>
      <div className="who__text-box">
      <hr />
        <div className="text" >
          <p>
          El elevado coste de la energía y los efectos que provoca el consumo energético en el cambio climático, 
          fuerzan a todos los sectores de la sociedad a reflexionar sobre su propia situación frente a estos problemas. 
          Asimismo, el continuo e intenso debate acerca del cambio climático está determinando una concienciación 
          por parte de un sector del público, cada vez mayor, que busca un producto o servicio “verde”, respetuoso 
          con el medio ambiente. Por esta razón se hace necesario establecer sistemas y procesos que permitan mejorar 
          la eficiencia energética y reducir costes, y que a la vez contribuyan a la disminución de las emisiones y 
          del impacto ambiental asociado. La emisión de gases de efecto invernadero plantea a cualquier organización 
          diferentes retos que no pueden pasarse por alto.
          </p>
          <p>
            Para enfrentarse a ellos las empresas deben contar con profesionales que les guíen para:
            Adaptarse a los requisitos legales en materia de emisiones
            Lograr una diferenciación competitiva basada en el respeto al medio ambiente
            Avanzar hacia la mejora de la eficiencia energética con el consiguiente ahorro
            Potenciar la reputación corporativa ante clientes e instituciones.
            La huella de carbono es una métrica ambiental que calcula la cantidad de emisiones de gases de efecto invernadero que emitimos a la atmósfera. 
            Esta métrica es utilizada por las empresas para medir su impacto sobre el medio ambiente y establecer estrategias para reducirlo. 
            Sin embargo, no solo las empresas emiten CO2, una persona en su día a día contamina más de lo que creemos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
