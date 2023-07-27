import React from "react";
import style from "./BeerPreview.module.scss";

export const BeerPreview = ({ children }) => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>Наше пиво</h1>
      <div className={style.beeritems}>{children}</div>
    </section>
  );
};
