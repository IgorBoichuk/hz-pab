import React, { createContext, useCallback, useEffect, useState } from "react";

import { beer } from "../assets/data/beerData";
import { menu } from "../assets/data/menuData";
import { snacks } from "../assets/data/snacksData";
import { souses } from "../assets/data/sousesData";

import { useLocation, useSearchParams } from "react-router-dom";

export const ReposContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allMenuData, setAllMenuData] = useState([
    ...beer,
    ...menu,
    ...snacks,
    ...souses,
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const active = location.pathname.split("/");
  const activeSubMenu = active[active.length - 1];

  const uniqCat = (data) => {
    const datacategoryes = data.map((item) => item.subCategory);
    return [...new Set(datacategoryes)];
  };

  const filterByCategory = useCallback(() => {
    let activeItem = "bar";

    switch (activeSubMenu) {
      case "bar":
        activeItem = "Напої";
        break;

      case "kitchen":
        activeItem = "Кухня";
        break;

      case "snacks":
        activeItem = "Снеки";
        break;

      case "souses":
        activeItem = "Соуси";
        break;

      default:
        break;
    }
    console.log(activeItem);

    const filteredArray = allMenuData.filter(
      (item) => item.category === activeItem
    );

    setFilteredData(filteredArray);
  }, [allMenuData, activeSubMenu]);
  useEffect(() => {
    filterByCategory();
  }, [filterByCategory]);

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
    console.log(currentMenu);
    return currentMenu;
  };
  const handleSetSearchParams = (item) => {
    setSearchParams({ SubMenu: item });
    filterByCategory();
  };
  console.log(activeSubMenu);

  const contextValue = {
    currentMenu,
    activeSubMenu,
    handleSetSearchParams,
    filteredData,
    searchParams,
  };

  return (
    <ReposContext.Provider value={contextValue}>
      {children}
    </ReposContext.Provider>
  );
};
