import React from "react";
import { nanoid } from "nanoid";

import style from "./SwiperController.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { Container } from "../Container/Container";
import { BeerCard } from "../BeerCard/BeerCard";

export const SwiperController = ({ beerData }) => {
  return (
    <section className={style.section}>
      <Container>
        <Swiper
          className={style.swiper}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
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
          {beerData.map((beer) => (
            <SwiperSlide key={nanoid()}>
              <BeerCard beer={beer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
