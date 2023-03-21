import { Icon } from "@iconify/react";
import React, { useState } from "react";

const B_Offcanvas = () => {
	const [x, sX] = useState(false);
	return (
		<div
			className={`glassmorphism transition duration-300 ease-in-out absolute inset-0 overflow-hidden ${
				x ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
			}`}>
			<div
				className={`transition shadow-custom_1 duration-300 ease-in-out md:w-full md:h-5/6 absolute bg-white bottom-0 rounded-t-3xl ${
					x ? "translate-y-full" : "translate-y-0"
				}`}>
				<div className="flex items-center justify-end py-4 px-6">
					<button
						type="button"
						className="p-2 rounded-full transition relative before:inset-0 before:bg-gray-200 before:[content: ''] before:absolute before:rounded-full before:scale-0 before:transition before:duration-200 before:ease-in-out hover:before:scale-100 before:-z-[1] isolate"
						onClick={() => sX((prev) => !prev)}>
						<Icon icon="heroicons:x-mark-20-solid" className="w-6 lg:w-7 h-6 lg:h-7" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default B_Offcanvas;
