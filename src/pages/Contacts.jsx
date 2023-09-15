import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { GoogleMap } from "../modules/Contacts/GoogleMap/GoogleMap";
import { ContactsCardsList } from "../modules/Contacts/ContactsCardsList/ContactsCardsList";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSection title={"контакти"} />
      <ContactsCardsList />
      <GoogleMap />
    </div>
  );
};
export default Contacts;
