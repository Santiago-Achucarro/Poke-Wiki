import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import axios from "axios";
import { Habilidades } from "../Habilidades";
import { Box } from "@chakra-ui/react";
import flecha from '../../assets/arrow.svg'
import { yellow } from "@mui/material/colors";
import { useAxios } from "../../Api/useAxios";

const Main = () => {
  const {
    card,
    card_img,
    card_info,
    title,
    subtitle,
    social_media,
    social_center,
    container,
    content,
    more_arrows,
    arrow_top,
    arrow_middle,
    arrow_bottom,
    imagenFlecha,
    powers,
     } = styles;
  const [pika, setPika] = useState([]);

  const sketch = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    const data = response.data;
    console.log(data.abilities.length);
    setPika(data);
  };

  useEffect(() => {
    sketch();
  }, []);

  return (
    <div className={card}>
      <div className={card_img}>
        {/* <Favorito key={data.id} id={data.id} /> */}
        {pika.sprites === undefined ? null : (
          <img
            src={
              pika.sprites.front_default
                ? pika.sprites.front_default
                : "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
            }
            alt=""
            width="100%"
          />
        )}
        <div className={container}>
          <div className={content}>
            <svg id={more_arrows}>
              <polygon
                className={arrow_top}
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                className={arrow_middle}
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                className={arrow_bottom}
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </div>
        </div>
      </div>

      {pika.abilities === undefined ? null : (
        <ul
          className={
            pika.abilities.length <= 1
              ? `${social_media} ${social_center}`
              : social_media
          }
        >
          {pika.abilities.map(({ ability }, index) => {
            return (
              <Habilidades
                key={index}
                ability={ability.name}
                url={ability.url}
                name={pika.name}
              />
            );
          })}


        </ul>
      )}

      <div className={card_info}>
        <p className={title}> {pika.name}</p>
        <p className={subtitle}>{pika.id}</p>
      </div>
    </div>
  );
};

export { Main };
