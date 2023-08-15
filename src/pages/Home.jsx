import React from "react";
import { Hero } from "../components/Hero/Hero";
import { YourAtmosphere } from "../components/YourAtmosphere/YourAtmosphere";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { CraftBeer } from "../components/CraftBeer/CraftBeer";

import { beer } from "../components/data/beerData";
import { Recomendation } from "../components/Recomendation/Recomendation";
import { Instagram } from "../components/Instagram/Instagram";
// import { SwiperController } from "../components/SwiperController/SwiperController";

export const Home = () => {
  return (
    <div>
      <Hero />
      <YourAtmosphere title={"твоя атмосфера"} />
      <AboutUs title={"про нас"} />
      <CraftBeer title={"КРАФТОВЕ ПИВО"} beerData={beer} />
      <Recomendation title={"Рекомендуємо"} />
      <Instagram title={"INSTAGRAM"} />
    </div>
  );
};
