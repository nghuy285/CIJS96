import "./card.css";
const PokemonCard = () => {
  return (
    <>
      <div className="card">
        <img src="../src/assets/001.png" alt="" />
        <p className="pokemon_id">#001</p>
        <p className="pokemon_name">Bulbasaur</p>
        <div className="class">
          <span id="grass">Grass</span>
          <span id="poison">Poison</span>
        </div>
      </div>
    </>
  );
};
export default PokemonCard;
