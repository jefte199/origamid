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

const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}


const App = (event) => {
  const [prod, setProd] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    
    const status = event.target.innerText;

    const product = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${status}`);
    setProd(await product.json());
    setLoading(false);
  }

  return (
    <>
      <Title txt="LOJA" />
      <div style={styleCont}>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>Smartphone</button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      </div>  
      {loading && <img src="https://www.amaclinica.com/wp-content/plugins/payment-qr-woo/assets/loader.gif" width="30px" alt="load" />}
      {prod && !loading? <Produto name={prod.nome} price={prod.preco} image={prod.fotos[0].src} alt={prod.fotos[0].titulo} />: null}
    </>
  );
};

export default App;
