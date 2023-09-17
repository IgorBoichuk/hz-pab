import React, { createContext, useCallback, useEffect, useState } from "react";

import { beer } from "../assets/data/beerData";
import { menu } from "../assets/data/menuData";
import { snacks } from "../assets/data/snacksData";
import { souses } from "../assets/data/sousesData";

import { useLocation, useSearchParams } from "react-router-dom";
// import { useToggleModal } from "../helpers/hooks/useToggleModal";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const { isModal, open, close, toggle } = useToggleModal();

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

  const submenu = uniqCat(allMenuData);

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
    switch (data) {
      case "bar":
        return uniqCat(beer);

      case "kitchen":
        return uniqCat(menu);

      case "snacks":
        return uniqCat(snacks);

      case "souses":
        // return uniqCat(souses);
        return null;

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
    // isModal,
    // open,
    // close,
    // toggle,
    submenu,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
