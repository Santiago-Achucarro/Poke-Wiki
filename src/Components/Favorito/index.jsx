import { Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFavorite } from "../../setFavorite/useFavorite";

const Favorito = ({ id }) => {
  const valor = JSON.parse(localStorage.getItem(id));
  const [check, setCheck] = useState(valor);

  const change = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    useFavorite(name, checked);
    setCheck(checked);
  };

  useEffect(() => {
    const findPokemon = () => {
      if (valor) {
        setCheck(valor);
      } else {
        setCheck(false);
      }
    };
    findPokemon();
  }, [check]);

  return (
    <>
      <Checkbox
        isChecked={check === null ? false : check}
        name={id}
        onChange={(e) => change(e)}
        paddingTop="3"
        colorScheme="yellow"
      />
    </>
  );
};

export { Favorito };
