import React from "react";
import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>
        Сторінку не знайдено, перейдіть на{" "}
        <Link to="/" className={style.link}>
          {" "}
          головну > >
        </Link>
      </h2>
    </section>
  );
};
