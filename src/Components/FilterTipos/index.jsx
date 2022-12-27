import { Button, ButtonGroup, FormControl } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getPokemonsData } from "../../Api/api";

const FilterTipos = ({filterType}) => {
  const [types, setTypes] = useState([])

    const filter = (e) => {
        const value = e.target.value
        filterType(value)
    }

    const typesBtns = async() => {
      const data =  await getPokemonsData("https://pokeapi.co/api/v2/type/")
      if (data){
        setTypes(data.results)
      }
    }

    useEffect(() => {
      typesBtns()
    },[])                                                                                                                                                                                                          
  return (
    <>
      <ButtonGroup display='flex' justifyContent='center' flexWrap='wrap'>
        {types.map((type,index) => (
          <Button size='sm' value={type.name} key={index}  onClick={(e) => filter(e)}>{type.name}</Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export { FilterTipos };
