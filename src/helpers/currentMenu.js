import { beer } from "../assets/data/beerData";
import { menu } from "../assets/data/menuData";
import { snacks } from "../assets/data/snacksData";

export const uniqCat = data => {
	const datacategoryes = data.map(item => item.subCategory);
	return [...new Set(datacategoryes)];
};

export const currentMenu = data => {
	switch (data) {
		case "bar":
			return uniqCat(beer);

		case "kitchen":
			return uniqCat(menu);

		case "snacks":
			return uniqCat(snacks);

		case "souses":
			return null;

		default:
			return null;
	}
};
