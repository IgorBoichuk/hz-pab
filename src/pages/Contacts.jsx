import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { GoogleMap } from "../modules/Contacts/GoogleMap/GoogleMap";
import { ContactsCardsList } from "../modules/Contacts/ContactsCardsList/ContactsCardsList";

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg">
      <MainSection title={"контакти"} />
      <ContactsCardsList />
      <GoogleMap />
    </div>
  );
};
