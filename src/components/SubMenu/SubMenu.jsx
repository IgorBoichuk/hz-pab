import React, { useContext } from "react";

import style from "./SubMenu.module.scss";
import { MyContext } from "../../Context/ContextProvider";

export const SubMenu = ({ id }) => {
  const { currentMenu, activeSubMenu, handleSetSearchParams } =
    useContext(MyContext);

  return (
    <ul className={style.subMenuList}>
      {id === activeSubMenu &&
        currentMenu(activeSubMenu).map((item) => (
          <li
            key={item}
            onClick={() => handleSetSearchParams(item, activeSubMenu)}
            className={style.subMenuItem}
          >
            {item}
          </li>
        ))}
    </ul>
  );
};
