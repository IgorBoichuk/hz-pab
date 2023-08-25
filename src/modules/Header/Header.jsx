import React from "react";
import style from "./header.module.scss";

import Logo from "../../assets/galary/hzfav.png";
import { Container } from "../shared/Container/Container";
import { Link } from "react-router-dom";
import { Navmenu } from "../shared/Navmenu/Navmenu";

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerwrapper}>
          <Link to="/" className={style.logolink}>
            <img src={Logo} alt="Logo" className={style.logo} />
          </Link>
          <nav className={style.navmenu}>
            <Navmenu flex="row" />
          </nav>
          <Link to="tel:+380662408540" className={style.navlink}>
            +380662408540
          </Link>
        </div>
      </Container>
    </header>
  );
};
