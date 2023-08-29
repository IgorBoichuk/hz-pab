import { useState } from "react";

export const useToggleModal = () => {
  const [isModal, setIsModal] = useState(false);
  const open = () => {
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setIsModal(false);
    document.body.style.overflow = "auto";
  };
  const toggle = () => {
    setIsModal((isModal) => !isModal);
    document.body.style.overflow = !isModal ? "hidden" : "auto";
  };
  return { isModal, open, close, toggle };
};
