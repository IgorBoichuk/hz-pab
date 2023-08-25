import React, { createContext, useCallback, useEffect, useState } from "react";

import { beer } from "../assets/data/beerData";
import { menu } from "../assets/data/menuData";
import { snacks } from "../assets/data/snacksData";
import { souses } from "../assets/data/sousesData";

import { useLocation, useSearchParams } from "react-router-dom";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const subMenu = searchParams.get("SubMenu");

  const [allMenuData] = useState([...beer, ...menu, ...snacks, ...souses]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const active = location.pathname.split("/");
  const activeSubMenu = active[active.length - 1];

  const uniqCat = (data) => {
    const datacategoryes = data.map((item) => item.subCategory);
    return [...new Set(datacategoryes)];
  };

  const normalizeSubMenu = (data) => {
    switch (data) {
      case "bar":
        return "Напої";

      case "kitchen":
        return "Кухня";

      case "snacks":
        return "Снеки";

      case "souses":
        return "Соуси";

      default:
        return null;
    }
  };

  const filterByCategory = useCallback(() => {
    let activeItem = normalizeSubMenu(activeSubMenu);

    const filteredArray = allMenuData.filter((item) => {
      if (subMenu) {
        return item.subCategory === subMenu;
      }
      return item.category === activeItem;
    });
    setFilteredData(filteredArray);
  }, [allMenuData, activeSubMenu, subMenu]);

  useEffect(() => {
    filterByCategory();
  }, [filterByCategory]);

  const currentMenu = (data) => {
    // let currentMenu = {};
    // if (data === "bar") {
    //   currentMenu = uniqCat(beer);
    // } else if (data === "kitchen") {
    //   currentMenu = uniqCat(menu);
    // } else if (data === "snacks") {
    //   currentMenu = uniqCat(snacks);
    // } else if (data === "souses") {
    //   currentMenu = uniqCat(souses);
    // }
    // return currentMenu;

    switch (data) {
      case "bar":
        return uniqCat(beer);

      case "kitchen":
        return uniqCat(menu);

      case "snacks":
        return uniqCat(snacks);

      case "souses":
        return uniqCat(souses);

      default:
        return null;
    }
  };

  const preview = subMenu || normalizeSubMenu(activeSubMenu);

  const handleSetSearchParams = (item) => {
    setSearchParams({ SubMenu: item });
    filterByCategory();
  };

  const contextValue = {
    currentMenu,
    activeSubMenu,
    handleSetSearchParams,
    filteredData,
    searchParams,
    preview,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
