import React from "react";
import Head from "./Head";
import style from './Produtos.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';

const baseURL = "https://ranekapi.origamid.dev/json/api/produto";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProdutos(response.data);
    });
  }, []);

  if (produtos === null) return null;
  return (
    <>
      <Head title="Mercado | produtos" />
      <section className={style}>
        <h1>Produtos</h1>
        <div className={style.container}>
          {produtos.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`produtos/${item.id}/${item.nome}/${item.preco}/${item.descricao}`} className={style.link} end>
                  <img src={item.fotos[0].src} alt={item.id} />
                  <h1 className={style.titl}>{item.nome}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Produtos;