import React, { useContext } from "react";
import style from "./AsideMenu.module.scss";
import { Link } from "react-router-dom";
import { SubMenu } from "../SubMenu/SubMenu";
import { MyContext } from "../../../Context/ContextProvider";

export const AsideMenu = () => {
  const { handleSetSearchParams } = useContext(MyContext);
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
          <div key={item.menuItem}>
            <Link
              to={item.menuLink}
              className={style.linkItem}
              onClick={() => handleSetSearchParams(item.menuItem)}
            >
              <li className={style.listItem}>{item.menuItem}</li>
            </Link>
            <SubMenu id={item.menuLink} />
          </div>
        ))}
      </ul>
    </aside>
  );
};
