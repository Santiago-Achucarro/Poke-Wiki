import axios from "axios";
import { useEffect, useState } from "react";
const url_initi = `https://pokeapi.co/api/v2/`;

const useAxios = (endpoint) => {
  const [poke, setPoke] = useState([]);
  const [error, setError] = useState(null)
  const firstResp = async (endpoint) => {
    try {
      const resp = await axios.get(url_initi + endpoint);
      const dataOk = resp.data;
      setPoke(dataOk.results);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    firstResp(endpoint);
  }, [endpoint]);

  return [poke,setPoke];
};

export { useAxios };
