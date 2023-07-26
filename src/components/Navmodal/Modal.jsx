import React from "react";
import style from "./Modal.module.scss";

export const Modal = ({ modalActive, setModalActive }) => {
  return (
    <div className={style.modalwrapper}>
      <div className={style.modalcontent}>
        <ul className={style.modallist}>
          <li>Пиво</li>
          <li>Снеки та закуски</li>
          <li>Меню</li>
          <li>Галерея</li>
          <li>Контакти</li>
        </ul>
      </div>
    </div>
  );
};
