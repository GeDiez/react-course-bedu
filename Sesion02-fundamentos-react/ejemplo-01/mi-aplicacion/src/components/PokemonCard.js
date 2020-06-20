import React from 'react'
import './AlumnoCard.css';
  /* nuevo */
import dislikeButton from '../images/black-like-button.png'
import likeButton from '../images/like-button.png'

// Stateless component o Componente tonto
function PokemonCard (props) {
  const {pokemon, toggleLike} = props

  return (
    <div className="card">
      {/* nuevo */}
      <button
        className="card__likeButton"
        onClick={() => toggleLike(pokemon.alias)}
      >
        <img
          src={pokemon.favorito ? dislikeButton : likeButton} alt=""
          height="20px"
          width="20px"
        />
      </button>
      <img className="card__imagen" src={pokemon.imagen} alt=""/>
      <br />
      <label className="card__aliasText">Mi alias es {pokemon.alias}.</label>
      <p className="card__typeText">Soy tipo {pokemon.type}</p>
    </div>
  )
}

export default PokemonCard
