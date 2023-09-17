export const normalizeSubMenu = (data) => {
  switch (data) {
    case "bar":
      return "Напої";

    case "kitchen":
      return "Кухня";

    case "snacks":
      return "Снеки";

    case "souses":
      return "Соуси";

    default:
      return null;
  }
};
