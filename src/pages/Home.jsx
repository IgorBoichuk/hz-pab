import React from "react";
import { Hero } from "../components/Hero/Hero";
import { YourAtmosphere } from "../components/YourAtmosphere/YourAtmosphere";

// import { beer } from "../components/data/beerData";
// import { SwiperController } from "../components/SwiperController/SwiperController";

export const Home = () => {
  return (
    <div>
      <Hero />
      <YourAtmosphere title={"твоя атмосфера"} />
      {/* <YourAtmosphere title={"про нас"} /> */}
      {/* <YourAtmosphere title={"КРАФТОВЕ ПИВО"} /> */}
      {/* <SwiperController beerData={beer} /> -----------------------Swiper */}
    </div>
  );
};
