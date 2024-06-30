import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema do 
import 'primereact/resources/primereact.min.css';          // Estilos 
import 'primeicons/primeicons.css';                        // Ícones do


import './App.css'
import Login from './components/pages/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';

export default function App() {
  return (
    <PrimeReactProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  );
}


