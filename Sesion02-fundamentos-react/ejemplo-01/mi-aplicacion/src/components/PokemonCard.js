import React from 'react'
import './AlumnoCard.css';

// Stateless component o Componente tonto
class PokemonCard extends React.Component {

  metodo() {
    console.log('mi metodo')
  }

  render() {
    const {pokemon} = this.props
    this.metodo()

    return (
      <div className="card">
        <img className="card__imagen" src={pokemon.imagen} alt=""/>
        <br />
        <label className="card__aliasText">Mi alias es {pokemon.alias}.</label>
        <p className="card__typeText">Soy tipo {pokemon.type}</p>
      </div>
    )
  }
}

export default PokemonCard
