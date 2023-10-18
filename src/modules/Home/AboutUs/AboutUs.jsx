import React from "react";
import style from "./AboutUs.module.scss";
import { Container } from "../../shared/Container/Container";
import { Link } from "react-router-dom";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import sprite from "../../../assets/galary/svg/sprite.svg";

export const AboutUs = ({ title }) => {
	return (
		<section className={style.section}>
			<Container>
				<div className={style.sectionWrapper}>
					<div className={style.barImgWrapper}>
						<div className={style.linkwrapper}>
							<SectionTitle title={title} />
							<Link to="about-us" className={style.link}>
								<p className={style.linkText}>
									Ласкаво просимо у "ХЗ паб" – найкращий пивний паб в ЖК Петрівський Квартал. Тут панує справжня дружня
									атмосфера де ви зможете розслабитися та забути про повсякденність.
								</p>
								<p className={style.linkPath}>детальніше → </p>
							</Link>
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
							<div className={style.quoteWrapper}>
								<svg className={style.quote} width="40" height="40">
									<use xlinkHref={`${sprite}#quote`}></use>
								</svg>
							</div>
							<p className={style.promoText}>
								"ХЗ паб" – це місце, де час зупиняється, а веселі зустрічі з друзями стають ще приємнішими
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
