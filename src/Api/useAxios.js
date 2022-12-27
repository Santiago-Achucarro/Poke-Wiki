import axios from "axios";
import { useEffect, useState } from "react";
const url_initi = `https://pokeapi.co/api/v2/`;

const useAxios = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)
  const firstResp = async (endpoint) => {
    try {
      const resp = await axios.get(url_initi + endpoint);
      const dataOk = resp.data;
      setData(dataOk.results);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    firstResp(endpoint);
  }, [endpoint]);

  return [data];
};

export { useAxios };
