import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import routes
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Item from './Components/Item';

import './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contact />} />
          <Route path="produtos/:item/:nome/:preco/:descricao" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
