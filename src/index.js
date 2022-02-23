import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Who from './Pages/Who/Who'
import Beneficios from './Pages/Beneficios/Beneficios'
import Footer from "./Components/Footer/Footer";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Servicios from './Pages/Servicios/Servicios'
import ContactUs from './Pages/ContactUs/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HeaderNav/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Nosotros' element={<Who/>} />
        <Route path='/Servicios' element={<Servicios/>} />
        <Route path='/Beneficios' element={<Beneficios/>} />
        <Route path='/Contacto' element={<ContactUs/>} />
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
