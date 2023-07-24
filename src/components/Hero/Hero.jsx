import React from "react";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.promotion}>
          Бірпонг щоп'ятниці. Завітай до нас, стань учасником та отримай бокал
          пива в подарунок для розігріву!
        </h2>
      </div>
    </section>
  );
};
