import React from "react";
import style from "./Recomendation.module.scss";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Recomendation = ({ title }) => {
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
