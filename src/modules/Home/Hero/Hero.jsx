import React from "react";
import style from "./Hero.module.scss";
import { BrokenPaper } from "../../shared/BrokenPaper/BrokenPaper";
import { ReactComponent as CursorSVG } from "../../../assets/galary/svg/cursor.svg";
import { Link } from "react-router-dom";
import { Container } from "../../shared/Container/Container";
import CircleWithRunningText from "./CircleWithRunningText/CircleWithRunningText";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={style.section}>
      <Container>
        <motion.div className={style.content}>
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            animate={{ opacity: 1, x: 0 }}
            className={style.textOutline}
          >
            Найкращий
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
            className={style.title}
          >
            Пивний паб:
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -500 }}
            transition={{ duration: 0.5, delay: 1 }}
            animate={{ opacity: 1, x: 0 }}
            className={style.promotion}
          >
            смачне пиво та страви
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            animate={{ opacity: 1, y: 0 }}
            className={style.description}
          >
            Спостерігайте за улюбленими спортивними подіями і насолоджуйтесь
            часом з друзями та родиною
          </motion.p>
        </motion.div>
        <ul className={style.pagination}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Link to="/menu" className={style.heroLink}>
          <CircleWithRunningText className={style.textSvg} />
          <div className={style.cursorSvg}>
            <CursorSVG />
          </div>
        </Link>
      </Container>
      <div className={style.endsection}>
        <BrokenPaper />
      </div>
    </section>
  );
};
