import "./styles/App.css";
import React, { useEffect, useState } from "react";
import colors from "./components/pokemonColors";
import PokemonStats from "./components/PokemonStats";

import About from "./pages/About";
import { Link, Router } from "react-router-dom";

function App() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  ); //Define starting url to fetch from

  //loading, error and data parameters
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [responses, setResponses] = useState([]);

  //Pokemon statistics parameter to determine if the pokestats window is shown
  const [isShown, setIsShown] = useState(false);

  //Current selected pokemon to use in the pokemon statistics window
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((repos) => {
        setData(repos);
        const responses = Promise.all(
          repos.results.map((pokemon) => {
            return fetch(pokemon.url).then((res) => res.json());
          })
        );
        return responses;
      })
      .then((responses) => {
        setResponses(responses);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <div className="loading-header">Loading...</div>;
  }

  if (error) {
    return <div className="error-header">Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div className="doc-header">
          <h1 key="header">POKEDEX</h1>
        </div>
        <div className="route-link-container">
          <Link to={"/about"}>
            <button onClick={changeBackground}>About</button>
          </Link>
        </div>
        <div className="pokemon-stats-wrapper">
          <div className="container">
            {responses.map((pokemon) => (
              <div
                style={{ background: colors[pokemon.types[0].type.name] }}
                className="item"
                onClick={() => enableIsShown(pokemon)}
              >
                <h6 key={pokemon.id}>#{pokemon.id}</h6>
                <img alt="pokemon" src={pokemon.sprites.front_default}></img>
                <h4 key={pokemon.name}>{pokemon.name}</h4>
              </div>
            ))}
            {isShown ? (
              <PokemonStats
                selectedPokemon={selectedPokemon}
                disableIsShown={disableIsShown}
              />
            ) : null}
          </div>
        </div>
        <div className="button-container">
          <button className="prev-button" onClick={() => reloadPrev()}>
            Prev
          </button>
          <button className="next-button" onClick={() => reloadNext()}>
            Next
          </button>
        </div>
      </div>
    </>
  );

  function reloadNext() {
    if (data.next != null) {
      setUrl(data.next);
    }
  }

  function reloadPrev() {
    if (data.previous != null) {
      setUrl(data.previous);
    }
  }

  function enableIsShown(props) {
    setSelectedPokemon(props);
    setIsShown(true);
  }

  function disableIsShown() {
    setIsShown(false);
  }

  function changeBackground() {
    document.body.style.backgroundImage =
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7d0ad6d-8109-4e1c-aa4c-8a27833f1034/dfbxi2b-9821bba5-a2e4-49b2-9f4b-13f0d151e8d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3ZDBhZDZkLTgxMDktNGUxYy1hYTRjLThhMjc4MzNmMTAzNFwvZGZieGkyYi05ODIxYmJhNS1hMmU0LTQ5YjItOWY0Yi0xM2YwZDE1MWU4ZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xXjDu9EuF144nByR3scE1-If0BO6BfdPs-dJj2XbPdU)";
  }
}

export default App;
