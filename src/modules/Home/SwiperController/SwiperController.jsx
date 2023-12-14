import React from "react";
import style from "./SwiperController.module.scss";
import { ArticleCard } from "../../../modules/shared/ArticleCard/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper from "swiper";

export const SwiperController = ({ data }) => {
	return (
		<section className={style.section}>
			{/* <Container> */}
			<Swiper
				slidesPerView={1}
				spaceBetween={16}
				// autoplay={{
				// 	delay: 2000,
				// 	disableOnInteraction: false,
				// }}
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				loop={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{data.map(item => (
					<SwiperSlide key={item.id}>
						<ArticleCard item={item} />
					</SwiperSlide>
				))}
			</Swiper>
			{/* </Container> */}
		</section>
	);
};
