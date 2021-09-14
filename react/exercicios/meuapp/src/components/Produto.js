import React from 'react';

const Produto = ({ name, price, image, alt }) => {

  return (
    <>
      <h1>{name}</h1>
      <h2>R$: {price}</h2>
      <img src={image} alt={alt} />
    </>
  )
}

export default Produto;