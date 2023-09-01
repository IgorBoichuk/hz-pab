import React, { useEffect } from "react";

import { MainSection } from "../modules/shared/MainSection/MainSection";
import { MenuContent } from "../modules/Menu/MenuContent/MenuContent";
import { Navigate, useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (location.pathname === "/menu") {
    return <Navigate to="/menu/bar" />;
  }
  return (
    <div>
      <MainSection title={"меню"} />
      <MenuContent />
    </div>
  );
};
