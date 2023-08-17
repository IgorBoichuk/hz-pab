import React from "react";
import style from "./RunningLline.module.scss";
import { BrokenPaper } from "../BrokenPaper/BrokenPaper";

export const RunningLline = () => {
  return (
    <section className={style.section}>
      <BrokenPaper />
      <p className={style.runningLline}>
        пиво - бургери - снеки - фритюр - пиво - бургери - снеки - фритюр
      </p>
      <div className={style.lineRotate}>
        <BrokenPaper />
      </div>
    </section>
  );
};
