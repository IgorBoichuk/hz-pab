import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import style from "./SubMenu.module.scss";

export const SubMenu = ({ beer, menu, snacks, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const active = location.pathname.split("/");
  const activeSubMenu = active[active.length - 1];

  const uniqCat = (data) => {
    const datacategoryes = data.map((item) => item.category);

    return [...new Set(datacategoryes)];
  };
  //   console.log(id);
  //   console.log(activeSubMenu);

  // const asdasdad =

  const currentMenu = (data) => {
    let currentMenu = {};
    if (data === "bar") {
      currentMenu = uniqCat(beer);
    } else if (data === "kitchen") {
      currentMenu = uniqCat(menu);
    } else if (data === "snacks") {
      currentMenu = uniqCat(snacks);
    } else if (data === "souses") {
      currentMenu = uniqCat(menu);
    }
    return currentMenu;
  };

  return menu ? (
    <ul className={style.subMenuList}>
      {id === activeSubMenu &&
        currentMenu(activeSubMenu).map((item) => (
          <li
            key={item}
            onClick={() => setSearchParams({ SubMenu: item })}
            className={style.subMenuItem}
          >
            {item}
          </li>
        ))}

      {/* currentMenu(activeSubMenu).map((item) => (
          <li
            key={item}
            onClick={() => setSearchParams({ SubMenu: item })}
            className={style.subMenuItem}
          >
            {item}
          </li>
        )) */}
    </ul>
  ) : null;
};
