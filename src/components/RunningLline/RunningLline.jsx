import React from "react";
import style from "./RunningLline.module.scss";
import { BrokenPaper } from "../BrokenPaper/BrokenPaper";

export const RunningLline = () => {
  return (
    <section className={style.section}>
      <BrokenPaper />
      <div className={style.runningLlineWrapper}>
        <div className={style.runningLlineBlock}>
          <p className={style.runningLlineText}>
            пиво - бургери - снеки - фритюр - пиво - бургери - снеки - фритюр -
          </p>
          <p className={style.runningLlineText}>
            пиво - бургери - снеки - фритюр - пиво - бургери - снеки - фритюр -
          </p>
        </div>
      </div>
      <div className={style.lineRotate}>
        <BrokenPaper />
      </div>
    </section>
  );
};
