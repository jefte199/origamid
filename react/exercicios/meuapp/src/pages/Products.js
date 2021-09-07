import React from "react";

import Title from "../components/Title";

const Products = ({ arr, cor }) => {
  return (
    <div>
      <Title cor="#4c8b64" txt="Products" />

        {
          arr.map(({ nome, propriedades }, index) => {
            return (
              <div kei={index}>
                <h3>{nome}</h3>
                <ul>
                  {
                  propriedades.map((prod) => {
                    return <li>{prod}</li>;
                  })
                  }
                </ul>
              </div>
            )
          })
        }
    </div>
  );
}

export default Products;