import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Info = () => {
  return (
    <div>
      <Card
        direction={{ base: "column" }}
        overflow="hidden"
        variant="outline"
        background='blackAlpha.100'
      >
        <Stack >
          <CardBody textAlign='center'>
            <Heading size="md" >Welcome to the Poke-Wiki</Heading>

            <Text py="2" width={{base:'20em',xl:'60em',lg:'50em',sm:'20em'  }}fontSize='20px'>
                Here you gonna found a many pokemons, these will be on cards, in them you will find stars, which define the amount of abilities that the pokemon has. If you click these stars you will get a modal of their abilities 
            </Text>
          </CardBody>

          <CardFooter>
       
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export { Info };
