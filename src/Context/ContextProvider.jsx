import React, { createContext, useState } from "react";

import { beer } from "../assets/data/beerData";
import { menu } from "../assets/data/menuData";
import { snacks } from "../assets/data/snacksData";
import { souses } from "../assets/data/sousesData";

import { useLocation, useSearchParams } from "react-router-dom";

export const ReposContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState({ beer });

  const location = useLocation();
  const active = location.pathname.split("/");
  const activeSubMenu = active[active.length - 1];

  const dataForMapingMenu = () => {
    let mapingMenu;

    switch (articles) {
      case "bar":
        return beer;
      case "snacks":
        return snacks;
      case "kitchen":
        return menu;
      case "souses":
        return souses;

      default:
        break;
    }
    console.log(mapingMenu);
    return mapingMenu;
  };

  const uniqCat = (data) => {
    const datacategoryes = data.map((item) => item.category);

    return [...new Set(datacategoryes)];
  };

  const currentMenu = (data) => {
    let currentMenu = {};
    if (data === "bar") {
      currentMenu = uniqCat(beer);
    } else if (data === "kitchen") {
      currentMenu = uniqCat(menu);
    } else if (data === "snacks") {
      currentMenu = uniqCat(snacks);
    } else if (data === "souses") {
      currentMenu = uniqCat(souses);
    }
    dataForMapingMenu();
    setArticles(data);
    return currentMenu;
  };
  const handleSetSearchParams = (item) => {
    setSearchParams({ SubMenu: item });
    // console.log(item);
  };

  const contextValue = {
    currentMenu,
    activeSubMenu,
    handleSetSearchParams,
    articles,
    dataForMapingMenu,
  };

  return (
    <ReposContext.Provider value={contextValue}>
      {children}
    </ReposContext.Provider>
  );
};
