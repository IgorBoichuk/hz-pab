import React from "react";
import style from "./PhotoCollage.module.scss";

export const Picture = ({ item }) => {
  return (
    <li className={style.listItem} key={item.id}>
      <img
        loading="lazy"
        className={style.img}
        src={item.photo}
        alt={item.name}
      />
    </li>
  );
};
