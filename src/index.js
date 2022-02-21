import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compensar from './Pages/Compensar/Compensar'
import Beneficios from './Pages/Beneficios/Beneficios'
import Footer from "./Components/Footer/Footer";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import CalculateFootPrint from './Pages/Calcula/Calcula'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HeaderNav/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Beneficios' element={<Beneficios/>} />
        <Route path='/Compensar&reducir' element={<Compensar/>} />
        <Route path='/CalculateFootPrint' element={<CalculateFootPrint/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
