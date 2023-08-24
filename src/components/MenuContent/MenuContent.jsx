import React, { useContext } from "react";
import style from "./MenuContent.module.scss";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Container } from "../Container/Container";
import { BeerPreview } from "../BeerPreview/BeerPreview";
import { ArticleCard } from "../ArticleCard/ArticleCard";

import { ReposContext } from "../../Context/ContextProvider";
import { nanoid } from "nanoid";

export const MenuContent = () => {
  const { filteredData, activeSubMenu } = useContext(ReposContext);

  // console.log(searchParams);
  // console.log(activeSubMenu);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <AsideMenu />
          <BeerPreview>
            {filteredData.map((item) => (
              <li key={nanoid()}>
                <ArticleCard item={item} />
              </li>
            ))}
          </BeerPreview>
        </div>
      </Container>
    </section>
  );
};
