import React from 'react';

const Produto = ({dado}) => {
  return (
    <>
    <h1>{dado.nome}</h1>
    <h2>{dado.preco}</h2>
    </>
  )
}

export default Produto;