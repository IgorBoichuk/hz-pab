import React from "react";
import style from "./SectionTitle.module.scss";
import { motion } from "framer-motion";

export const SectionTitle = ({ title }) => {
  return (
    <motion.div className={style.sectionTitle}>
      <motion.p
        initial={{ x: -500 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        animate={{ opacity: 1, x: 0 }}
        className={style.textOutline}
      >
        {title}
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        animate={{ opacity: 1, x: 0 }}
        className={style.title}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};
