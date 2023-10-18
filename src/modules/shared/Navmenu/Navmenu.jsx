import { NavLink } from "react-router-dom";
import style from "./Navmenu.module.scss";

export const Navmenu = ({ flex, togap, footer, close }) => {
	const navData = [
		{
			navItem: "головна",
			link: "/",
		},
		{
			navItem: "про нас",
			link: "about-us",
		},
		{
			navItem: "меню",
			link: "/menu/bar",
		},
		{
			navItem: "атмосфера",
			link: "/atmosphere",
		},
		{
			navItem: "контакти",
			link: "/contacts",
		},
	];
	return (
		<div
			style={{
				flexDirection: flex,
				gap: togap,
			}}
			className={footer ? style.navWrapperFooter : style.navWrapper}
		>
			{navData.map(item => (
				<NavLink
					to={item.link}
					key={item.link}
					className={footer ? style.navlinkFooter : style.navlink}
					onClick={close}
				>
					{item.navItem}
				</NavLink>
			))}
		</div>
	);
};
