import React from "react";
import { MainSection } from "../components/MainSection/MainSection";
import { GoogleMap } from "../components/GoogleMap/GoogleMap";
import { ContactsCardsList } from "../components/ContactsCardsList/ContactsCardsList";

export const Contacts = () => {
  return (
    <div>
      <MainSection title={"контакти"} />
      <ContactsCardsList />
      <GoogleMap />
    </div>
  );
};
