import React from "react";
import style from "./NotFound.module.scss";
import CircleWithRunningText from "../Home/Hero/CircleWithRunningText/CircleWithRunningText";
import { ReactComponent as CursorSVG } from "../../assets/galary/svg/cursor.svg";
import { Link } from "react-router-dom";
import { Container } from "../shared/Container/Container";

export const NotFound = () => {
  return (
    <>
      <section className={style.section}>
        <Container>
          <h2 className={style.title}>Ми не можемо знайти цю сторінку</h2>
          <p className={style.description}>
            Сторінку яку ви намагаєтесь знайти не існує. Будь ласка, перевірте
            URL-адресу або спробуйте перейти на іншу сторінку{" "}
          </p>
          <Link to="/menu" className={style.linkToHome}>
            <CircleWithRunningText className={style.textSvg} />
            <div className={style.cursorSvg}>
              <CursorSVG />
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
};
