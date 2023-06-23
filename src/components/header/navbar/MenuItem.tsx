import * as React from "react";
import { motion } from "framer-motion";
import styles from "./navbar.module.css"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid black` };
  return (
    <motion.li
    className={styles.navli}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
    {i}
    </motion.li>
  );
};