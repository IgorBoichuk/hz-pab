import React from "react";
import style from "./Hero.module.scss";
import { BrokenPaper } from "../BrokenPaper/BrokenPaper";
import { ReactComponent as CursorSVG } from "../galary/svg/cursor.svg";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import CircleWithRunningText from "../CircleWithRunningText/CircleWithRunningText";

export const Hero = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.content}>
          <p className={style.textOutline}>Найкращий</p>
          <h1 className={style.title}>Пивний паб:</h1>
          <h2 className={style.promotion}>смачне пиво та страви</h2>
          <p className={style.description}>
            Спостерігайте за улюбленими спортивними подіями і насолоджуйтесь
            часом з друзями та родиною
          </p>
        </div>
        <ul className={style.pagination}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Link to="/menu" className={style.heroLink}>
          <CircleWithRunningText className={style.textSvg} />
          <CursorSVG className={style.cursorSvg} />
        </Link>
      </Container>
      <div className={style.endsection}>
        <BrokenPaper />
      </div>
    </section>
  );
};
