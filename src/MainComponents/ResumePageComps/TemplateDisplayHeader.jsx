import { Icon } from "@iconify/react";
import React from "react";

const TemplateDisplayHeader = () => {
	return (
		<div className="border-gray-700 border-b-[.5px] flex items-center justify-between px-3 py-3">
			<div className="flex items-center justify-between gap-2 group">
				<input
					type="text"
					placeholder="Enter file name"
					aria-label="filename"
					className=" bg-transparent border-[1.5px] transition duration-300 ease-in-out border-gray-400 focus:border-main w-64 rounded-md focus:outline focus:shadow-none min-h-[2.8rem] p-2 text-white text-sm font-normal"
				/>
				<button type="button" className=" opacity-0 pointer-event-none group-focus-within:opacity-100 group-focus-within:pointer-event-auto">
					<Icon icon="fluent:chat-warning-20-filled" className="text-main w-6 h-6" />
				</button>
			</div>
			<div className="flex items-center gap-x-4">
				<button
					type="button"
					className="flex items-center gap-2 px-5 py-3 hover:bg-button rounded-md bg-main transition ease-in-out duration-300">
					<span className="text-white text-xs font-semibold leading-4">Share</span>
					<Icon icon="carbon:share" className="text-white h-5 w-5" />
				</button>
				<button
					type="button"
					className="flex items-center gap-2 px-5 py-3 hover:bg-button rounded-md bg-main transition ease-in-out duration-300">
					<span className="text-white text-xs font-semibold leading-4">Download</span>
					<Icon icon="ph:download-simple" className="text-white h-5 w-5" />
				</button>
			</div>
		</div>
	);
};

export default TemplateDisplayHeader;
