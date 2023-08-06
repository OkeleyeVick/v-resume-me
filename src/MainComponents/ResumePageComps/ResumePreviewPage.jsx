import React, { Fragment, useContext, useRef } from "react";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { GeneralContext, themeContext } from "./CreateResumePage";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import "../../assets/css/fonts.css";
import Swiper from "./Components/Swiper";
import { motion } from "framer-motion";
import { memo } from "react";
import Modal from "../GeneralComponents/Modal.jsx";
import InputWithLabel from "../FormComponent/InputComponent";

const apiKey = import.meta.env.VITE_CONVERT_API_KEY;

//TODOS: CONVERT IMAGE TAG TO FILE TYPE AND TRY TO UPLOAD IT ON CONVERTAPI

const ResumePreviewPage = () => {
	const resumeRef = useRef(null);
	const { isModalVisible, setIsModalVisible } = useContext(GeneralContext);
	const { largePreview, themeSelection } = useContext(themeContext); //theme contexts
	const { isAllButtonVisible } = useContext(GeneralContext); //state of all buttons
	const { color } = themeSelection.userResumeColor.selectedColor;
	const font = themeSelection.font.family.customFont;

	function downloadDOCX() {
		console.log("The docx is working");
	}
	function downloadPDF() {
		setIsModalVisible(true);
	}

	function handleDownloadResume() {}

	const DownloadOptions = [
		{
			title: "Download in PDF",
			download: downloadPDF,
			icon: "ph:file-pdf-duotone",
			size: "w-5 h-5",
		},
		{
			title: "Download in DOCX",
			download: downloadDOCX,
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
						className={`bg-white shadow-md mx-auto rounded-[4px] w-[800px] aspect-[1/1.4141] origin-center ${
							// className={`bg-white shadow-md mx-auto rounded-[4px] w-[595.28px] h-[841.89px] origin-center ${
							largePreview ? "scale-[1] my-24" : "lg:scale-[.8]"
						} scale-[1] lg:scale-[0.8]`}>
						<div className="p-6 h-full" ref={resumeRef}>
							<BasicResumeContainer />
						</div>
					</div>
				</div>
			</div>
			{!isAllButtonVisible ? (
				<motion.div
					exit={{ opacity: 0 }}
					className={`fixed ${largePreview ? "opacity-0" : "opacity-100"} z-[32] bottom-0 right-0 pr-6 pb-4 text-start w-max`}>
					<div className="text-start flex flex-col gap-y-4 font-[Magnat]">
						<Swiper />
						<Menu as="div" className="relative inline-block">
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95">
								<Menu.Item className="absolute right-0 bottom-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mb-1">
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
								<Icon icon="uiw:download" className=" w-3 h-3 lg:w-4  lg:h-4 pointer-events-none select-none " />
							</Menu.Button>
						</Menu>
					</div>
				</motion.div>
			) : (
				""
			)}
			{isModalVisible && (
				<Modal modalTitle="Enter filename">
					<div className="flex items-center gap-3 flex-wrap">
						<div className="flex-grow">
							<InputWithLabel placeholder="Enter filename" updateTheDetail={() => console.log("Y")} />
						</div>
						<button
							type="button"
							onClick={handleDownloadResume}
							className="text-white bg-main py-3 px-6 text-sm rounded-md hover:bg-hoverBgClr">
							Save and Download
						</button>
					</div>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default memo(ResumePreviewPage);

// downloadRef.current.href = `${dataURL}`;
// downloadRef.current.download = "victor.pdf";
// downloadRef.current.click();
// setIsModalVisible(true);
