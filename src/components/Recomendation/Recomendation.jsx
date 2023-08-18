import React from "react";
import style from "./Recomendation.module.scss";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SwiperController } from "../SwiperController/SwiperController";
import { menu } from "../../assets/data/menuData";

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
