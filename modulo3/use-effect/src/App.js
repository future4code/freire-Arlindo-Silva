import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import "./styles.css";


export default function App() {
  const [pokeList, setPokList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  useEffect(() => {
        axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  return (
    <div>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}