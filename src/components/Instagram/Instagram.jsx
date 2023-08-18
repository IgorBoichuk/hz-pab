import React from "react";
import style from "./Instagram.module.scss";

import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { InstaCard } from "../InstaCard/InstaCard";

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
          <li style={{ transform: random() }}>
            <InstaCard />
          </li>
          <li style={{ transform: random() }}>
            <InstaCard />
          </li>
          <li style={{ transform: random() }}>
            <InstaCard />
          </li>
          <li style={{ transform: random() }}>
            <InstaCard />
          </li>
        </ul>
      </Container>
    </section>
  );
};
