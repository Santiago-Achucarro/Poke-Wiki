import React from "react";
import { Cards } from "../Cards";
import { useState, useEffect } from "react";
import axios from "axios";

const Middleware = ({ pokemones }) => {
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState(true);

  const pokemons = async () => {
    const resp = await axios.get(pokemones);
    const data = resp.data;
    setPoke(data);
  };

  useEffect(() => {
    pokemons();
  }, [pokemones]);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <>
      {
        <Cards
          id={poke.id}
          loading={load}
          img={poke.sprites}
          abilities={poke.abilities}
          name={poke.name}
          load={load}
        />
      }
    </>
  );
};

export { Middleware };
