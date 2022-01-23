import React from "react";
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <nav className={style}>
      <ul>
      <li>
          <NavLink to="/" className={style.link} end>Produtos</NavLink>
        </li>
        <li>
          <NavLink to="/contato" className={style.link}>Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;