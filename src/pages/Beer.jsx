import React from "react";
import { BeerCard } from "../components/BeerCard/BeerCard";
import { beer } from "../components/data/beerData";
import { BeerPreview } from "../components/BeerPreview/BeerPreview";

export const Beer = () => {
  return (
    <div>
      <BeerPreview>
        {beer.map((beer) => (
          <BeerCard beer={beer} />
        ))}
      </BeerPreview>
    </div>
  );
};
