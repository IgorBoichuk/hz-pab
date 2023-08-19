import React from "react";
import { MainSection } from "../components/MainSection/MainSection";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { BrokenPaperSection } from "../components/BrokenPaperSection/BrokenPaperSection";
import { TolkingAboutAs } from "../components/TolkingAboutAs/TolkingAboutAs";

export const About = () => {
  return (
    <div>
      <MainSection title={"про нас"} />
      <AboutUs />
      <BrokenPaperSection />
      <TolkingAboutAs title={"про нас говорять"} />
    </div>
  );
};
