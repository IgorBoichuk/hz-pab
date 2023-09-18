import React from "react";
import style from "./YourAtmosphere.module.scss";
import { Container } from "../../shared/Container/Container";

import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { atmospherePhotos } from "./atmospherePhotos";

export const YourAtmosphere = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />

        <ul className={style.list}>
          {atmospherePhotos.map(({ id, photo, title, description }) => (
            <li className={style.item} key={id}>
              <img
                loading="lazy"
                src={photo}
                alt="dictrict"
                className={style.itemImg}
              />
              <p className={style.itemTitle}>{title}</p>
              <p className={style.itemDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
