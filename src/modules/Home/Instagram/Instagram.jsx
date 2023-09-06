import React from "react";
import style from "./Instagram.module.scss";

import { Container } from "../../shared/Container/Container";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { InstaCard } from "./InstaCard/InstaCard";

export const Instagram = ({ title }) => {
  const random = () => {
    return `rotate(${Math.random() * 20 - 10}deg)`;
  };

  // style = { inlineStyles };
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />
        <ul className={style.list}>
          <li
            style={{
              transform: random(),
              display: "grid",
              justifyContent: "center",
            }}
          >
            <InstaCard />
          </li>
          <li
            style={{
              transform: random(),
              display: "grid",
              justifyContent: "center",
            }}
          >
            <InstaCard />
          </li>
          <li
            style={{
              transform: random(),
              display: "grid",
              justifyContent: "center",
            }}
          >
            <InstaCard />
          </li>
          <li
            style={{
              transform: random(),
              display: "grid",
              justifyContent: "center",
            }}
          >
            <InstaCard />
          </li>
        </ul>
      </Container>
    </section>
  );
};
