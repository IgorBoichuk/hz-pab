import React from "react";
import style from "./TolkingAboutAs.module.scss";
import { Container } from "../../shared/Container/Container";
import sprite from "../../../assets/galary/svg/sprite.svg";

export const TolkingAboutAs = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionTitle}>
          <p className={style.textOutline}>{title}</p>
          <h3 className={style.title}>{title}</h3>
        </div>
        <div className={style.reviewsWrapper}>
          <div className={style.reviews}>
            <svg className={style.leftCorner} width="112" height="144">
              <use xlinkHref={`${sprite}#corner`}></use>
            </svg>
            <p className={style.reviewsCount}>5/5</p>
            <p className={style.reviewsPlace}>відгуки GOOGLE</p>
            <svg className={style.rightCorner} width="112" height="144">
              <use xlinkHref={`${sprite}#corner`}></use>
            </svg>
          </div>
          <div className={style.reviews}>
            <svg className={style.leftCorner} width="112" height="144">
              <use xlinkHref={`${sprite}#corner`}></use>
            </svg>
            <p className={style.reviewsCount}>100+</p>
            <p className={style.reviewsPlace}>відгуків в instagram</p>
            <svg className={style.rightCorner} width="112" height="144">
              <use xlinkHref={`${sprite}#corner`}></use>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};
