import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import "./App.css";
import Modal from "../components/modal";
function App() {
  const [pokemons, setPokemons] = useState([
    {
      id: "#0001",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      image: "/001.png",
    },
    {
      id: "#0002",
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      image: "/002.png",
    },
    {
      id: "#0003",
      name: "Venusaur",
      types: ["Grass", "Poison"],
      image: "/003.png",
    },
    {
      id: "#0004",
      name: "Charmander",
      types: ["Fire"],
      image: "/004.png",
    },
    { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "/005.png" },
    {
      id: "#0006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      image: "/006.png",
    },
    { id: "#0007", name: "Squirtle", types: ["Water"], image: "/007.png" },
    { id: "#0008", name: "Wartortle", types: ["Water"], image: "/008.png" },
    { id: "#0009", name: "Blastoise", types: ["Water"], image: "/009.png" },
    { id: "#0010", name: "Caterpie", types: ["Bug"], image: "/010.png" },
    { id: "#0011", name: "Metapod", types: ["Bug"], image: "/011.png" },
    {
      id: "#0012",
      name: "Butterfree",
      types: ["Bug", "Flying"],
      image: "/012.png",
    },
  ]);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const closeModal = () => {
    setCurrentPokemon(null);
  };

  return (
    <>
      <div className="Pcard">
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types}
            img={pokemon.image}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </div>
      {currentPokemon && (
        <Modal
          name={currentPokemon.name}
          id={currentPokemon.id}
          img={currentPokemon.image}
          type={currentPokemon.types}
          onClose={closeModal}
        />
      )}
    </>
  );
}
export default App;
