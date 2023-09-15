import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { PhotoCollage } from "../modules/Atmosphere/PhotoCollage";

const Atmosphere = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSection title={"атмосфера"} />
      <PhotoCollage />
    </div>
  );
};

export default Atmosphere;
