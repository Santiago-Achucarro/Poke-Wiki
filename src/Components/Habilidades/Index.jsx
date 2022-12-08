import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Habilidades.module.css";

const Habilidades = ({ ability, url, name, color }) => {
  const [efectAbility, setEfectAbility] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const abilities = async (url) => {
    const resp = await axios.get(url);
    const data = resp.data;
    setEfectAbility(data.effect_entries);
  };
  useEffect(() => {
    abilities(url);
  }, [url]);

  return (
    <>
      {efectAbility.map((item, index) => {
        if (item.language.name === "en") {
          return (
            <li key={index} onClick={onOpen}>
              <StarIcon />

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                  <Heading as='u' fontSize='2xl'>{name}</Heading>
                  <Text >{`Ability:${ability}`}</Text>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>{item.effect}</ModalBody>

                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </li>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export { Habilidades };
