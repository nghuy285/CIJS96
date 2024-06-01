import "./card.css";
const PokemonCard = (props) => {
  const handleClick = () => {
    alert(props.name + " Xin Chào !");
  };
  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={props.img} alt="" />
        <p className="pokemon_id">{props.id}</p>
        <p className="pokemon_name">{props.name}</p>
        <div className="class">
          {props.type.map((type) => {
            return <span className={type}>{type}</span>;
          })}
        </div>
      </div>
    </>
  );
};
export default PokemonCard;
