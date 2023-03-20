import { Icon } from "@iconify/react";
import React from "react";

const R_Offcanvas = () => {
	return (
		<div className="glassmorphism absolute inset-0">
			<div className="transition shadow-custom_1 duration-300 w-3/4 md:w-2/5 absolute bg-white bottom-0 top-0 right-0">
				<div className="flex items-center justify-start p-2">
					<button
						type="button"
						className="p-2 rounded-full transition relative before:inset-0 before:bg-gray-200 before:[content: ''] before:absolute before:rounded-full before:scale-0 before:transition before:duration-200 before:ease-in-out hover:before:scale-100 before:-z-[1] isolate">
						<Icon icon="heroicons:x-mark-20-solid" className="lg:w-7 lg:h-7" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default R_Offcanvas;
