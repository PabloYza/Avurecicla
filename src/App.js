import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Who from "./Components/Who/Who";
import HuellaCarbono from "./Components/HuellaCarbono/HuellaCarbono";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Who />
      <HuellaCarbono />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
