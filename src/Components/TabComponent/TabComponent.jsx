import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './TabComponent.css'

const TabComponent = () => (
  <div className='tab__container'>
    <Tabs>
      <TabList>
        <Tab>Calcula tu Huella</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Obtén todos los beneficios</h2>
        <p>
          La huella de carbono es un indicador medioambiental que refleja la totalidad de gases de efecto invernadero provenientes, 
          por defecto directo o indirecto, de la actividad de tu organización.
        </p>
        <p>
          Al calcular tu huella de carbono consigues todos los beneficios
          Reducción del impacto ambiental y las emisiones de CO2
          Reafirmación del compromiso medioambiental de tu empresa
          Definición de un plan de reducción y objetivos anuales
          Implantación de plan de recopilación de datos
          Acceso a programas y ayudas específicas
        </p>
        <h3>Paso 1: Recopilación de datos</h3>
        <p>
          Asignaremos un gestor a tu proyecto que se encargará de la recopilación de los datos. Tu gestor será el único intermediario entre tu empresa, 
          la entidad verificadora y MITECO.
        </p>
        <h3>Paso 2: Cálculo</h3>
        <p>
          Nuestros expertos realizarán un informe de cálculo de tu huella de carbono con los datos proporcionados por tu empresa. 
        </p>
        <h3>Paso 3: Reducción y compensación</h3>
        <p>
          Definiremos un plan de reducción de CO2 con objetivos anuales y conseguiremos los proyectos adecuados para compensar tu huella de carbono.
        </p>
        <h3>Paso 4: Obtén el sello</h3>
        <p>
          Tu gestor completará todos los procesos necesarios para conseguir la validez de la huella y obtener el sello correspondiente por parte de la certificadora AENOR y Miteco
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  </div>
);

export default TabComponent