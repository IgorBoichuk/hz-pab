import React from "react";
import style from "./NotFound.module.scss";
import { Link } from "react-router-dom";
import { MainSection } from "../MainSection/MainSection";

export const NotFound = () => {
  return (
    <>
      <MainSection title="404" />
      <section className={style.section}>
        <h2 className={style.title}>
          Сторінку не знайдено, перейдіть на{" "}
          <Link to="/" className={style.link}>
            {" "}
            головну > >
          </Link>
        </h2>
      </section>
    </>
  );
};
