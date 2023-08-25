import React from "react";
import style from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }) => {
  return (
    <div className={style.sectionTitle}>
      <p className={style.textOutline}>{title}</p>
      <h3 className={style.title}>{title}</h3>
    </div>
  );
};
