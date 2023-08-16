import React from "react";
import style from "./YourAtmosphere.module.scss";
import { Container } from "../Container/Container";
import dictrict from "./galaryAtmosphere/dictrict.png";
import friends from "./galaryAtmosphere/friends.png";
import family from "./galaryAtmosphere/family.png";
import sport from "./galaryAtmosphere/sport.png";
import beer from "./galaryAtmosphere/beer.png";
import kitchen from "./galaryAtmosphere/kitchen.png";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const YourAtmosphere = ({ title }) => {
  return (
    <div>
      <section className={style.section}>
        <Container>
          {/* <div className={style.sectionTitle}>
            <p className={style.textOutline}>{title}</p>
            <h3 className={style.title}>{title}</h3>
          </div> */}

          <SectionTitle title={title} />
          <div className={style.content}>
            <ul className={style.list}>
              <li className={style.item}>
                <img src={dictrict} alt="dictrict" className={style.itemImg} />
                <p className={style.itemTitle}>У самому серці ЖК</p>
                <p className={style.itemDescription}>
                  Улюблене місце для дружніх зустрічей прямо біля вас
                </p>
              </li>
              <li className={style.item}>
                <img src={friends} alt="friends" className={style.itemImg} />
                <p className={style.itemTitle}>відпочинок та друзі</p>
                <p className={style.itemDescription}>
                  Приходьте після роботи та насолоджуйтесь чудовим пивом
                </p>
              </li>
              <li className={style.item}>
                <img src={family} alt="family" className={style.itemImg} />
                <p className={style.itemTitle}>Для всієї родини</p>
                <p className={style.itemDescription}>
                  Сімейна атмосфера, смачна їжа та дружній сервіс
                </p>
              </li>
              <li className={style.item}>
                <img src={sport} alt="sport" className={style.itemImg} />
                <p className={style.itemTitle}>Спорт та адреналін</p>
                <p className={style.itemDescription}>
                  Великий екран, захоплюючі матчі та неймовірні емоції
                </p>
              </li>
              <li className={style.item}>
                <img src={beer} alt="beer" className={style.itemImg} />
                <p className={style.itemTitle}>Великий вибір Пива</p>
                <p className={style.itemDescription}>
                  Спробуйте різноманітне меню найкращого крафтового пива
                </p>
              </li>
              <li className={style.item}>
                <img src={kitchen} alt="kitchen" className={style.itemImg} />
                <p className={style.itemTitle}>Кухня для душі</p>
                <p className={style.itemDescription}>
                  Бургери, фритюр, снеки та закуски - це наш гастро-вибух
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
};
