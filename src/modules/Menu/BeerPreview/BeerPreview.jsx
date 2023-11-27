import React, { useContext } from 'react';
import style from './BeerPreview.module.scss';
import { MyContext } from '../../../Context/ContextProvider';
import { ArticleCard } from '../../shared/ArticleCard/ArticleCard';

export const BeerPreview = () => {
	const { preview, filteredData } = useContext(MyContext);
	return (
		<section className={style.section}>
			<h1 className={style.title}>{preview}</h1>
			<div className={style.beeritems}>
				{filteredData.map(item => (
					<ArticleCard item={item} key={item.id} />
				))}
			</div>
		</section>
	);
};
