import React from "react";
import style from "./InstaCard.module.scss";
import vechirka from "./vechirka.jpg";

export const InstaCard = () => {
  return (
    <div className={style.card}>
      <div className={style.imgwrapper}>
        <img src={vechirka} alt="vechirka" className={style.image} />
      </div>
      <p className={style.title}>#halloween</p>
    </div>
  );
};
