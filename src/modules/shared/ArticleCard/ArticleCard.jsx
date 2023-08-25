import React from "react";
import style from "./ArticleCard.module.scss";

export const ArticleCard = ({ item }) => {
  return (
    <li className={style.card}>
      <div className={style.imagewrapper}>
        <img src={item.image} alt={item.name} className={style.img} />
      </div>
      <div>
        <h3 className={style.title}>{item.name}</h3>
        <div className={style.datawrapper}>
          <div className={style.paramwrapper}>
            {item.alcohol && (
              <span className={style.paramalcohol}>AVB: {item.alcohol}</span>
            )}
            {item.ibu && (
              <span className={style.paramibu}>IBU: {item.ibu}</span>
            )}
          </div>
          {item.description && (
            <p className={style.description}>{item.description}</p>
          )}
        </div>
        <span className={style.price}>
          Ціна: {item.price} грн / {item.weight}
        </span>
      </div>
    </li>
  );
};
