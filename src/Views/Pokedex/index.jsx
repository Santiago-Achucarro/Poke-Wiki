import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getData, getPokemonsData } from "../../Api/api";
import { Middleware } from "../../Components/Middleware";
import { Paginator } from "../../Components/Paginator";

const Pokedex = () => {
  const [pages, setPages] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  );
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState(true);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [total, setTotal] = useState("");
  const [count, setCount] = useState(1);

  const GetPokemons = async (pages) => {
    try {
      const data = await getData(pages);
      // setTotal(Math.ceil(data.count / 20));
      // setNext(data.next);
      // setPrev(data.previous);
      const resp = data.results.map(
        async (pokemon) => await getPokemonsData(pokemon.url)
      );
      const results = await Promise.all(resp);
      const items = results.filter(
        (item) =>
          item.id === JSON.parse(localStorage.getItem(`pokemon${item.id}`))
      );
      if(!Array.isArray(items) || items.length === 0){
        console.log('no hay nada aca')
      }else{
        setPokemons(items);
        setLoad(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    GetPokemons(pages);
  }, [pages]);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  return (
    <>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexWrap="wrap"
        marginTop="20"
        gap="5"
        textAlign="center"
      >
        <Middleware pokemons={pokemons} load={load} />
      </Flex>
      {/* <Paginator
        setPages={setPages}
        setCount={setCount}
        count={count}
        prev={prev}
        next={next}
        total={total}
      /> */}
    </>
  );
};

export { Pokedex };
