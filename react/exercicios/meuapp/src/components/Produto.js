import React from 'react';

const Produto = ({dados}) => {
  const title = dados.nome;
  const price = dados.preco;
  const image = dados.fotos[0].src;
  const alt = dados.fotos[0].titulo;
  return (
    <>
      <h1>{title}</h1>
      <h2>R$: {price}</h2>
      <img src={image} alt={alt} />
    </>
  );
}

export default Produto;