import React from 'react';

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home"
import Products from "./pages/Products";

const { pathname } = window.location

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const App = () => {
  return (
    <>
      <Header link="/" text="Home" />
      <Header link="/products" text="Products" />
      <br />
      {
        pathname === "/" ? <Home cor="tomato" /> : <Products arr={produtos} cor="tomato" />
      }
    </>
  );
};


export default App;
