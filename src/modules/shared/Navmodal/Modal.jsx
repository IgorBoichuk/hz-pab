import React, { useCallback, useContext, useEffect } from "react";
import style from "./Modal.module.scss";
import { Navmenu } from "../Navmenu/Navmenu";
import { MyContext } from "../../../Context/ContextProvider";
import { motion } from "framer-motion";
import { fromRigth } from "../../../animations/modalAnimation";

export const Modal = () => {
  const { isModal, close } = useContext(MyContext);

  const handleOnDropClose = (event) => {
    event.stopPropagation();

    event.target === event.currentTarget && close();

    if (event.target === event.currentTarget) {
      close();
    }
  };

  const handleKeyDown = useCallback(
    (event) => {
      event.key === "Escape" && close();
      if (event.key === "Escape" && isModal) {
        close();
      }
    },
    [isModal, close]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={style.modalwrapper}
      onClick={handleOnDropClose}
      // onClick={close}
    >
      <motion.nav
        variants={fromRigth}
        initial="hidden"
        exit="exit"
        whileInView="visible"
        className={style.navmenu}
      >
        <Navmenu flex="column" togap="24px" />
      </motion.nav>
    </div>
  );
};
