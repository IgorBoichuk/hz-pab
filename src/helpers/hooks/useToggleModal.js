import { useState } from "react";

export const useToggleModal = () => {
  const [isModal, setIsModal] = useState(false);
  const open = () => setIsModal(true);
  const close = () => setIsModal(false);
  const toggle = () => setIsModal((isModal) => !isModal);
  return { isModal, open, close, toggle };
};
