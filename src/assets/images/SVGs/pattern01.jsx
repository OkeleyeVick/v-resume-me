import React from "react";

const pattern01 = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
			<defs>
				<pattern id="p" width="100" height="100" patternUnits="userSpaceOnUse">
					<path
						id="a"
						dataColor="fill"
						fill="#EEB400"
						d="M0 50v50h50C22.386 100 0 77.614 0 50zM50 0c27.614 0 50 22.386 50 50V0H50zM50 0C22.386 0 0 22.386 0 50h50V0zM50 100c27.614 0 50-22.386 50-50H50v50z"></path>
				</pattern>
			</defs>
			<rect fill="#FFFFFF" width="100%" height="100%"></rect>
			<rect fill="url(#p)" width="100%" height="100%"></rect>
		</svg>
	);
};

export default pattern01;
