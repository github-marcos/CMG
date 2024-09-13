import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './App.css'
import Login from './components/pages/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Carga from './components/pages/carga/Carga';

export default function App() {
  return (
    <PrimeReactProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/carga' element={<Carga />} />
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  );
}


