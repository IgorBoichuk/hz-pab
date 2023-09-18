import React, { useEffect } from "react";
import { MainSection } from "../modules/shared/MainSection/MainSection";
import { ContactsCardsList, GoogleMap } from "../modules/Contacts";

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
