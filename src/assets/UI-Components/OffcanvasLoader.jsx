import React from "react";

const OffcanvasLoader = () => {
	return (
		<div className="inset-0 absolute h-full w-full flex items-center justify-center bg-main">
			<div className="loader-pointer bg-white h-16 w-16 rounded-full border-4 border-white"></div>
		</div>
	);
};

export default OffcanvasLoader;
