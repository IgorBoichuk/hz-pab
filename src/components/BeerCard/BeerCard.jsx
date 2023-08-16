import React from "react";
import style from "./BeerCard.module.scss";

export const BeerCard = ({ beer }) => {
  return (
    <div className={style.card}>
      <div className={style.imagewrapper}>
        <img src={beer.image} alt="{beer.name}" className={style.img} />
      </div>

      <h3 className={style.beername}>{beer.name}</h3>
      <div className={style.datawrapper}>
        <div className={style.paramwrapper}>
          <span className={style.paramalcohol}>AVB: {beer.alcohol}</span>
          <span className={style.paramibu}>IBU: {beer.ibu}</span>
        </div>
        <p className={style.description}>Дескріпшн: {beer.description}</p>
      </div>
      <span className={style.price}>Ціна: {beer.price} грн/за 0.5л</span>
    </div>
  );
};
