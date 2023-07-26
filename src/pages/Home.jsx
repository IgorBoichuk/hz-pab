import React from "react";
import { Hero } from "../components/Hero/Hero";
import { BeerPreview } from "../components/BeerPreview/BeerPreview";
import { beer } from "../components/data/beerData";

export const Home = () => {
  return (
    <div>
      <Hero />
      <BeerPreview beerData={beer} />
    </div>
  );
};
