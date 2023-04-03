import React from "react";

const OffcanvasLoader = () => {
	return (
		<div className="inset-0 absolute h-full w-full flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-[2px] transition-all duration-500">
			<div className="loader-pointer bg-main h-16 w-16 rounded-full border-4 border-main"></div>
		</div>
	);
};

export default OffcanvasLoader;
