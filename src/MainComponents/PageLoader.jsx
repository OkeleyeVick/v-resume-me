import React from "react";
import { createPortal } from "react-dom";

const PageLoader = () => {
	return (
		<>
			{createPortal(
				<div className="fixed inset-0 grid place-content-center bg-white">
					<div className="h-20 w-20 rounded-full animate-spin border-8 border-r-main"></div>
				</div>,
				document.body
			)}
		</>
	);
};

export default PageLoader;
