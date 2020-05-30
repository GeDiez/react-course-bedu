import React from 'react'
import './Header.css'

function Header (props) {
  const {
    seleccionoTodos,
    onClickTodos,
    onClickFiltroFavoritos
  } = props

  return (
    <header className='header'>
      <h1 className='header__titulo'>
        Lista de Pokemones
      </h1>
      <nav className="header__navbar">
        <button className={`header__navbar__button ${seleccionoTodos && 'is-selected'}`} onClick={onClickTodos}>
          Todos
        </button>
        <button className={`header__navbar__button ${!seleccionoTodos && 'is-selected'}`}  onClick={onClickFiltroFavoritos}>
          Filtrar por favoritos
        </button>
      </nav>
    </header>
  )
}

export default Header
