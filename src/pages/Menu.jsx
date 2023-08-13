import React from "react";

import { BeerCard } from "../components/BeerCard/BeerCard";
import { beer } from "../components/data/beerData";
import { BeerPreview } from "../components/BeerPreview/BeerPreview";
import { AsideMenu } from "../components/AsideMenu/AsideMenu";
import { Outlet } from "react-router-dom";
import { MainSection } from "../components/MainSection/MainSection";

export const Menu = () => {
  return (
    <div>
      <MainSection title={"Menu"} />
      <AsideMenu />
      <Outlet />
      {/* <BeerPreview>
        {beer.map((beer) => (
          <BeerCard beer={beer} />
        ))}
      </BeerPreview> */}
    </div>
  );
};
