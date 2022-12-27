import { Button, FormControl, Input } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import './Search.css'


const Search = ({ searchPokemon, reload }) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (search.length == 0) {
      searchPokemon(null);
      setSearch('')
    } else {
      searchPokemon(search.toLowerCase());
      setSearch('')
    }
  };

  return (
    <>
      <form onSubmit={onSearch} className='form_container' >
          <Input
            type="text"
            value={search}
            background="blackAlpha.200"
            width={{ base: "50%", xl: "30%" }}
            marginBottom="25px"
            marginTop="15px"
            placeholder="Search for Name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onClick={() => reload()}
            marginBottom="25px"
            marginTop="15px"
            marginLeft="5px"
          >
            <RepeatIcon />
          </Button>
      </form>
    </>
  );
};

export { Search };
