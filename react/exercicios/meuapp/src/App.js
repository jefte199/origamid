import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import NnN from './components/NnN';

const App = () => {
  return (
    <BrowserRouter>
      <h1>HEAD</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NnN />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
