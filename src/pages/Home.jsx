import React, { useEffect } from "react";
import { beer } from "../assets/data/beerData";
import {
  Hero,
  YourAtmosphere,
  AboutUs,
  CraftBeer,
  RunningLline,
  Recomendation,
  Instagram,
} from "../modules/Home";

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
