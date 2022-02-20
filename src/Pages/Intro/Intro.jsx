import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro__title">
        <div className="intro__title-box">
          <h1 className="intro-primary">
            <span className="intro-primary--main">Avurecicla</span>
            <span className="intro-primary--sub">Huella de Carbono</span>
          </h1>
        </div>
      </div>
      <h1 className="intro__header">Quiénes somos</h1>
      <div className="intro__text-box">
        <div>
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
      <div className="video">
        <div className="video__video"> 
          <iframe 
            src="https://www.youtube.com/embed/GenycV14ZIY" 
            title="Huella de Carbono" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            >
          </iframe>
        </div>
      </div>
      <h1 className="intro__header">Calcula tu huella de carbono</h1>
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
  );
};

export default Intro;
