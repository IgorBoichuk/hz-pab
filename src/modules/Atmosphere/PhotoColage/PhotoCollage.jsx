import React from "react";

import style from "./PhotoCollage.module.scss";
import { Collage } from "./DataCollage";

export const PhotoCollage = () => {
  return (
    <ul className={style.wrapper}>
      {Collage.map((item) => (
        <div className={style.imgWrapper} key={item.id}>
          <img
            className={style.img}
            src="https://assets.avtocod.ru/storage/images/articles-2022/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu-3-min.jpg"
            alt={item.name}
          />
        </div>
      ))}
    </ul>
  );
};
