import React, { useContext } from "react";
import style from "./BeerPreview.module.scss";
import { ReposContext } from "../../Context/ContextProvider";

export const BeerPreview = ({ children }) => {
  const { preview } = useContext(ReposContext);
  return (
    <section className={style.section}>
      <h1 className={style.title}>{preview}</h1>
      <ul className={style.beeritems}>{children}</ul>
    </section>
  );
};
