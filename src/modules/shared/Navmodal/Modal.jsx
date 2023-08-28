import React from "react";
import style from "./Modal.module.scss";
import { Navmenu } from "../Navmenu/Navmenu";

export const Modal = ({ modalActive, setModalActive }) => {
  return (
    <div className={style.modalwrapper}>
      <nav className={style.navmenu}>
        <Navmenu flex="column" togap="24px" />
      </nav>
    </div>
  );
};
