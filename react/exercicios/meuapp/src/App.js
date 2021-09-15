import React from 'react';

//Components
import Title from './components/Title';
import Produto from './components/Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
//        <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>

const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}

const styleB = { margin: '.5rem' };

const App = (event) => {
  const [prod, setProd] = React.useState(null);

  async function handleClick(event){
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';
    const res = await fetch(`${url}${event.target.innerText}`);
    setProd(await res.json());
  }

  return (
    <>
      <Title txt="LOJA" />
      <div style={styleCont}>
        <button style={styleB} onClick={handleClick}>Tablet</button>
        <button style={styleB} onClick={handleClick}>Smartphone</button>
        <button style={styleB} onClick={handleClick}>Notebook</button>
      </div>
      {
        prod ? <Produto dados={prod} /> : <p>Ainda não exitem Produtos</p>
      }
      
    </>
  );
};

export default App;
