import React from "react";
import DownloadButton from "./Components/DownloadButton";

const ResumePreviewPage = () => {
	return (
		<React.Fragment>
			<div mode="view-mode">
				<div name="resume-wrapper" className="relative flex items-center justify-center">
					<div name="resume" className="bg-white w-[355px] h-[450px] shadow-md rounded-[4px] aspect-[3/1]"></div>
				</div>
				<div className="absolute bottom-0 -translate-y-4 text-center">
					<DownloadButton />
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
