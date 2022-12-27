import React from "react";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Middleware } from "../Middleware";
import { getData, getPokemonsData } from "../../Api/api";
import { Search } from "../Search";
import { FilterTipos } from "../FilterTipos";
import { Paginator } from "../Paginator";

const ContactApi = () => {
  const [pages, setPages] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState("");
  const [count, setCount] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [searching, setSearching] = useState(false);

  const GetPokemons = async (pages) => {
    try {
      setLoad(true);
      const data = await getData(pages);
      setTotal(Math.ceil(data.count / 20));
      setNext(data.next);
      setPrev(data.previous);
      const resp = data.results.map(
        async (pokemon) => await getPokemonsData(pokemon.url)
      );
      const results = await Promise.all(resp);
      setPokemons(results);
    } catch (error) {}
  };

  const searchPokemon = async (pokemon) => {
    if (!pokemon) {
      return GetPokemons();
    } else {
      try {
        const data = await getPokemonsData(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        if (data) {
          setPokemons([data]);
          setSearching(true);
        }
      } catch (error) {}
    }
  };

  const reload = () => {
    if (searching || prev !== null) {
      setPages(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
      setSearching(false);
      setCount(0);
      console.log(pages);
    }
  };

  const filterType = async (value) => {
    if (!value) {
      return GetPokemons();
    } else {
      try {
        const data = await getPokemonsData(
          `https://pokeapi.co/api/v2/type/${value}`
        );
        const resp = data.pokemon.map(
          async (poke) => await getPokemonsData(poke.pokemon.url)
        );
        const results = await Promise.all(resp);
        const test = results;
        const pokemon = test.splice(0, 20);
        setPokemons(pokemon);
        setSearching(true);
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (!searching) {
      GetPokemons(pages);
    }
  }, [pages, searching]);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  // const test = pokemons.map(item => item.types)
  // array.forEach(element => {
  // });

  return (
    <div>
      <Flex justifyContent="center" alignContent="center">
        <Search searchPokemon={searchPokemon} reload={reload} />
      </Flex>

      <FilterTipos filterType={filterType} load={load} />
      <Flex
        alignContent="center"
        justifyContent="center"
        flexWrap="wrap"
        marginTop="10"
        gap="5"
        textAlign="center"
      >
        <Middleware pokemons={pokemons} load={load}  />
      </Flex>

      <Paginator
        setPages={setPages}
        setCount={setCount}
        count={count}
        prev={prev}
        next={next}
        searching={searching}
        total={total}
      />
    </div>
  );
};

export { ContactApi };
