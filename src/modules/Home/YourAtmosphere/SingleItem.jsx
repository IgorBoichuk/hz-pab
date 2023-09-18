import React from "react";
import style from "./YourAtmosphere.module.scss";

export const SingleItem = ({ item }) => {
  return (
    <li className={style.item}>
      <img
        loading="lazy"
        src={item.photo}
        alt="dictrict"
        className={style.itemImg}
      />
      <p className={style.itemTitle}>{item.title}</p>
      <p className={style.itemDescription}>{item.description}</p>
    </li>
  );
};
