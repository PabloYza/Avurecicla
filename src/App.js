import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Who from "./Components/Who/Who";
import Footer from "./Components/Footer/Footer";
import TabComponent from "./Components/TabComponent/TabComponent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Who />
      <TabComponent/>
      <Footer />
    </div>
  );
};

export default App;
