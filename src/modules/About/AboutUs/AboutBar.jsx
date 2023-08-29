import React from "react";
import style from "./AboutBar.module.scss";
import { Container } from "../../shared/Container/Container";

export const AboutBar = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <div className={style.barImgWrapper}>
            <div className={style.promo}>
              <h2 className={style.textTitle}>Паб в жк Петрівський квартал</h2>
              <p className={style.textDescription}>
                Ласкаво просимо у "ХЗ паб" – найкращий пивний паб в ЖК
                Петрівський Квартал. Тут панує справжня дружня атмосфера де ви
                зможете розслабитися та забути про повсякденність. Наш заклад -
                це місце, де смак і радість завжди на першому місці. З нашим
                різноманітним вибором пива, смачних страв та живою атмосферою ви
                точно відчуєте, що справжнє відпочинок - це моменти, які
                залишають яскраві спогади.
              </p>
              <div className={style.beerImgWrapper}>
                <div className={style.beerImg}></div>
                <div className={style.barImgMob}></div>
              </div>
            </div>

            <div className={style.barImg}></div>
          </div>
          <div className={style.rightPartWrapper}>
            <div className={style.beerTapImg}></div>
            <div className={style.promoWrapper}>
              <h2 className={style.textTitle}>Найсмачніше пиво</h2>
              <p className={style.textDescription}>
                Тут ви зможете відчути ту магію, коли перший ковток пива
                розпускає всі турботи, а смачні страви роблять будні особливими.
                Нехай кожна зустріч у "ХЗ паб" залишає слід у вашому серці, а
                наш заклад стане місцем, куди ви завжди захочете повертатися.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
