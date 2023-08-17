import React from "react";
import { MainSection } from "../components/MainSection/MainSection";
import { GoogleMap } from "../components/GoogleMap/GoogleMap";

export const Contacts = () => {
  return (
    <div>
      <MainSection title={"контакти"} />
      <GoogleMap />
    </div>
  );
};
