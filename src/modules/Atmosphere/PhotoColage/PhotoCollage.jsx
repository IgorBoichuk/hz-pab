import React from "react";
import { Collage } from "./DataCollage";

export const PhotoCollage = () => {
  return (
    <ul>
      {Collage.map((item) => (
        <li key={item.id}>
          <img src={item.photo} alt={item.name} />
        </li>
      ))}
    </ul>
  );
};
