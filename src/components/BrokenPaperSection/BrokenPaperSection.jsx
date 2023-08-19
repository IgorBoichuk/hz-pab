import React from "react";
import style from "./BrokenPaperSection.module.scss";
import { BrokenPaper } from "../BrokenPaper/BrokenPaper";
import { Container } from "../Container/Container";
import srite from "../../assets/galary/svg/sprite.svg";

export const BrokenPaperSection = () => {
  return (
    <section className={style.section}>
      <BrokenPaper />
      <div className={style.textBlock}>
        <Container>
          <div className={style.textBlockWrapper}>
            <svg className={style.quote} width="40" height="40">
              <use xlinkHref={`${srite}#quote-solid`}></use>
            </svg>
            <p className={style.text}>
              "ХЗ паб" – це місце, де час зупиняється, а веселі зустрічі з
              друзями стають ще приємнішими
            </p>
          </div>
        </Container>
      </div>
      <div className={style.lineRotate}>
        <BrokenPaper />
      </div>
    </section>
  );
};
