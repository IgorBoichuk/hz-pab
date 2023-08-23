import React, { useContext } from "react";
import style from "./AsideMenu.module.scss";
import { Link } from "react-router-dom";
import { SubMenu } from "../SubMenu/SubMenu";
import { ReposContext } from "../../Context/ContextProvider";
// import { beer } from "../../assets/data/beerData";
// import { menu } from "../../assets/data/menuData";
// import { snacks } from "../../assets/data/snacksData";
// import { souses } from "../../assets/data/sousesData";

export const AsideMenu = () => {
  const { handleSetSearchParams } = useContext(ReposContext);
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
            <SubMenu
              // beer={beer}
              // menu={menu}
              // snacks={snacks}
              // souses={souses}
              id={item.menuLink}
            />
          </div>
        ))}
      </ul>
    </aside>
  );
};
