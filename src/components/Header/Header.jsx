import React from "react";
import style from "./header.module.scss";

import Logo from "../galary/hzfav.png";
import { Container } from "../Container/Container";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerwrapper}>
          <Link to="/" className={style.logolink}>
            <img src={Logo} alt="Logo" className={style.logo} />
          </Link>
          <nav className={style.navmenu}>
            <ul className={style.navlist}>
              <li>
                <NavLink to="/" className={style.navlink}>
                  Головна
                </NavLink>
              </li>
              <li>
                <NavLink to="/beer" className={style.navlink}>
                  Пиво
                </NavLink>
              </li>
              <li>
                <NavLink to="/snacks" className={style.navlink}>
                  Снеки та закуски
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={style.navlink}>
                  Меню
                </NavLink>
              </li>
              <li>
                <NavLink to="/galary" className={style.navlink}>
                  Галерея
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={style.navlink}>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
