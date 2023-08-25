import React from "react";
import style from "./CircleWithRunningText.module.scss";

const CircleWithRunningText = () => {
  const radius = 120;
  const centerX = radius + 15;
  const centerY = radius + 15;
  const chars = "переглянути меню - переглянути меню -";
  const charCount = chars.length;

  const getCharPosition = (index) => {
    const angle = (index / charCount) * 360;
    const radians = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(radians);
    const y = centerY + radius * Math.sin(radians);
    return { x, y, rotation: angle };
  };

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle cx={centerX} cy={centerY} r={radius} fill="transparent" />
      {chars.split("").map((char, index) => {
        const { x, y, rotation } = getCharPosition(index);
        return (
          <text
            key={index}
            x={x}
            y={y}
            fontSize="18"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${rotation + 90} ${x} ${y})`}
            className={style.runningText}
          >
            {char}
          </text>
        );
      })}
    </svg>
  );
};

export default CircleWithRunningText;
