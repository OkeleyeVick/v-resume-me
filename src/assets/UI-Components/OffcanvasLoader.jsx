import React from "react";

const OffcanvasLoader = () => {
	return (
		<div className="inset-0 absolute h-full w-full flex items-center justify-center">
			<div className="animate-spin border border-main border-r-0 h-16 w-16 rounded-full"></div>
		</div>
	);
};

export default OffcanvasLoader;
