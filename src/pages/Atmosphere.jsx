import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";

export const Atmosphere = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSection title={"атмосфера"} />
    </div>
  );
};
