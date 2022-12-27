import React from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ButtonGroup, Button } from "@chakra-ui/react";

const Paginator = ({ setPages ,count, setCount, prev, next, searching, total }) => {

    const nextPage = () => {
        setPages(next)
        setCount(count + 1)
    }

    const prevPage = () => {
        setPages(prev)
        setCount(count - 1)
    }

  return (
    <>
      <ButtonGroup
        display="flex"
        justifyContent="center"
        marginTop="5"
        marginBottom="5"
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={() => prevPage()}
          disabled={prev === null || searching ? "disabled" : ""}
        >
          Previous
        </Button>
        <p>{`Pagina ${count} de ${total} `}</p>

        <Button
          rightIcon={<ArrowForwardIcon />}
          onClick={() =>nextPage() }
          disabled={next === null || searching ? "disabled" : ""}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

export { Paginator };
