import React from "react";
import { Header } from "../../modules/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../modules/Footer/Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
