import React from "react";
import { createPortal } from "react-dom";
import "../css/animation.css";

const Loader = () => {
	return (
		<>
			{createPortal(
				<div className="fixed inset-0 bg-white flex items-center justify-center">
					<div className="bg-green-900 rounded-full w-16 h-16 loader-pointer relative"></div>
				</div>,
				document.body
			)}
		</>
	);
};

export default Loader;
