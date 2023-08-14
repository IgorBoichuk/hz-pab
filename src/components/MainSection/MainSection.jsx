import { BrokenPaper } from "../BrokenPaper/BrokenPaper";
import { Container } from "../Container/Container";
import style from "./MainSection.module.scss";

import React from "react";

export const MainSection = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.content}>
          <h1 className={style.textOutline}>{title}</h1>
          <p className={style.title}>{title}</p>
        </div>
        <div className={style.endsection}></div>
      </Container>
      <div className={style.endMainSection}>
        <BrokenPaper />
      </div>
    </section>
  );
};
