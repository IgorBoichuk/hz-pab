import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
