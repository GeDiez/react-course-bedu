// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React, {Component} from 'react';
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header"

// Este es un componente de React que regresa un `div` con una cadena de texto

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemons: [],
      seleccionoTodos: true
    }
  }

  clickTodos = () => {
    this.setState({
      ...this.state,
      seleccionoTodos: true
    })
  }

  clickFavoritos = () => {
    this.setState({
      ...this.state,
      seleccionoTodos: false,
    })
  }

  soloFavoritos = (pokemon) => {
    if (this.state.seleccionoTodos) return pokemon
    // continua si no se seleccion favoritos
    if (pokemon.favorito) return pokemon
    // si no es favorito
    return null
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then((pokemonesDelServidor) => {
        this.setState({
          ...this.state,
          pokemons: pokemonesDelServidor.results.map(function (pokeapiPokemon, indice) {
            return {
              alias: pokeapiPokemon.name,
              imagen: `https://pokeres.bastionbot.org/images/pokemon/${indice + 1}.png`
            }
          })
        })
      })
  }

  render() {
    const pokemonCards = this.state
      .pokemons
      .filter(this.soloFavoritos)
      .map(function (pokemon) {
        return <PokemonCard pokemon={pokemon} />
      })

    return (
      <div className='app'>
        <Header
          seleccionoTodos={this.state.seleccionoTodos}
          onClickTodos={this.clickTodos}
          onClickFiltroFavoritos={this.clickFavoritos}
        />
        <div className='app__pokemonList'>
          {pokemonCards}
        </div>
      </div>
    );
  }
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de React
export default App;
