import React from "react";
import style from "./ContactsCardsList.module.scss";
import { Container } from "../../shared/Container/Container";
import { Link } from "react-router-dom";
import sprite from "../../../assets/galary/svg/sprite.svg";

export const ContactsCardsList = () => {
  const social = (
    <div className={style.sicialWrapper}>
      <Link to="https://www.facebook.com/HzPubCraftbeer" target="_blank">
        <svg className={style.sicialItem} width="40" height="40">
          <use xlinkHref={`${sprite}#facebook`}></use>
        </svg>
      </Link>
      <Link to="https://www.instagram.com/craftbeer_pub_2020/" target="_blank">
        <svg className={style.sicialItem} width="40" height="40">
          <use xlinkHref={`${sprite}#instagram`}></use>
        </svg>
      </Link>
    </div>
  );

  const contactsInfo = [
    {
      title: "Години роботи:",
      info: "пн-пт 16:00 - 22:00, сб-нд 16:00 - 18:00",
    },
    {
      title: "Адреса: ",
      info: "вулиця Соборна, 107, Софіївська Борщагівка, Київ",
    },
    { title: "НоМЕР ТЕЛЕФОНУ", info: "+380123456789" },
    { title: "СОЦІАЛЬНІ МЕРЕЖІ", info: "" },
  ];
  return (
    <section className={style.section}>
      <Container>
        <div className={style.cardsWrapper}>
          <ul className={style.cardsList}>
            {contactsInfo.map((item) => (
              <li className={style.card}>
                <p className={style.title}>{item.title}</p>
                <p className={style.info}>{item.info || social}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
