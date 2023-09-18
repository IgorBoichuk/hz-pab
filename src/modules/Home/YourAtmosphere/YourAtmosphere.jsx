import React from "react";
import style from "./YourAtmosphere.module.scss";
import { Container } from "../../shared/Container/Container";

import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { atmospherePhotos } from "./atmospherePhotos";
import { SingleItem } from "./SingleItem";

export const YourAtmosphere = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />

        <ul className={style.list}>
          {atmospherePhotos.map((item) => (
            <SingleItem item={item} key={item.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
