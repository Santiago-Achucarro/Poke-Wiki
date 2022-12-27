import React from "react";
import { Habilidades } from "../Habilidades";
import { Favorito } from "../Favorito";
import styles from "./Cards.module.css";
import { Spinner, Flex } from "@chakra-ui/react";
import { Tipos } from "../Tipos";
import { useFavorite } from "../../setFavorite/useFavorite";

const Cards = ({ id, img, abilities, name, types, load }) => {
  const {
    card,
    card_img,
    card_info,
    title,
    subtitle,
    social_media,
    social_center,
  } = styles;

  const test = () => {

  }

  if (load) {
    return (
      <div className={card}>
        <div className={card_img}>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Spinner size="xl" />
          </Flex>
        </div>
        <ul></ul>
      </div>
    );
  } else {
    return (
      <div>
        {
          <div className={card}>
            <div className={card_img}>
              <Favorito key={id} id={id} />
              {img === undefined ? null : (
                <img
                  src={
                    img.front_default
                      ? img.front_default
                      : "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
                  }
                  alt=""
                  width="100%"
                />
              )}
            </div>
            <ul
              className={
                abilities.length <= 1
                  ? `${social_media} ${social_center}`
                  : social_media
              }
            >
              {abilities === undefined
                ? null
                : abilities.map(({ ability }, index) => {
                    return (
                      <Habilidades
                        key={index}
                        ability={ability.name}
                        url={ability.url}
                        name={name}
                      />
                    );
                  })}
            </ul>

            <div className={card_info}>
              <p className={title}> {name}</p>
              <Flex justifyContent="center">
                {types.map((ty, index) => (
                  <Tipos ty={ty} key={index} />
                ))}
              </Flex>
              <p className={subtitle}>{id}</p>
            </div>
          </div>
        }
      </div>
    );
  }
};

export { Cards };
