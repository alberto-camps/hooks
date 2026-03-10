import useFetchCharacters from './hooks/useFetchCharacters.js';
import Character from './components/Character';
import './App.css';

function App() {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/1`;
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {data: pokemon, error: errorPokemon, loading: loadingPokemon} = useFetchCharacters(urlPokemon)
  const {data: rick, error: errorRick, loading: loadingRick} = useFetchCharacters(urlRick)
  
  return (
    <>
    <Character character={pokemon} error={errorPokemon} loading={loadingPokemon} name={pokemon?.name} img={pokemon?.sprites?.front_default} />
    <Character character={rick} error={errorRick} loading={loadingRick} name={rick?.name} img={rick?.image} />
    </>
  )
}

export default App;
