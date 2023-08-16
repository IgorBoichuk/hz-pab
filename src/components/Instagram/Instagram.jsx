import React from "react";
import style from "./Instagram.module.scss";

import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Instagram = ({ title }) => {
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
