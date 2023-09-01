import React, { useContext } from "react";
import style from "./Navmenu.module.scss";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../../Context/ContextProvider";

export const Navmenu = ({ flex, togap, footer }) => {
  const { close } = useContext(MyContext);

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
      link: "/menu/bar",
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
    <div
      style={{
        flexDirection: flex,
        gap: togap,
      }}
      className={footer ? style.navWrapperFooter : style.navWrapper}
    >
      {navData.map((item) => (
        <NavLink
          to={item.link}
          key={item.link}
          className={style.navlink}
          onClick={close}
        >
          {item.navItem}
        </NavLink>
      ))}
    </div>
  );
};
