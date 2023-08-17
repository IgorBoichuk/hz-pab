import React from "react";
import style from "./AboutUs.module.scss";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import beer from "./galary/beer.jpg";
import bar from "./galary/bar.jpg";
import beerTap from "./galary/bar2.jpg";

export const AboutUs = ({ title }) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <div className={style.linkwrapper}>
            <SectionTitle title={title} />
            <Link to="about-us" className={style.link}>
              <p className={style.linkText}>
                Ласкаво просимо у "ХЗ паб" – найкращий пивний паб в ЖК
                Петрівський Квартал. Тут панує справжня дружня атмосфера де ви
                зможете розслабитися та забути про повсякденність.
              </p>
              <p className={style.linkPath}>детальніше → </p>
            </Link>
            <img src={beer} alt="beer" className={style.beerImg} />
          </div>
          <div className={style.linkwrapper}>
            <img src={bar} alt="bar" className={style.barImg} />
          </div>
          <div className={style.linkwrapper}>
            <img src={beerTap} alt="beerTap" className={style.beerTapImg} />
            <div className={style.promoWrapper}>
              <div className={style.quote}></div>
              <p className={style.promoText}>
                "ХЗ паб" – це місце, де час зупиняється, а веселі зустрічі з
                друзями стають ще приємнішими
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
