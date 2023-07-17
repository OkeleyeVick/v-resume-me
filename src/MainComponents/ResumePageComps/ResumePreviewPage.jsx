import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import DownloadButton from "./Components/DownloadButton";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { themeContext } from "./CreateResumePage";
import jsPDF from "jspdf";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import "../../assets/css/fonts.css";

const baseFont = {
	Syne: "Syne",
};

const ResumePreviewPage = () => {
	const pdfRef = useRef(null);
	const downloadfile = new jsPDF();

	const { scale, largePreview, setLargePreview, themeSelection } = useContext(themeContext);
	const { color } = themeSelection.userResumeColor.selectedColor;
	const font = themeSelection.font.family.customFont;

	// <== download the pdf function ==>
	useEffect(() => {
		function downloadFileNow() {
			if (pdfRef.current !== null) {
				downloadfile.text(`I love you `, 5, 5);
				downloadfile.save("okeleye.pdf");
			}
		}
	}, []);

	function downloadPDF() {
		console.log("I am downloading in pdf format");
	}
	function downloadDOCXS() {
		console.log("I am downloading in docxs format");
	}

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
				<div name="resume-preview" style={{ fontFamily: `${font}` }} className={`whitespace-pre-wrap p-4 text-xs w-full h-full`}>
					<div
						className={`bg-white shadow-md mx-auto rounded-[4px] p-3 ${
							largePreview ? "w-[65%] aspect-[0.20/0.22] scale-[0.8]" : "w-[70%] aspect-[0.20/0.255]"
						}`}>
						<div ref={pdfRef}>
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
							<span className="leading-none">Download</span>
							<Icon icon="uiw:download" className="w-4 h-4" />
						</Menu.Button>
					</Menu>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;

//style {{ height: `calc(${297}px * ${scale})`, width: `calc(${240}px * ${scale})`, backgroundColor: `${color}` }}
