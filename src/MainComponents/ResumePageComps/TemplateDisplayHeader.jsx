import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Input from "../GeneralComponents/Input";

const TemplateDisplayHeader = () => {
	const formats = [{ format: ".pdf" }, { format: ".docx" }];

	const [dropdownActive, setDropdownIsActive] = useState(false);

	return (
		<div className="border-gray-700 border-b-[.5px] flex items-center justify-between px-3 py-3">
			<form action="">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 group/inputParent">
						<Input type="text" placeholder="Add a filename" ariaLabel="filename" className="bg-custom_2" aria-label="filename" />
						<button
							type="button"
							onClick={function () {
								console.log("Well done");
							}}
							className="outline-none opacity-0 pointer-event-none group-focus-within/inputParent:opacity-100 group-focus-within/inputParent:pointer-event-auto">
							<Icon icon="fluent:chat-warning-20-filled" className="text-main w-6 h-6 animate-bounce" />
						</button>
					</div>
					{/* button to select file format */}
					<div className="relative">
						<button
							type="button"
							className="cursor-pointer border-main border-[1.5px] rounded-md p-2 flex items-center text-gray-200 text-sm gap-2 px-3"
							onClick={() => setDropdownIsActive((prev) => !prev)}>
							<span>.pdf</span>
							<Icon icon="ion:chevron-down-outline" />
						</button>
						<div
							className={`absolute border mt-1 top-full border-main rounded-md flex flex-col p-1 z-[2] bg-gray-900 w-28 px-[.2rem] ${
								dropdownActive ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-2 opacity-0 pointer-events-none"
							}`}>
							<input type="hidden" name="" />
							{formats.map(({ format }, formatIndex) => (
								<React.Fragment key={formatIndex}>
									<button
										type="button"
										className="text-slate-200 outline-none text-start p-1 px-[.6rem] hover:bg-slate-700 rounded-md"
										onClick={() => {
											setDropdownIsActive(false);
										}}>
										<span className="text-xs">{format}</span>
									</button>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</form>
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
