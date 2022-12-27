import React from "react";
import { Cards } from "../Cards";

const Middleware = ({ pokemons, load }) => {
  return (
    <>
      {pokemons.map((item) => (
        <Cards
          key={item.id}
          id={item.id}
          img={item.sprites}
          abilities={item.abilities}
          name={item.name}
          load={load}
          types={item.types}
        />
      ))}
    </>
  );
};

export { Middleware };
