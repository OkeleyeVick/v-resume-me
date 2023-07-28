import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { themeContext } from "./CreateResumePage";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import "../../assets/css/fonts.css";
import { jsPDF } from "jspdf";

const baseFont = {
	Syne: "Syne",
};

const newPDF = new jsPDF({
	orientation: "portrait",
	unit: "px",
});

newPDF.setFont(`${baseFont.Syne}`, "normal");
newPDF.text("God is good", 10, 10);

const div = document.querySelector("[mode='view-mode']");

function downloadPDF() {
	console.log("I am downloading in pdf format");
	newPDF.save("victor.pdf");
}
function downloadDOCXS() {
	console.log("I am downloading in docxs format");
}

const ResumePreviewPage = () => {
	const { largePreview, setLargePreview, themeSelection } = useContext(themeContext);
	const { color } = themeSelection.userResumeColor.selectedColor;
	const font = themeSelection.font.family.customFont;

	// <== download the pdf function ==>

	const DownloadOptions = [
		{
			title: "Download in PDF",
			download: downloadPDF,
			icon: "ph:file-pdf-duotone",
			size: "w-5 h-5",
		},
		{
			title: "Download in DOCX",
			download: downloadDOCXS,
			icon: "bi:filetype-docx",
			size: "w-5 h-4",
		},
	];
	return (
		<React.Fragment>
			<div mode="view-mode" name="resume-wrapper" className="absolute inset-0 h-full w-full">
				<div
					name="resume-preview"
					style={{ fontFamily: `${font}` }}
					className={`whitespace-pre-wrap p-4 text-xs w-full h-full flex items-center justify-center flex-col`}>
					<div
						className={`bg-white shadow-md mx-auto rounded-[4px] flex-grow origin-[15%_0] ${
							largePreview ? "max-w-[794px] h-[1202px] w-full " : "w-[794px] h-[685.776px] scale-[0.57529]"
						}`}>
						<div className={`p-8 ${largePreview ? "h-full" : "w-[798px] "}`}>
							<BasicResumeContainer />
						</div>
					</div>
				</div>
			</div>
			<div className={`absolute ${largePreview ? "opacity-0" : "opacity-100"} bottom-0 pb-4 text-start w-full`}>
				<div className="text-start" style={{ fontFamily: baseFont.Syne }}>
					<Menu as="div" className="relative inline-block">
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95">
							<Menu.Item className="absolute left-0 bottom-full origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mb-1">
								<div className="px-1 py-1 w-max flex flex-col">
									{DownloadOptions.map(({ icon, size, title, download }, index) => (
										<button
											key={index}
											type="button"
											onClick={download}
											className="flex items-center gap-1 p-2 hover:bg-main hover:text-white rounded-sm text-slate-800">
											<Icon icon={icon} className={`${size} flex items-center duration-75 ease-linear transition `} />
											<span className="text-xs">{title}</span>
										</button>
									))}
								</div>
							</Menu.Item>
						</Transition>
						<Menu.Button className="inline-flex w-full justify-center rounded-[3px] bg-main shadow-sm px-5 py-4 text-sm font-medium text-white hover:bg-hoverBgClr transition duration-150 ease-linear focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-2 items-end">
							<Icon icon="uiw:download" className="w-4 h-4" />
						</Menu.Button>
					</Menu>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
