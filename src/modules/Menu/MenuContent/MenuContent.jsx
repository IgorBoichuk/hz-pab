import React, { useContext } from "react";
import style from "./MenuContent.module.scss";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Container } from "../../shared/Container/Container";
import { BeerPreview } from "../BeerPreview/BeerPreview";
import { ArticleCard } from "../../shared/ArticleCard/ArticleCard";

import { MyContext } from "../../../Context/ContextProvider";
import { nanoid } from "nanoid";

export const MenuContent = () => {
  const { filteredData } = useContext(MyContext);

  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <AsideMenu />
          <BeerPreview>
            {filteredData.map((item) => (
              <ArticleCard key={nanoid()} item={item} />
            ))}
          </BeerPreview>
        </div>
      </Container>
    </section>
  );
};
