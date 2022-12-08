import React from "react";
import styles from "./Contacto.module.css";
import { motion } from "framer-motion";

const Contacto = () => {
  const { header, divider, dividor, texto } = styles;
  return (
    <div className={header}>
      <motion.h1 animate={{fontSize: "20px"}} className={texto}>Hamburgesa App</motion.h1>
      <div className={divider}>
        <hr className={dividor} />
      </div>
    </div>
  );
};

export { Contacto };
