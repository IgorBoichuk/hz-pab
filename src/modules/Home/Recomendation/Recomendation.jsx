import React from "react";
import style from "./Recomendation.module.scss";
import { Container } from "../../shared/Container/Container";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { SwiperController } from "../SwiperController/SwiperController";
import { menu } from "../../../assets/data/menuData";

export const Recomendation = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />
        <SwiperController data={menu} />
      </Container>
    </section>
  );
};
