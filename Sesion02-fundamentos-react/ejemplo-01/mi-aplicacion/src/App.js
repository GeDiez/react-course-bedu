// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React, {useState, useEffect} from 'react';
import { Route, useLocation } from "react-router-dom";
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';

// Este es un componente de React que regresa un `div` con una cadena de texto

function fetchPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
}

function App(props) {
  // const {} = props;
  const [pokemons, setPokemons] = useState([])
  const location = useLocation();

  const soloFavoritos = (pokemon) => {
    const querySearch = new URLSearchParams(location.search)
    // if (this.state.seleccionoTodos) return pokemon
    if (querySearch.get('filter') === 'todos') return pokemon
    // continua si no se seleccion favoritos
    if (pokemon.favorito) return pokemon
    // si no es favorito
    return null
  }

  const toggleLike = (pokemonName) => {
    const pokemonsActualizados = pokemons.map(function (pokemon) {
      if (pokemon.alias === pokemonName) {
        return { ...pokemon, favorito: !pokemon.favorito }
      }

      return pokemon
    })

    setPokemons(pokemonsActualizados)
  }

  useEffect(function () {
    fetchPokemons()
      .then(function (pokemonesDelServidor) {
        setPokemons(pokemonesDelServidor.results.map(function (pokeapiPokemon, indice) {
          return {
            alias: pokeapiPokemon.name,
            imagen: `https://pokeres.bastionbot.org/images/pokemon/${indice + 1}.png`,
            favorito: Math.random() > 0.5
          }
        }))
      })
  }, [])

  const pokemonCards = pokemons
    .filter(soloFavoritos)
    .map(function (pokemon) {
      return <PokemonCard
        key={pokemon.alias}
        pokemon={pokemon}
        toggleLike={toggleLike}
      />
    })

  // render() {
    return (
      <div className='app'>
        <Header />
        <Route path="/about_me">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/pokemons/list">
          <div className='app__pokemonList'>
            {pokemonCards}
          </div>
        </Route>
      </div>
    );
  // }
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de React
export default App;
