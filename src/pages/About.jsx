import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { AboutBar, BrokenPaperSection, TolkingAboutAs } from "../modules/About";

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
