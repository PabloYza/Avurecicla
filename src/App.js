import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Who from "./Components/Who/Who";
import Servicios from "./Components/Servicios/Servicios";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Who />
      <Servicios />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
