import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import style from "./Modal.module.scss";
import { Navmenu } from "../Navmenu/Navmenu";
import { fromRigth } from "../../../animations/modalAnimation";

const modalRoot = document.querySelector("#modal");

export const Modal = ({ close }) => {
	const handleOnDropClose = event => {
		event.target === event.currentTarget && close();
	};

	const handleKeyDown = useCallback(
		event => {
			event.key === "Escape" && close();
		},
		[close]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return ReactDOM.createPortal(
		<div className={style.modalwrapper} onClick={handleOnDropClose}>
			<motion.nav variants={fromRigth} initial="hidden" exit="exit" whileInView="visible" className={style.navmenu}>
				<Navmenu close={close} flex="column" togap="24px" />
			</motion.nav>
		</div>,
		modalRoot
	);
};
