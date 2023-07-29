import React, { Fragment, useContext, useRef } from "react";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { themeContext } from "./CreateResumePage";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import "../../assets/css/fonts.css";
import { jsPDF } from "jspdf";
import "../../assets/JSXFonts/SpaceGrotesk";

const baseFont = {
	Syne: "Syne",
};

function downloadDOCXS() {
	console.log("I am downloading in docxs format");
}

const ResumePreviewPage = () => {
	const resumeRef = useRef(null);
	const { largePreview, setLargePreview, themeSelection } = useContext(themeContext);
	const { color } = themeSelection.userResumeColor.selectedColor;
	const font = themeSelection.font.family.customFont;

	// <== download the pdf function ==>

	const newPDF = new jsPDF({
		orientation: "portrait",
		unit: "px",
	});

	newPDF.setFont("SpaceGrotesk", "normal");

	function downloadPDF() {
		newPDF.html(resumeRef.current, {
			callback: function (newPDF) {
				newPDF.save("lorem.pdf");
			},
		});
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
			<div mode="view-mode" name="resume-wrapper">
				<div
					name="resume-preview"
					style={{ fontFamily: `${font}` }}
					className={`whitespace-pre-wrap p-4 text-xs mx-auto flex items-center justify-center`}>
					<div
						name="resume-document"
						className={`bg-white shadow-md mx-auto rounded-[4px] w-[780px] aspect-[1/1.4141] origin-center ${
							largePreview ? "scale-[1] my-24" : "scale-[.8]"
						}`}
						style={{ fontFamily: "SpaceGrotesk" }}>
						<div className="p-6 h-full" ref={resumeRef}>
							<BasicResumeContainer />
						</div>
					</div>
				</div>
			</div>
			<div className={`fixed ${largePreview ? "opacity-0" : "opacity-100"} bottom-0 right-0 pr-6 pb-4 text-start w-max`}>
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
							<Menu.Item className="absolute right-0 bottom-full origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mb-1">
								<div className="px-1 py-1 w-max flex flex-col">
									{DownloadOptions.map(({ icon, size, title, download }, index) => (
										<button
											key={index}
											type="button"
											onClick={download}
											className="flex items-center gap-1 p-2 hover:bg-main hover:text-white rounded-sm text-slate-800">
											<Icon
												icon={icon}
												className={`${size} flex items-center duration-75 ease-linear transition pointer-events-none select-none `}
											/>
											<span className="text-xs">{title}</span>
										</button>
									))}
								</div>
							</Menu.Item>
						</Transition>
						<Menu.Button className="inline-flex w-full justify-center rounded-[3px] bg-main shadow-sm px-5 py-4 text-sm font-medium text-white hover:bg-hoverBgClr transition duration-150 ease-linear focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-2 items-end">
							<Icon icon="uiw:download" className="w-4 h-4 pointer-events-none select-none " />
						</Menu.Button>
					</Menu>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
