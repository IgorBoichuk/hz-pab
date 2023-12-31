import React, { useContext } from "react";
import style from "./AsideMenu.module.scss";
import { Link } from "react-router-dom";
import { SubMenu } from "../SubMenu/SubMenu";
import { MyContext } from "../../../Context/ContextProvider";
import { sideMenu } from "./sideMenu";

export const AsideMenu = () => {
  const { handleSetSearchParams } = useContext(MyContext);

  return (
    <aside className={style.aside}>
      <ul className={style.list}>
        {sideMenu.map((item) => (
          <div key={item.menuItem}>
            <li className={style.listItem}>
              <Link
                to={item.menuLink}
                className={style.linkItem}
                onClick={() => handleSetSearchParams(item.menuItem)}
              >
                {item.menuItem}
              </Link>
            </li>
            <SubMenu id={item.menuLink} />
          </div>
        ))}
      </ul>
    </aside>
  );
};
