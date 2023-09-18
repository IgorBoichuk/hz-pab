import React from "react";

import style from "./PhotoCollage.module.scss";
import { Collage } from "./DataCollage";
import { Container } from "../shared/Container/Container";
import { Picture } from "./Picture";

export const PhotoCollage = () => {
  return (
    <section className={style.section}>
      <Container>
        <ul className={style.list}>
          {Collage.map((item) => (
            <Picture item={item} key={item.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
