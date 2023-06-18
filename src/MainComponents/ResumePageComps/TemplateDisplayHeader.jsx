import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Input from "../GeneralComponents/Input";

const TemplateDisplayHeader = () => {
	const [dropdownActive, setDropdownIsActive] = useState(false);
	const [formatType, setFormatType] = useState("pdf");
	const formats = [{ format: "pdf" }, { format: "docx" }];
	const dropdown = document.querySelector(".format__dropdown");

	function shareFile() {
		console.log("You are trying to share the file");
	}

	function DownloadFile() {
		console.log("your file is being downloaded...");
	}

	return (
		<React.Fragment>
			<div className="lg:hidden flex items-center justify-end p-2">
				<button
					type="button"
					name="sidebar__button"
					className={`transition duration-500 rounded-full p-[.35rem] hover:bg-hoverBgClr hover:bg-opacity-80 outline-none ${
						isActiveMobileMenu ? "bg-hoverBgClr" : "bg-transparent"
					}`}
					onClick={() => setMobileMenu((current) => !current)}>
					<Icon icon="ion:menu-outline" className={`text-gray-300 w-8 h-8 flex`} />
				</button>
			</div>
			<div className="border-gray-700 border-b-[.5px] flex justify-between flex-col sm:flex-row gap-y-3 px-3 py-3">
				<form action="">
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1 group/inputParent flex-grow">
							<Input
								type="text"
								placeholder="Add a filename"
								ariaLabel="filename"
								className="bg-custom_2"
								aria-label="filename"
								onChange={(e) => console.log(e.target.value)}
							/>
							<button
								type="button"
								name="get-hint"
								onClick={function () {
									console.log("Well done");
								}}
								className="outline-none opacity-0 pointer-event-none group-focus-within/inputParent:opacity-100 group-focus-within/inputParent:pointer-event-auto">
								<Icon
									icon="fluent:chat-warning-20-filled"
									className="text-main text-opacity-80 w-6 h-6 animate-bounce hover:text-opacity-100"
								/>
							</button>
						</div>
						<div className="relative">
							<button
								type="button"
								name="select-format-trigger"
								className="cursor-pointer w-full border-main border-[1.5px] rounded-md p-2 flex items-center text-gray-200 text-sm gap-2 px-3 min-h-[2.9rem] leading-4"
								onClick={() => setDropdownIsActive((prev) => !prev)}>
								<span>{formatType}</span>
								<Icon icon="ion:chevron-down-outline" />
							</button>
							<div
								className={`absolute border mt-1 top-full right-0 border-main rounded-md flex flex-col p-1 z-[2] bg-gray-900 w-28 px-[.2rem] ${
									dropdownActive ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-2 opacity-0 pointer-events-none"
								}`}>
								<input type="hidden" name="format" value={formatType} />
								{formats.map(({ format }, formatIndex) => (
									<React.Fragment key={formatIndex}>
										<button
											type="button"
											name="each-format"
											className="text-slate-200 outline-none text-start p-1 px-[.6rem] hover:bg-slate-700 rounded-md"
											onClick={() => {
												setFormatType(format);
												setDropdownIsActive(false);
											}}>
											<span className="text-xs leading-none">{format}</span>
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
						name="share"
						className="flex items-center justify-center gap-2 px-5 py-3 hover:bg-button flex-grow rounded-md bg-main transition ease-in-out duration-30"
						onClick={() => shareFile()}>
						<span className="text-white text-xs font-semibold leading-4 flex items-center">Share</span>
						<Icon icon="carbon:share" className="text-white h-5 w-5" />
					</button>
					<button
						type="button"
						name="download-file"
						className="flex items-center justify-center gap-2 px-5 py-3 hover:bg-button flex-grow rounded-md bg-main transition ease-in-out duration-300"
						onClick={() => DownloadFile()}>
						<span className="text-white text-xs font-semibold leading-4 flex items-center">Download</span>
						<Icon icon="ph:download-simple" className="text-white h-5 w-5" />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TemplateDisplayHeader;
