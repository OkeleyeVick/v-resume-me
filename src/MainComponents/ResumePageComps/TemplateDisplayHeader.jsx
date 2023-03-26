import React from "react";

const TemplateDisplayHeader = () => {
	return (
		<div className="border-gray-700 border-b-[.5px]">
			<div className="flex items-center justify-between p-2">
				<input
					type="text"
					placeholder="Enter file name"
					aria-label="filename"
					className="bg-transparent border-[1.5px] transition duration-300 ease-in-out border-gray-400 focus:border-main  rounded-md focus:outline focus:shadow-none min-h-[2.8rem] p-2 text-white text-sm font-normal"
				/>
			</div>
			<div className="flex items-center gap-x-4">
				<button
					type="button"
					className="rounded-md bg-main transition ease-in-out duration-300
				hover:bg-custom_1"></button>
				<button
					type="button"
					className="rounded-md bg-main transition ease-in-out duration-300
				hover:bg-custom_1"></button>
			</div>
		</div>
	);
};

export default TemplateDisplayHeader;
