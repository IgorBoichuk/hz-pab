import React from "react";
import style from "./header.module.scss";

import Logo from "../../assets/galary/hzfav.png";
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
            <NavLink to="/" className={style.navlink}>
              Головна
            </NavLink>
            <NavLink to="/about-us" className={style.navlink}>
              Про нас
            </NavLink>
            <NavLink to="/menu" className={style.navlink}>
              Меню
            </NavLink>

            <NavLink to="/atmosphere" className={style.navlink}>
              Атмосфера
            </NavLink>

            <NavLink to="/contacts" className={style.navlink}>
              Контакти
            </NavLink>
          </nav>
          <Link to="tel:+380662408540" className={style.navlink}>
            +380662408540
          </Link>
        </div>
      </Container>
    </header>
  );
};
