import React from "react";
import style from "./AsideMenu.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";

export const AsideMenu = () => {
  const sideMenu = [
    {
      menuItem: "Бар",
      menuLink: "bar",
    },
    {
      menuItem: "Снеки",
      menuLink: "snacks",
    },
    {
      menuItem: "Кухня",
      menuLink: "kitchen",
    },
    {
      menuItem: "Соуси",
      menuLink: "souses",
    },
  ];
  return (
    <aside className={style.aside}>
      <ul className={style.list}>
        {sideMenu.map((item) => (
          <Link
            to={item.menuLink}
            className={style.linkItem}
            key={item.menuItem}
          >
            <li className={style.listItem}>{item.menuItem}</li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};
