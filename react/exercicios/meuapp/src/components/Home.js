import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <h1>HOME</h1>
    <p>LOLHome</p>
    <Link to="prod/notbook">not</Link>
    <br />
    <Link to="prod/Smartphone">Smartp</Link>
    </>
  )
}

export default Home;