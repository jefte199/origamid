import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import NnN from './components/NnN';
import Head from './components/Head';
import Prod from './components/Prod';

const App = () => {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="prod/:id" element={<Prod />} />
        <Route path="*" element={<NnN />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
