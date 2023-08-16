import React from "react";
import { Container } from "../Container/Container";
import style from "./CraftBeer.module.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const CraftBeer = ({ title, beer }) => {
  return (
    <div>
      <section className={style.section}>
        <Container>
          <SectionTitle title={title} />
        </Container>
      </section>
    </div>
  );
};
