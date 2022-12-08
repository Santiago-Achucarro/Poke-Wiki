import { useAxios } from "./useAxios";
import { useState, useEffect } from "react";
import axios from "axios";

const usePokemons = async (pages = 0) => {
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState(true);
  
    const firstResp = async (endpoint) => {
      try {
        const resp = await axios.get(endpoint);
        const dataOk = resp.data;
        setPoke(dataOk)
      } catch (err) {
        setError(err.message);
      }
    };
  
    useEffect(() => {
      firstResp(endpoint);
    }, [endpoint]);
  

    return [result, poke, load];
};
export { usePokemons };
