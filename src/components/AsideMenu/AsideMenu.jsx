import React from "react";
import style from "./AsideMenu.module.scss";
import { Link } from "react-router-dom";

export const AsideMenu = () => {
  return (
    <aside className={style.aside}>
      <ul className={style.list}>
        <Link to="bar" className={style.linkItem}>
          <li className={style.listItem}>Бар</li>
        </Link>
        <Link to="snacks" className={style.linkItem}>
          <li className={style.listItem}>Снеки та закуски</li>
        </Link>
        <Link to="kitchen" className={style.linkItem}>
          <li className={style.listItem}>Кухня</li>
        </Link>
        <Link to="souses" className={style.linkItem}>
          <li className={style.listItem}>Соуси</li>
        </Link>
      </ul>
    </aside>
  );
};
