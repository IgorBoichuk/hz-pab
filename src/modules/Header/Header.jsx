import React, { useContext } from "react";
import style from "./header.module.scss";

import Logo from "../../assets/galary/logo.png";
import { Container } from "../shared/Container/Container";
import { Link } from "react-router-dom";
import { Navmenu } from "../shared/Navmenu/Navmenu";
import sprite from "../../assets/galary/svg/sprite.svg";
import { Modal } from "../shared/Navmodal/Modal";
import { AnimatePresence } from "framer-motion";
import { useToggleModal } from "../../helpers/hooks/useToggleModal";
// import { MyContext } from "../../Context/ContextProvider";

export const Header = () => {
  // const { isModal, toggle } = useContext(MyContext);
  const { isModal, toggle } = useToggleModal();
  return (
    <header className={style.header}>
      <Container>
        <AnimatePresence>{isModal && <Modal close={toggle} />}</AnimatePresence>
        <div className={style.headerwrapper}>
          <Link to="/" className={style.logolink}>
            <img loading="lazy" src={Logo} alt="Logo" className={style.logo} />
          </Link>
          <nav className={style.navmenu}>
            <Navmenu flex="row" />
          </nav>
          <Link to="tel:+380662408540" className={style.navlink}>
            +380662408540
          </Link>
        </div>
        <button type="button" className={style.burgerButton} onClick={toggle}>
          <svg
            className={style.menuIconBurger}
            style={{ display: isModal ? "none" : "block" }}
            width="24"
            height="24"
          >
            <use xlinkHref={`${sprite}#menu`}></use>
          </svg>
          <svg
            className={style.menuIconCross}
            style={{ display: isModal ? "block" : "none" }}
            width="24"
            height="24"
          >
            <use xlinkHref={`${sprite}#cross`}></use>
          </svg>
        </button>
      </Container>
    </header>
  );
};
