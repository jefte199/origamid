import React from 'react';
import { NavLink } from 'react-router-dom';
import './Head.css';

const Head = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="sobre">Sovre</NavLink>
    </nav>
  );
}

export default Head;