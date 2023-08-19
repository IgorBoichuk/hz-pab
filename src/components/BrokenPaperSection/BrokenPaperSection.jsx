import React from "react";
import style from "./BrokenPaperSection.module.scss";
import { BrokenPaper } from "../BrokenPaper/BrokenPaper";
import { Container } from "../Container/Container";

export const BrokenPaperSection = () => {
  return (
    <section className={style.section}>
      <BrokenPaper />
      <Container>
        <div className={style.textBlock}>
          <p className={style.text}>
            "ХЗ паб" – це місце, де час зупиняється, а веселі зустрічі з друзями
            стають ще приємнішими
          </p>
        </div>
      </Container>
      <div className={style.lineRotate}>
        <BrokenPaper />
      </div>
    </section>
  );
};
