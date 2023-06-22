import React from "react";
import DownloadButton from "./Components/DownloadButton";

const ResumePreviewPage = () => {
	return (
		<React.Fragment>
			<div mode="view-mode">
				<div>Top part</div>
				<div className="absolute bottom-0 -translate-y-4 text-center">
					<DownloadButton />
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
