import { Button, Checkbox, CheckboxIcon } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useState } from "react";

const Favorito = ({ id }) => {
  const [check, setCheck] = useState(false);

  const change = (e) => {
    const checked = e.target.checked;
    setCheck(checked);
  };
  
  return (
    <>
      <Checkbox
        value={check.id}
        isChecked={check}
        onChange={(e) => change(e)}
        paddingTop="3"
      />
    </>
  );
};

export { Favorito };
