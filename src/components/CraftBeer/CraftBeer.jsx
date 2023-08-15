import React from "react";
import { Container } from "../Container/Container";
import style from "./CraftBeer.module.scss";

export const CraftBeer = ({ title, beer }) => {
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
