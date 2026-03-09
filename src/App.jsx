import useGetCharacter from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1 ';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemon } = useGetCharacter(urlPokemon)
  const { data: rick } = useGetCharacter(urlRick)

  if (!pokemon || !rick) return <p>Cargando...</p>;
  
  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites?.other?.['official-artwork']?.front_default} alt={pokemon.name}  />

      <h2>Personaje Rick and Morty</h2>
      <p>{rick.name}</p>
      <img src={rick.image} alt={rick.name} />
    </>
  );
}

export default App;
