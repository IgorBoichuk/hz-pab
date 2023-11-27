import React from 'react';

import style from './footer.module.scss';
import { Container } from '../shared/Container/Container';
import { Link } from 'react-router-dom';
import { Navmenu } from '../shared/Navmenu/Navmenu';
import Logo from '../../assets/galary/logo.png';
import sprite from '../../assets/galary/svg/sprite.svg';

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={style.footer}>
			<Container>
				<div className={style.footerWrapper}>
					<Link to='/' className={style.logolink}>
						<img loading='lazy' src={Logo} alt='Logo' className={style.logo} />
					</Link>
					<nav className={style.navmenu}>
						<Navmenu footer flex='column' togap='24px' />
					</nav>
					<div className={style.timetAdresWrapper}>
						<div className={style.timetWrapper}>
							<p className={style.contactTitle}>Години роботи:</p>
							<p className={style.contact}>пн-пт 16:00 - 23:00 сб-нд 15:00 - 23:00</p>
						</div>
						<div className={style.adressWrapper}>
							<p className={style.contactTitle}>Адреса:</p>
							<p className={style.contact}>вулиця Соборна, 107, Софіївська Борщагівка, Київ</p>
						</div>
					</div>
					<div>
						<div className={style.socialWrapper}>
							<Link to='https://www.facebook.com/HzPubCraftbeer' target='_blank'>
								<svg className={style.socialItem} width='40' height='40'>
									<use xlinkHref={`${sprite}#facebook`}></use>
								</svg>
							</Link>
							<Link to='https://www.instagram.com/craftbeer_pub_2020/' target='_blank'>
								<svg className={style.socialItem} width='40' height='40'>
									<use xlinkHref={`${sprite}#instagram`}></use>
								</svg>
							</Link>
						</div>
						<Link to='tel:+380662408540' className={style.navlink}>
							+380662408540
						</Link>
					</div>
				</div>
				<div className={style.rightsWrapper}>
					<p className={style.rights}>Copyright © {year}. All rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};
