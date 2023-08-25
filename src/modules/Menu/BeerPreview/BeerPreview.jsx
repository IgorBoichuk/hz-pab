import React, { useContext } from "react";
import style from "./BeerPreview.module.scss";
import { MyContext } from "../../../Context/ContextProvider";

export const BeerPreview = ({ children }) => {
  const { preview } = useContext(MyContext);
  return (
    <section className={style.section}>
      <h1 className={style.title}>{preview}</h1>
      <ul className={style.beeritems}>{children}</ul>
    </section>
  );
};
