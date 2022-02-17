import React from "react";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Layout from "./Layout/Layout.jsx";
import HeaderNav from "./Components/HeaderNav/HeaderNav";

const App = () => {
  return (
    <div className="App">
      <HeaderNav/>
      <Layout/>
      <Footer/>
    </div>
  );
};

export default App;
