import { BrokenPaper } from "../BrokenPaper/BrokenPaper";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import style from "./MainSection.module.scss";

import React from "react";

export const MainSection = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.content}>
          <SectionTitle title={title} />
        </div>
      </Container>
      <div className={style.endMainSection}>
        <BrokenPaper />
      </div>
    </section>
  );
};
