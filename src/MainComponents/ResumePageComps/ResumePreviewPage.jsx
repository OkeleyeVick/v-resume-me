import React, { Fragment, useContext, useRef } from "react";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { GeneralContext, themeContext, userDataContext } from "./CreateResumePage";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import "../../assets/css/fonts.css";
import Swiper from "./Components/Swiper";
import { motion } from "framer-motion";
import { memo } from "react";
import Modal from "../GeneralComponents/Modal.jsx";
import * as html2image from "html-to-image";
import InputWithLabel from "../FormComponent/InputComponent";
import { PDFDownloadLink, Document, Page, Image, StyleSheet } from "@react-pdf/renderer";
import { useState } from "react";

const ResumePreviewPage = () => {
	const [resumeImage, setResumeImage] = useState();
	const [filename, setFilename] = useState("");
	const resumeRef = useRef(null);

	const { isModalVisible, setIsModalVisible } = useContext(GeneralContext);
	const { largePreview, themeSelection } = useContext(themeContext); //theme contexts
	const { isAllButtonVisible } = useContext(GeneralContext); //state of all buttons
	const {
		userPersonalData: {
			firstname: { value: fnValue },
			lastname: { value: lnValue },
		},
	} = useContext(userDataContext);
	const font = themeSelection.font.family.customFont;

	function attemptToDownload() {
		// convert html page to jpeg
		html2image.toJpeg(resumeRef.current, { style: { backgroundColor: "#fff" }, quality: 1 }).then((file) => {
			setResumeImage(file);
			setIsModalVisible(true);
		});
	}

	const DownloadOptions = [
		{
			title: "Download in PDF",
			download: attemptToDownload,
			icon: "ph:file-pdf-duotone",
			size: "w-5 h-5",
		},
	];

	const styles = StyleSheet.create({
		page: {
			backgroundColor: "red",
		},
		image: {
			width: "100%",
			height: "100%",
		},
	});

	const handleFileName = (inputname) => {
		setFilename(inputname);
	};
	return (
		<React.Fragment>
			<div mode="view-mode" name="resume-wrapper">
				<div
					name="resume-preview"
					style={{ fontFamily: `${font}` }}
					className={`whitespace-pre-wrap p-4 text-xs mx-auto flex items-center justify-center`}>
					<div
						name="resume-document"
						className={`bg-white shadow-md mx-auto rounded-[4px] w-[595.28px] h-[841.89px] origin-center scale-[0.5] sm:scale-[0.8] lg:scale-[0.8]`}>
						<div className="p-4 w-[595.28px] h-[841.89px]" ref={resumeRef}>
							<BasicResumeContainer />
						</div>
					</div>
				</div>
			</div>
			{!isAllButtonVisible && (
				<motion.div
					exit={{ opacity: 0 }}
					transition={{ duration: 200 }}
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
									<div className="px-1 py-1 w-max flex flex-col bg-white border dark:border-main dark:bg-dark_theme">
										{DownloadOptions.map(({ icon, size, title, download }, index) => (
											<button
												key={index}
												type="button"
												onClick={download}
												className="flex items-center gap-1 p-2 dark:text-label_clr dark:hover:text-white hover:bg-main dark:hover:bg-main/60 hover:text-white rounded-sm text-slate-800">
												<Icon
													icon={icon}
													className={`${size} flex items-center duration-75 ease-linear transition pointer-events-none select-none`}
												/>
												<span className="text-xs">{title}</span>
											</button>
										))}
									</div>
								</Menu.Item>
							</Transition>
							<Menu.Button className="inline-flex w-full justify-center rounded-[3px] bg-main shadow-sm px-4 py-4 text-sm font-medium text-white hover:bg-hoverBgClr transition duration-150 ease-linear focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-2 items-end">
								<Icon icon="typcn:download" className="w-5 h-5 pointer-events-none select-none" />
							</Menu.Button>
						</Menu>
					</div>
				</motion.div>
			)}
			{isModalVisible && (
				<Modal modalTitle="Enter filename">
					<div className="flex items-center gap-3 flex-wrap">
						<div className="flex-grow">
							<InputWithLabel
								placeholder="Enter filename"
								className="dark:border-label_clr dark:bg-dark_theme_text_clr"
								updateTheDetail={handleFileName}
							/>
						</div>

						<PDFDownloadLink
							document={
								<Document>
									<Page size="A4">
										<Image src={resumeImage} style={styles.image} />
									</Page>
								</Document>
							}
							fileName={
								filename.length !== 0
									? `${filename.trim()}-v-resume.pdf`
									: `${`${lnValue}${lnValue.length !== 0 ? "-" : ""}${fnValue}` ?? "user"}_v-resume.pdf`
							}>
							{({ loading }) => (loading ? <Button disabled={true}>Loading</Button> : <Button disabled={false}>Download</Button>)}
						</PDFDownloadLink>
					</div>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default memo(ResumePreviewPage);

function Button({ children, disabled }) {
	return (
		<button disabled={disabled} type="button" className="text-white bg-main py-3 px-6 text-sm rounded-md hover:bg-hoverBgClr">
			{children}
		</button>
	);
}
