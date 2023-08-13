import style from "./MainSection.module.scss";

import React from "react";

export const MainSection = ({ title }) => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        {/* <p className={style.textOutline}>{title}</p> */}
        <h1 className={style.title}>{title}</h1>
      </div>
    </section>
  );
};
