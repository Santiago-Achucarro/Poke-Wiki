import { Box } from "@chakra-ui/react";
import React from "react";
import { Info } from "../../Components";
import { Main } from "../../Components/";

const Home = () => {
  return (
    <>
      <Box
        width="100%"
        height='2xl'
        display="flex"
        flexDirection='column'
        justifyContent='space-around'
        alignItems='center'
        marginTop="5"
      >
      <Info />
      <Main />
      </Box>
    </>
  );
};

export { Home };
