import React, { useContext, useEffect } from "react";

import style from "./SubMenu.module.scss";
import { MyContext } from "../../../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { currentMenu } from "../../../helpers/currentMenu";

export const SubMenu = ({ id }) => {
  const navigate = useNavigate();
  const { activeSubMenu, handleSetSearchParams, submenu, searchParams } =
    useContext(MyContext);

  const query = searchParams.get("SubMenu");

  useEffect(() => {
    if (query && !submenu.includes(query)) {
      navigate("/NotFound");
    }
  }, [submenu, query, navigate]);

  return (
    <ul className={style.subMenuList}>
      {id === activeSubMenu &&
        currentMenu(activeSubMenu) &&
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
