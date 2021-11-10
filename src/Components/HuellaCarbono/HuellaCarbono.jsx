import React from "react";
import "./HuellaCarbono.css";
import Huella1 from "../../assets/huella1.png";
import Huella2 from "../../assets/huella2.png";
import Huella3 from "../../assets/huella3.jpg";
import Huella4 from "../../assets/huella4.png";
import Huella5 from "../../assets/huella5.png";
import Huella6 from "../../assets/huella6.png";

const HuellaCarbono = () => {
  return (
    <section className="HuellaCarbono">
      <div className="title-container">
        <h2 className="heading-secondary">Huella de Carbono</h2>
      </div>
      <div className="content">
        <h1>¿Qué es la huella de carbono?</h1>
        <>
          <p>
            La huella de carbono se define como la{" "}
            <strong>
              cantidad total de GEIs (Gases de Efecto Invernadero) causados
              directa o indirectamente por una organización, un producto o un
              servicio.
            </strong>
          </p>
          <p>
            Conocer la huella de carbono de empresas, actividades o ciclos de
            vida de productos permite{" "}
            <strong>
              {" "}
              conocer la contribución de éstas al cambio climático, expresado en
              toneladas de CO2 equivalente
            </strong>
            , de forma que se puedan identificar los principales puntos de
            mejora tanto a nivel ambiental como económico.{" "}
          </p>
          <p>
            <strong> Existen diferentes estándares</strong> para el cálculo y
            comunicación de la huella de carbono, bien de producto o servicio
            (PAS 2050, GHG Protocol, ISO 14067, etc.), bien de organización (ISO
            14064, GHG Protocol, etc.) Sin embargo, en todos los casos existen
            unos pasos generales que se pueden resumir de la siguiente manera:
          </p>
          <div className="huellaImg">
            <img src={Huella1} alt="diagrama" />
          </div>
          <p>
            Realizamos el cálculo y determinación de la Huella de Carbono,
            Registro de Huella de Carbono según Real Decreto 163/2014, el
            establecimiento de planes de reducción de CO2 y asesoramiento en la
            verificación.{" "}
            <strong>
              {" "}
              Ofrecemos soluciones ajustadas 100% a las necesidades de cada
              cliente y a la naturaleza de sus actividades.
            </strong>
          </p>

          <h1 style={{ marginTop: "4rem" }}>Características</h1>
          <p>
            º Determina y cuantifica las emisiones de{" "}
            <strong> gases de efecto invernadero </strong>de manera trazable y
            evidenciable
          </p>
          <p>
            º <strong>Alcance ajustable</strong> a determinadas instalaciones,
            procesos, actividades o productos. Alcance 1+2 (directas +
            indirectas por energía) o Alcance 1+2+3 (incluyendo otras
            indirectas)
          </p>
          <p>
            º El <strong>enfoque de cálculo</strong> puede ser de control
            (emisiones sobre las que se tiene el control operacional o
            financiero) o de cuota de participación (emisiones con porcentaje de
            participación accionarial)
          </p>
          <p>
            º Determina las <strong>emisiones y remociones de CO2eq.</strong> de
            la organización
          </p>
          <p>
            º Define indicadores que permiten evaluar el{" "}
            <strong>desempeño ambiental</strong>
          </p>
          <p>
            º <strong>Integrable con sistemas de gestión</strong>
          </p>
          <p>
            Auditoría y Verificación externa. Permite la revisión del cálculo y
            su metodología para{" "}
            <strong> auditoría y verificación externa</strong> por parte de una
            Entidad de Certificación
          </p>
          <h1 style={{ marginTop: "4rem" }}>Ventajas</h1>
          <div className="huellaImg">
            <img src={Huella2} alt="ventajas" />
          </div>
          <h1 style={{ marginTop: "5rem" }}>Metodología de trabajo</h1>
          <p>
            1. Reunión inicial: Identificación de las{" "}
            <strong>necesidades del cliente</strong> y definicioón del alcance
          </p>
          <p>
            2. Definición de los{" "}
            <strong>límites de organización y los límites operativos:</strong>{" "}
            centros a calcular, empresas en las que se tienene participaciones,
            actividades, etc.
          </p>
          <p>
            3. Concreción del <strong>alcance:</strong> 1, 2 o bien, 1, 2 y 3
          </p>
          <p>
            4. <strong>Planificación del trabajo</strong> => Recopilación de
            información y documentación
          </p>
          <p>
            5. Cuantificación de{" "}
            <strong>
              emisiones y remociones de Gases de Efecto Invarnadero
            </strong>
          </p>
          <p>
            6. Diseño de un <strong>pkan de reducción de las emisiones</strong>
          </p>
          <p>
            7. Generación del <strong>informe final</strong>(entregable)
          </p>
          <p>
            8. <strong>Verificación por entidad de certificación</strong>
            (opcional)
          </p>
          <p>
            9. Inscripción en el{" "}
            <strong>
              registro voluntario de la Huella de Carbono del MITECO
            </strong>{" "}
            (Ministerio para la transacción ecológico y el reto demográfico)
          </p>
          <div>
            <h1 style={{ marginTop: "4rem" }}>Fases del proceso</h1>
            <p>
              En España existe un{" "}
              <strong>
                {" "}
                registro voluntario de la Huella de Carbono a nivel nacional del
                MITECO
              </strong>{" "}
              (Ministerio para la transición ecológica y el reto demográfico),
              que recopila, previa inscripción voluntaria, las actuaciones de
              mitigación, así como su grado de compromiso.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img
              style={{ maxWidth: "30%" }}
              src={Huella3}
              alt="selloHuellaCarbono"
            />
            <img src={Huella4} alt="sellosHuellaCarbono" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ maxWidth: "40%", marginLeft: "2rem" }}>
              <p style={{ textDecoration: "underline" }}>
                <strong>Validez del sello</strong>
              </p>
              <p>
                El sello de inscripción <strong> no tiene caducidad</strong>,
                aunque sí se calcula para un periodo de tiempo determinado de
                tiempo: un año concreto. Si se desea conseguir un sello para
                otro año, deberá calcularse e inscribir nuevamente la huella de
                carbono.
              </p>
            </div>
            <div style={{ maxWidth: "40%", marginLeft: "2rem" }}>
              <p style={{ textDecoration: "underline" }}>
                <strong>
                  Información sobre empresas y proyectos de absorción
                </strong>
              </p>
              <p>
                Esta información se actualiza de manera periódica y se pone a
                disposición del público en la web del MITECO.
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ marginTop: "4rem" }}>Paso 1: Calcular</h1>
            <div className="huellaImg">
              <img src={Huella5} alt="diagrama" />
            </div>
          </div>
          <div>
            <h1 style={{ marginTop: "4rem" }}>Paso 2: Reducir</h1>
            <div className="huellaImg">
              <img src={Huella6} alt="diagrama" />
            </div>
          </div>
          <div>
            <h1 style={{ marginTop: "4rem" }}>Paso 3: Compensar</h1>
            <p>
              Una vez calculada la huella de carbono y a través de actuaciones
              en la organización reduciéndola todo lo posible, se puede valorar
              la{" "}
              <strong>
                {" "}
                compensación de la huella de carbono invirtiendo económicamente
                en un proyecto para la mejora del medio ambiente y el entorno
                social en el que se desarrolla.
              </strong>{" "}
              Es el siguiente paso hacia una responsabilidad social corporativa
              frente al cambio climático en la organización
            </p>
            <p>
              ¿Con qué tipo de proyectos se puede compensar la Huella de Carbono
              de una organización?
            </p>
            <div style={{ marginLeft: "2rem", display: "flex" }}>
              <div style={{ display: "block" }}>
                <p>❑ Gestión Forestal Sostenible</p>
                <p>❑ Plantaciones forestales</p>
                <p>❑ Energías renovables</p>
                <p>❑ Captura/combustión de metano</p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <img
                  style={{ maxWidth: "50%" }}
                  src={Huella3}
                  alt="selloHuellaCarbono"
                />
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default HuellaCarbono;
