import React from "react";
import DownloadButton from "./Components/DownloadButton";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";

const ResumePreviewPage = () => {
	return (
		<React.Fragment>
			<div mode="view-mode" name="resume-wrapper" className="relative flex items-center justify-center h-full mx-auto">
				<div
					name="resume-preview"
					className="bg-white whitespace-pre-wrap p-4 text-xs shadow-md rounded-[4px] h-[541px] w-[410px] scale-[0.9]">
					<BasicResumeContainer />
				</div>
			</div>
			<div className="absolute bottom-0 -translate-y-4 text-center">
				<DownloadButton />
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
