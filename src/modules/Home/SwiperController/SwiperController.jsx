import React from "react";
import { nanoid } from "nanoid";

import style from "./SwiperController.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { Container } from "../../shared/Container/Container";
import { ArticleCard } from "../../../modules/shared/ArticleCard/ArticleCard";

export const SwiperController = ({ data }) => {
  return (
    <section className={style.section}>
      <Container>
        <Swiper
          className={style.swiper}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={nanoid()}>
              <ArticleCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
