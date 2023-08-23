import React from "react";

import { MainSection } from "../components/MainSection/MainSection";
import { MenuContent } from "../components/MenuContent/MenuContent";

export const Menu = () => {
  return (
    <div>
      <MainSection title={"меню"} />
      <MenuContent />
    </div>
  );
};
