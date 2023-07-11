import React, { useContext } from "react";
import DownloadButton from "./Components/DownloadButton";
import BasicResumeContainer from "../Templates/BasicTemplate/BasicResumeContainer";
import { themeContext } from "./CreateResumePage";

const ResumePreviewPage = () => {
	const { scale, largePreview, setLargePreview, themeSelection } = useContext(themeContext);
	const font = themeSelection.font.family.customFont;

	return (
		<React.Fragment>
			<div mode="view-mode" name="resume-wrapper">
				<div style={{ fontFamily: `${font}` }}>
					<div
						name="resume-preview"
						className={`bg-white whitespace-pre-wrap p-4 text-xs shadow-md rounded-[4px]`}
						style={{ height: `calc(${297}px * ${scale})`, width: `calc(${210}px * ${scale})` }}>
						<BasicResumeContainer />
					</div>
				</div>
			</div>
			<div className={`absolute ${largePreview ? "opacity-0" : "opacity-100"} bottom-0 pb-4 text-start w-full`}>
				<DownloadButton />
			</div>
		</React.Fragment>
	);
};

export default ResumePreviewPage;
