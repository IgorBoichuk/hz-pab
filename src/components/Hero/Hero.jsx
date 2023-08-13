import React from "react";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.promotion}>пивний паб:</h1>
      </div>
    </section>
  );
};
