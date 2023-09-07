import React from "react";
import style from "./InstaCard.module.scss";

export const InstaCard = ({ item }) => {
  return (
    <div className={style.card}>
      <div className={style.imgwrapper}>
        <img
          loading="lazy"
          src={item.image}
          alt={item.alt}
          className={style.image}
        />
      </div>
      <p className={style.title}>#{item.alt}</p>
    </div>
  );
};
