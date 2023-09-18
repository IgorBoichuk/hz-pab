import React, { useEffect } from "react";

import { MainSection } from "../modules/shared/MainSection/MainSection";
import { Navigate, useLocation } from "react-router-dom";
import { MenuContent } from "../modules/Menu";

const Menu = () => {
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

export default Menu;
