import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/login' >Entrar / Criar</Link>
    </nav>
  )
}

export default Header
