import React from "react";
import style from "./Instagram.module.scss";

import { Container } from "../../shared/Container/Container";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { InstaCard } from "./InstaCard/InstaCard";

import vechirka from "./InstaCard/AdobeStock_206053893.webp";
import sport from "./InstaCard/AdobeStock_313425029.webp";
import beers from "./InstaCard/amie-johnson-VJXLzQi5TlE-unsplash 1.webp";
import halloween from "./InstaCard/photo_2023-09-06_13-55-20.webp";

export const Instagram = ({ title }) => {
  const data = [
    {
      id: 1,
      image: vechirka,
      alt: "vechirka",
    },
    {
      id: 1,
      image: beers,
      alt: "beers",
    },
    {
      id: 1,
      image: sport,
      alt: "sport",
    },
    {
      id: 1,
      image: halloween,
      alt: "halloween",
    },
  ];
  const random = () => {
    return `rotate(${Math.random() * 20 - 10}deg)`;
  };

  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />
        <ul className={style.list}>
          {data.map((item) => (
            <li
              key={item.id}
              style={{
                transform: random(),
                display: "grid",
                justifyContent: "center",
              }}
            >
              <InstaCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
