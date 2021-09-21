import React from 'react';

//Components
import Title from './components/Title';
import Produto from './components/Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}

const styleB = { margin: '.5rem' };

const App = () => {
  const [prod, setProd] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const res = await response.json();
    setProd(res);
    localStorage.setItem("produto", prod.nome);
    //    localStorage.removeItem("produto");
  }

  React.useEffect(async () => {
    const status = localStorage.getItem("produto");
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${status}`);
    const res = await response.json();
    setProd(res);
  }, []);

  return (
    <>
      <Title txt="UseEfect" />

      <div style={styleCont}>
        <button style={styleB} onClick={handleClick}>Notebook</button>
        <button style={styleB} onClick={handleClick}>Smartphone</button>
      </div>

      {prod && <Produto dado={prod} />}
    </>
  );
};

export default App;
