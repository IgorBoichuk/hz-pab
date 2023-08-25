import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { BrokenPaperSection } from "../modules/About/BrokenPaperSection/BrokenPaperSection";
import { TolkingAboutAs } from "../modules/About/TolkingAboutAs/TolkingAboutAs";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg">
      <MainSection title={"про нас"} />
      {/* <AboutUs /> */}
      <BrokenPaperSection />
      <TolkingAboutAs title={"про нас говорять"} />
    </div>
  );
};
