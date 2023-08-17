import React from "react";
import style from "./BrokenPaper.module.scss";

import brokenPaper from "../../assets/galary/brokenpaper.png";

export const BrokenPaper = () => {
  return (
    <div className={style.wrapper}>
      <img src={brokenPaper} alt="brokenPaper" className={style.brokenPaper} />
    </div>
  );
};
