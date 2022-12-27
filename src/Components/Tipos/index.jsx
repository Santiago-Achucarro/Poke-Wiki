import { Text } from "@chakra-ui/react";
import { color } from "@mui/system";
import React, { useEffect, useState } from "react";

const Tipos = ({ ty }) => {
  const { type } = ty;
  const [ colorText, setColorText ] = useState("");
  const PowerUp = type.name;

 const colors = () => {
    if (PowerUp == "normal") {
        setColorText("grey")
      } else if (PowerUp == "fire") {
        setColorText("red")
      } else if (PowerUp == "water") {
        setColorText("blue.500")
      } else if (PowerUp == "grass") {
        setColorText("green")
      } else if (PowerUp == "electric"){
        setColorText('yellow.400')
      }else if (PowerUp == "ice"){
        setColorText('blue.200')
      }else if (PowerUp == "fighting"){
        setColorText('red.300')
      }else if (PowerUp == "poison"){
        setColorText('blueviolet')
      }else if(PowerUp == "ground"){
        setColorText('brown')
      }else if (PowerUp == "flying"){
        setColorText('purple')
      }else if (PowerUp == "psychic"){
        setColorText('pink')
      }else if (PowerUp == "bug"){
        setColorText('green.400')
      }else if (PowerUp == "rock"){
        setColorText('chocolate')
      }else if (PowerUp == "ghost"){
        setColorText("violet")
      }else if(PowerUp == "dark"){
        setColorText("black")
      }else if (PowerUp == "dragon"){
        setColorText("cyan")
      }else if (PowerUp == "steel"){
        setColorText("silver")
      }else {
        setColorText("pink.300")
      }
 }

 useEffect(()=>{
    colors()
 },[])

    return (
      <>
        <Text marginLeft="5px" color={colorText}>
          {PowerUp}
        </Text>
      </>
    );
};

export { Tipos };
