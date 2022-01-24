import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import style from './Item.module.css';

export default function Item() {

  const { item, nome, preco, descricao } = useParams();

  if (item === null) return null;
  return (
    <>
      <Head title={`Mercado | ${item}`} />
      <div className={style.container}>
        <div>
          <h1>{nome}</h1>
          <p className={style.preco}>R$ {preco}</p>
          <p className={style.descricao}>{descricao}</p>
        </div>
      </div>
    </>
  );
}
