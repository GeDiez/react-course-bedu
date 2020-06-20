import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header (props) {
  const {
    currentPage,
    seleccionoTodos,
  } = props

  return (
    <header className='header'>
      <h1 className='header__titulo'>
        Lista de Pokemones
      </h1>
      <nav className="header__navbar">
        <Link
          className={`header__navbar__button ${currentPage === 'pokemonList' && seleccionoTodos && 'is-selected'}`}
          to='/pokemons/list?filter=todos'
        >
          Todos
        </Link>
        <Link
          className={`header__navbar__button ${currentPage === 'pokemonList' && !seleccionoTodos && 'is-selected'}`}
          to='/pokemons/list?filter=favoritos'
        >
          Filtrar por favoritos
        </Link>
        <Link
          className={`header__navbar__button ${currentPage === 'me' && 'is-selected'}`}
          to='/about_me'
        >
          Este soy yo
        </Link>
      </nav>
    </header>
  )
}

export default Header
