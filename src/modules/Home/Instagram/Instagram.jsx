import React from "react";
import style from "./Instagram.module.scss";

import { Container } from "../../shared/Container/Container";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { InstaCard } from "./InstaCard/InstaCard";

import { random } from "../../../helpers/Randomaizer";
import { data } from "./mocData";

export const Instagram = ({ title }) => {
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
