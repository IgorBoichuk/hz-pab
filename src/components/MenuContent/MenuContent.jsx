import React, { useContext } from "react";
import style from "./MenuContent.module.scss";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Container } from "../Container/Container";
import { BeerPreview } from "../BeerPreview/BeerPreview";
import { ArticleCard } from "../ArticleCard/ArticleCard";

import { beer } from "../../assets/data/beerData";
import { ReposContext } from "../../Context/ContextProvider";

// import { menu } from "../../assets/data/menuData";
// import { snacks } from "../../assets/data/snacksData";
// import { souses } from "../../assets/data/sousesData";

export const MenuContent = () => {
  const { articles, dataForMapingMenu } = useContext(ReposContext);
  console.log(articles);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <AsideMenu />
          <BeerPreview>
            {beer.map((item) => (
              <ArticleCard item={item} />
            ))}
          </BeerPreview>
        </div>
      </Container>
    </section>
  );
};
