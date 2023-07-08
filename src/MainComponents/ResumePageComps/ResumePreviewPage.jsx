import React, { useContext, useState } from "react";
import DownloadButton from "./Components/DownloadButton";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { Icon } from "@iconify/react";
import { themeContext } from "./CreateResumePage";

const ResumePreviewPage = () => {
	const { scale, largePreview, setLargePreview } = useContext(themeContext);
	function zoomIn() {
		setLargePreview((previousView) => !previousView);
	}
	return (
		<React.Fragment>
			<div mode="view-mode" name="resume-wrapper" className="relative flex items-center justify-center h-full mx-auto">
				<div className="absolute top-0 flex items-start left-0 pt-3">
					<button type="button" className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr relative" onClick={zoomIn}>
						<Icon
							icon={`${largePreview ? "material-symbols:pinch-zoom-in" : "material-symbols:pinch-zoom-out-rounded"}`}
							className="text-white w-6 h-6"
						/>
					</button>
				</div>
				<div className="">
					<div
						name="resume-preview"
						className={`bg-white whitespace-pre-wrap p-4 text-xs shadow-md rounded-[4px]`}
						style={{ height: `calc(${541}px * ${scale})`, width: `calc(${410}px * ${scale})` }}>
						<BasicResumeContainer />
					</div>
				</div>
			</div>
			<div className={`absolute ${largePreview ? "opacity-0" : "opacity-100"} bottom-0 pb-4 text-center`}>
				<DownloadButton />
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
