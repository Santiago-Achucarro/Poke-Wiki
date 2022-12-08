import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Flex, ButtonGroup, Button, Input, filter } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { Middleware } from "../Middleware";
import { useAxios } from "../../Api/useAxios";

const ContactApi = () => {
  const [pages, setPages] = useState(0);
  const [poke, setPoke] = useAxios(`pokemon?offset=${pages}&limit=20`);
  const [items, setItems] = useState([]);

  const filterName = (e) => {
    const value = e.target.value;
    const newArray = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    value == "" ? setItems(poke) : setItems(newArray);
  };
  useEffect(() => {
    setItems(poke);
  }, [poke]);

  const reload = (e) => {
    setItems(poke);
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center">
        <Input
          type="text"
          background="blackAlpha.200"
          width={{ base: "50%", xl: "30%" }}
          marginBottom="25px"
          marginTop="15px"
          placeholder="Search for Name"
          onChange={(e) => {
            filterName(e);
          }}
        />
        <Button
          onClick={(e) => {
            reload(e);
          }}
          marginLeft="2"
          marginBottom="25px"
          marginTop="15px"
        >
          <RepeatIcon />
        </Button>
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexWrap="wrap"
        marginTop="10"
        gap="5"
        textAlign="center"
      >
        {items.map((item, index) => (
          <Middleware key={index} pokemones={item.url} />
        ))}
      </Flex>
      <ButtonGroup
        display="flex"
        justifyContent="center"
        marginTop="5"
        marginBottom="5"
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={() => setPages(pages - 20)}
          disabled={pages <= 0 ? "disabled" : ""}
        >
          Previous
        </Button>

        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={() => setPages(pages + 20)}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export { ContactApi };
