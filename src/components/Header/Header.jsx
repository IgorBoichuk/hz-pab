import React from "react";
import style from "./header.module.scss";

import Logo from "../galary/hzfav.png";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

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
                <Link to="/beer" className={style.navlink}>
                  Пиво
                </Link>
              </li>
              <li>
                <Link to="/snacks" className={style.navlink}>
                  Снеки та закуски
                </Link>
              </li>
              <li>
                <Link to="/menu" className={style.navlink}>
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/galary" className={style.navlink}>
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className={style.navlink}>
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
