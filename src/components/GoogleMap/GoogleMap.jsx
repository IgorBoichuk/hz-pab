import React from "react";
import style from "./GoogleMap.module.scss";

export const GoogleMap = () => {
  return (
    <section className={style.section}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.92813960606617!2d30.321680125800015!3d50.395914435020586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb7a926e1d33%3A0x8ddf5864acf878d1!2zWNCXIFB1Qg!5e0!3m2!1sru!2sua!4v1692263055982!5m2!1sru!2sua&theme=dark`}
        width="800"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Map"
        className={style.googleMap}
      ></iframe>
    </section>
  );
};
