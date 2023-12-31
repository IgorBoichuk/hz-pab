import React from 'react';
import style from './ArticleCard.module.scss';

const normalizeDesc = str => {
	const sliceLength = 80;
	if (str.length > sliceLength) {
		return `${str.slice(0, sliceLength)}...`;
	}
	return str;
};

export const ArticleCard = ({ item }) => {
	return (
		<div className={style.card}>
			<div className={style.imagewrapper}>
				<img loading='lazy' src={item.image} alt={item.name} className={style.img} />
			</div>
			<div className={style.contentWrapper}>
				<h3 className={style.title}>{item.name}</h3>
				<div className={style.datawrapper}>
					<div className={style.paramwrapper}>
						{item.alcohol && <span className={style.paramalcohol}>AVB: {item.alcohol}</span>}
						{item.ibu && <span className={style.paramibu}>IBU: {item.ibu}</span>}
					</div>
					{item.description && <p className={style.description}>{normalizeDesc(item.description)}</p>}
					{item.weight && <p className={style.paramaWeight}>{item.weight}</p>}
				</div>
				<span className={style.price}>Ціна: {item.price} грн</span>
			</div>
		</div>
	);
};
