import React from "react";
import style from "./header.module.scss";

import Logo from "../galary/hzfav.png";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerwrapper}>
          <a href="/" className={style.logolink}>
            <img src={Logo} alt="Logo" className={style.logo} />
          </a>
          <nav className={style.navmenu}>
            <ul className={style.navlist}>
              <a href="/" className={style.navlink}>
                <li>Пиво</li>
              </a>
              <a href="/" className={style.navlink}>
                <li>Снеки та закуски</li>
              </a>
              <a href="/" className={style.navlink}>
                <li>Меню</li>
              </a>
              <a href="/" className={style.navlink}>
                <li>Галерея</li>
              </a>
              <a href="/" className={style.navlink}>
                <li>Контакти</li>
              </a>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
