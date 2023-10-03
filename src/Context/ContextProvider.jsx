import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { allMenuData, normalizeSubMenu, uniqCat } from "../helpers";
export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subMenu = searchParams.get("SubMenu");

  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const active = location.pathname.split("/");
  const activeSubMenu = active[active.length - 1];

  const submenu = uniqCat(allMenuData);

  const filterByCategory = useCallback(() => {
    let activeItem = normalizeSubMenu(activeSubMenu);

    const filteredArray = allMenuData.filter((item) => {
      if (subMenu) {
        return item.subCategory === subMenu;
      }
      return item.category === activeItem;
    });
    setFilteredData(filteredArray);
  }, [activeSubMenu, subMenu]);

  useEffect(() => {
    filterByCategory();
  }, [filterByCategory]);

  const preview = subMenu || normalizeSubMenu(activeSubMenu);

  const handleSetSearchParams = (item) => {
    setSearchParams({ SubMenu: item });
    filterByCategory();
  };

  const contextValue = {
    activeSubMenu,
    handleSetSearchParams,
    filteredData,
    searchParams,
    preview,
    submenu,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
