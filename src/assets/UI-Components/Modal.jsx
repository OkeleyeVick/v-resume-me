import React from "react";
import { createPortal } from "react-dom";
import "../css/animation.css";

const Modal = ({ children }) => {
	return (
		<>
			<div className="inset-0 fixed z-50 glassmorphism w-full h-full grid grid-cols-4 place-content-center p-4">
				<div className="col-span-full md:col-start-2 md:col-end-4">{children}</div>
			</div>
		</>
	);
};

export default Modal;
