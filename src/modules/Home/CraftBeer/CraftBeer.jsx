import React from "react";
import { Container } from "../../shared/Container/Container";
import style from "./CraftBeer.module.scss";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { SwiperController } from "../SwiperController/SwiperController";
import { beer } from "../../../assets/data/beerData";

export const CraftBeer = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />
        <SwiperController data={beer} />
      </Container>
    </section>
  );
};
