import React, { useEffect } from "react";
import { Hero } from "../modules/Home/Hero/Hero";
import { YourAtmosphere } from "../modules/Home/YourAtmosphere/YourAtmosphere";
import { AboutUs } from "../modules/Home/AboutUs/AboutUs";
import { CraftBeer } from "../modules/Home/CraftBeer/CraftBeer";
import { beer } from "../assets/data/beerData";
import { RunningLline } from "../modules/Home/RunningLline/RunningLline";
import { Recomendation } from "../modules/Home/Recomendation/Recomendation";
import { Instagram } from "../modules/Home/Instagram/Instagram";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <YourAtmosphere title={"твоя атмосфера"} />
      <AboutUs title={"про нас"} />
      <CraftBeer title={"КРАФТОВЕ ПИВО"} beerData={beer} />
      <RunningLline />
      <Recomendation title={"Рекомендуємо"} />
      <Instagram title={"INSTAGRAM"} />
    </div>
  );
};
