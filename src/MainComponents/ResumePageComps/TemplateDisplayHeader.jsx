import { Icon } from "@iconify/react";
import React from "react";
import Input from "../GeneralComponents/Input";

const TemplateDisplayHeader = () => {
	return (
		<div className="border-gray-700 border-b-[.5px] flex items-center justify-between px-3 py-3">
			<div className="flex items-center justify-between gap-2 group/inputParent">
				<Input type="text" placeholder="Add a filename" ariaLabel="filename" className="bg-custom_2" aria-label="filename" />
				<button
					type="button"
					onClick={function () {
						console.log(this);
					}}
					className="outline-none opacity-0 pointer-event-none group-focus-within/inputParent:opacity-100 group-focus-within/inputParent:pointer-event-auto">
					<Icon icon="fluent:chat-warning-20-filled" className="text-main w-6 h-6 animate-bounce" />
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
