import React from "react";
import { Hero } from "../components/Hero/Hero";
import { YourAtmosphere } from "../components/YourAtmosphere/YourAtmosphere";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { CraftBeer } from "../components/CraftBeer/CraftBeer";

import { beer } from "../components/data/beerData";
import { Recomendation } from "../components/Recomendation/Recomendation";
import { Instagram } from "../components/Instagram/Instagram";
import { RunningLline } from "../components/RunningLline/RunningLline";

export const Home = () => {
  return (
    <>
      <Hero />
      <YourAtmosphere title={"твоя атмосфера"} />
      <AboutUs title={"про нас"} />
      <CraftBeer title={"КРАФТОВЕ ПИВО"} beerData={beer} />
      <RunningLline />
      <Recomendation title={"Рекомендуємо"} />
      <Instagram title={"INSTAGRAM"} />
    </>
  );
};
