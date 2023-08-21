import React from "react";

import { menu } from "../assets/data/menuData";
import { BeerPreview } from "../components/BeerPreview/BeerPreview";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";
import { Outlet } from "react-router-dom";
import { MainSection } from "../components/MainSection/MainSection";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";

export const Menu = () => {
  return (
    <div>
      <MainSection title={"меню"} />
      <AsideMenu />
      <Outlet />
      <BeerPreview>
        {menu.map((item) => (
          <ArticleCard item={item} />
        ))}
      </BeerPreview>
    </div>
  );
};
