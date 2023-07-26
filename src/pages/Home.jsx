import React from "react";
import { Hero } from "../components/Hero/Hero";

import { beer } from "../components/data/beerData";
import { SwiperController } from "../components/SwiperController/SwiperController";

export const Home = () => {
  return (
    <div>
      <Hero />
      <SwiperController beerData={beer} />
    </div>
  );
};
