import React from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { NotFound } from "../modules/NotFound";

const ErrorPage = () => {
  return (
    <>
      <MainSection title="404" />
      <NotFound />
    </>
  );
};
export default ErrorPage;
