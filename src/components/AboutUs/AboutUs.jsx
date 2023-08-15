import React from "react";
import style from "./AboutUs.module.scss";
import { Container } from "../Container/Container";

export const AboutUs = ({ title }) => {
  return (
    <div>
      <section className={style.section}>
        <Container>
          <div className={style.sectionTitle}>
            <p className={style.textOutline}>{title}</p>
            <h3 className={style.title}>{title}</h3>
          </div>
        </Container>
      </section>
    </div>
  );
};
