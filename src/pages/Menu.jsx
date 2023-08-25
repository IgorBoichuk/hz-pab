import React, { useEffect } from "react";

import { MainSection } from "../modules/shared/MainSection/MainSection";
import { MenuContent } from "../modules/Menu/MenuContent/MenuContent";

export const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSection title={"меню"} />
      <MenuContent />
    </div>
  );
};
