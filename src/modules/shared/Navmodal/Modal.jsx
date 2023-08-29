import React, { useContext, useEffect } from "react";
import style from "./Modal.module.scss";
import { Navmenu } from "../Navmenu/Navmenu";
import { MyContext } from "../../../Context/ContextProvider";

export const Modal = () => {
  const { isModal, open, close, toggle } = useContext(MyContext);

  const handleOnDropClose = (event) => {
    event.stopPropagation();
    console.log(event.target === event.currentTarget);

    event.target === event.currentTarget && close();

    if (event.target === event.currentTarget) {
      close();
    }
  };

  const handleKeyDown = (event) => {
    event.key === "Escape" && close();
    if (event.key === "Escape" && isModal) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={style.modalwrapper}
      onClick={handleOnDropClose}
      // onClick={close}
    >
      <nav className={style.navmenu}>
        <Navmenu flex="column" togap="24px" />
      </nav>
    </div>
  );
};
