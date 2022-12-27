import axios from "axios";

export const getData = async (url) => {
  try {
    // let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonsData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (err) {}
};
