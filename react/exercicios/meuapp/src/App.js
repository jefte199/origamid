import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {

  const dados = mario;
  console.log(dados);
  
  let totalFull = 0;

  dados.compras.map(item => totalFull = totalFull + Number(item.preco.replace("R$ ", "")));


  const styleg = {
    color: 'tomato',
    fontSize: '2em',
  };

  const stylered = {
    color: "red",
  };

  const stylegreen = {
    color: "green",
  };

  const mytitle = <h1 style={styleg}>My app</h1>;


  return (
      <>
        {mytitle}

        <h2>Nome : {dados.cliente}</h2>
        <h2>Idade: {dados.idade}</h2>
        <h2>Conta: <span style={dados.ativa ? stylegreen: stylered}>{dados.ativa ? "ATIVA": "INATIVA"}</span></h2>
        <h2>Total :R$ {totalFull}</h2>
        <br />
        <h2>Observação : </h2>
        <h2 style={totalFull < 9999 ? stylegreen: stylered}>{totalFull > 9999 ? "Passou o limite, pare de comprar" : "Boas Compras, você tem creditos"}</h2>
      </>
    );
};


export default App;
