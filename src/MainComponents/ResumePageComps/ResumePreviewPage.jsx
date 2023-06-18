import React from "react";
import DownloadButton from "./Components/DownloadButton";

const ResumePreviewPage = () => {
	return (
		<React.Fragment>
			<div>Top part</div>
			<div className="absolute bottom-0 -translate-y-4 text-center">
				<DownloadButton />
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
