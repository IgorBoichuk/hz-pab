import React from "react";

import style from "./PhotoCollage.module.scss";
import { Collage } from "./DataCollage";
import { Container } from "../shared/Container/Container";

export const PhotoCollage = () => {
  return (
    <section className={style.section}>
      <Container>
        <ul className={style.list}>
          {Collage.map((item) => (
            <li className={style.listItem} key={item.id}>
              <img
                loading="lazy"
                className={style.img}
                src={item.photo}
                alt={item.name}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
