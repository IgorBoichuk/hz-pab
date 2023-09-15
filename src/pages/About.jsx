import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { BrokenPaperSection } from "../modules/About/BrokenPaperSection/BrokenPaperSection";
import { TolkingAboutAs } from "../modules/About/TolkingAboutAs/TolkingAboutAs";

import { AboutBar } from "../modules/About/AboutUs/AboutBar";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSection title={"про нас"} />
      <AboutBar />
      <BrokenPaperSection />
      <TolkingAboutAs title={"про нас говорять"} />
    </div>
  );
};
export default About;
