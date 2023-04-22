import colors from "./pokemonColors";

export default function PokemonStats(props) {
  return (
    <div className="pokemon-stats-container">
      <div
        className="pokemon-stats-div"
        key="pokemon-stats"
        style={{ background: colors[props.selectedPokemon.types[0].type.name] }}
      >
        <img
          src={props.selectedPokemon.sprites.front_default}
          alt="pokemon"
        ></img>
        <h4>Pokemon id: {props.selectedPokemon.id}</h4>
        <h4>
          Pokemon type(s):{" "}
          <div className="pokemon-stat-type-container">
            {props.selectedPokemon.types.map((type) => {
              return (
                <div
                  className="pokemon-stat-type-item"
                  style={{ background: colors[type.type.name] }}
                >
                  <h4>{type.type.name}</h4>
                </div>
              );
            })}
          </div>
        </h4>
        <h4>Pokemon stats:</h4>
        <ul>
          {props.selectedPokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <h4>Height: {props.selectedPokemon.height}</h4>
        <h4>Weight: {props.selectedPokemon.weight}</h4>
        <div className="pokemon-stats-button-div">
          <button
            className="pokemon-stat-button"
            onClick={props.disableIsShown}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
