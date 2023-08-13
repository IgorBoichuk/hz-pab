import React from "react";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <p className={style.textOutline}>Найкращий</p>
        <h1 className={style.title}>Пивний паб:</h1>
        <h2 className={style.promotion}>смачне пиво та страви</h2>
        <p className={style.description}>
          Спостерігайте за улюбленими спортивними подіями і насолоджуйтесь часом
          з друзями та родиною
        </p>
      </div>
    </section>
  );
};
