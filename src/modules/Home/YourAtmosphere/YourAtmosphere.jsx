import React from "react";
import style from "./YourAtmosphere.module.scss";
import { Container } from "../../shared/Container/Container";
import dictrict from "../../../assets/galaryAtmosphereSection/dictrict.png";
import friends from "../../../assets/galaryAtmosphereSection/friends.png";
import family from "../../../assets/galaryAtmosphereSection/family.png";
import sport from "../../../assets/galaryAtmosphereSection/sport.png";
import beer from "../../../assets/galaryAtmosphereSection/beer.png";
import kitchen from "../../../assets/galaryAtmosphereSection/kitchen.png";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";

export const YourAtmosphere = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <SectionTitle title={title} />

        <ul className={style.list}>
          <li className={style.item}>
            <img
              loading="lazy"
              src={dictrict}
              alt="dictrict"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>У самому серці ЖК</p>
            <p className={style.itemDescription}>
              Улюблене місце для дружніх зустрічей прямо біля вас
            </p>
          </li>
          <li className={style.item}>
            <img
              loading="lazy"
              src={friends}
              alt="friends"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>відпочинок та друзі</p>
            <p className={style.itemDescription}>
              Приходьте після роботи та насолоджуйтесь чудовим пивом
            </p>
          </li>
          <li className={style.item}>
            <img
              loading="lazy"
              src={family}
              alt="family"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>Для всієї родини</p>
            <p className={style.itemDescription}>
              Сімейна атмосфера, смачна їжа та дружній сервіс
            </p>
          </li>
          <li className={style.item}>
            <img
              loading="lazy"
              src={sport}
              alt="sport"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>Спорт та адреналін</p>
            <p className={style.itemDescription}>
              Великий екран, захоплюючі матчі та неймовірні емоції
            </p>
          </li>
          <li className={style.item}>
            <img
              loading="lazy"
              src={beer}
              alt="beer"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>Великий вибір Пива</p>
            <p className={style.itemDescription}>
              Спробуйте різноманітне меню найкращого крафтового пива
            </p>
          </li>
          <li className={style.item}>
            <img
              loading="lazy"
              src={kitchen}
              alt="kitchen"
              className={style.itemImg}
            />
            <p className={style.itemTitle}>Кухня для душі</p>
            <p className={style.itemDescription}>
              Бургери, фритюр, снеки та закуски - це наш гастро-вибух
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
