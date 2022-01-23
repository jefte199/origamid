import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import axios from 'axios';
import style from './Item.module.css';

export default function Item() {
  const baseURL = "https://ranekapi.origamid.dev/json/api/produto";

  const { item } = useParams();
  const [produtos, setProdutos] = React.useState(null);
  const [it, setIt] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProdutos(response.data);
    });
  }, []);

  if (item === null) return null;
  return (
    <>
      <Head title={`Mercado | ${item}`} />
      <h1>{item}</h1>
      <div className={style.container}>
      {produtos ? produtos.map((itm) => {
          setIt(itm);          
          if (itm.id === item) return <img src={itm.fotos[0].src} alt={itm.fotos[0].titulo} key={itm.id} />
        }) : console.log("ERROR: not found")}
        <div>
          <h1>pro</h1>
          <div className={style.dados}>
            <p>google@gmail.com</p>
            <p>+55 88 99559856</p>
            <p>Rua dom leopoldo</p>
            <p>CEP: 63900088</p>
          </div>
        </div>
      </div>
    </>
  );
}
