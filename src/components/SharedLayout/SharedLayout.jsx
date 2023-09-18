import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../modules/Footer";
import { Header } from "../../modules/Header";

export const SharedLayout = () => {
  return (
    <div className="bg">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
