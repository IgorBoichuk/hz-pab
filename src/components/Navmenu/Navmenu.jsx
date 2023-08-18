import React from "react";
import style from "./Navmenu.module.scss";
import { NavLink } from "react-router-dom";

export const Navmenu = () => {
  const navData = [
    {
      navItem: "головна",
      link: "/",
    },
    {
      navItem: "про нас",
      link: "/about-us",
    },
    {
      navItem: "меню",
      link: "/menu",
    },
    {
      navItem: "атмосфера",
      link: "/atmosphere",
    },
    {
      navItem: "контакти",
      link: "/contacts",
    },
  ];
  return (
    <div className={style.navWrapper}>
      {navData.map((item) => (
        <NavLink to={item.link} className={style.navlink}>
          {item.navItem}
        </NavLink>
      ))}
    </div>
  );
};
