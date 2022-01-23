import React from "react";

import image from '../img/contato.jpg';

import style from './Contact.module.css';
import Head from "./Head";

const Contact = () => {
  return (
    <>
      <h1>Contato</h1>
      <Head title="Mercado | contato" />
      <section className={style.contato}>
        <img src={image} alt="Maquina de escrever" />
        <div>
          <h1>entre em contato</h1>
          <div className={style.dados}>
            <p>google@gmail.com</p>
            <p>+55 88 99559856</p>
            <p>Rua dom leopoldo</p>
            <p>CEP: 63900088</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact