import React from "react";
import BackgroundPatterns from "../../assets/utilities/BackgroundPatterns";
import "../../assets/css/fonts.css";
import BuildResume from "./BuildResume";

const fonts = {
	syne: "Syne",
};
const ResumeIndex = () => {
	return (
		<div style={{ fontFamily: `${fonts.syne}` }}>
			<BuildResume />
			{/* <BackgroundPatterns /> */}
		</div>
	);
};

export default ResumeIndex;
