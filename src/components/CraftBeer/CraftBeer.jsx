import React from "react";
import { Container } from "../Container/Container";
import style from "./CraftBeer.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SwiperController } from "../SwiperController/SwiperController";
import { beer } from "../../assets/data/beerData";

export const CraftBeer = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />
        <SwiperController beerData={beer} />
      </Container>
    </section>
  );
};
