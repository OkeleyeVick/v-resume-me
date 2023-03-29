import React from "react";
import TemplateDisplayBody from "./TemplateDisplayBody";
import TemplateDisplayBodyWrapper from "./TemplateDisplayBodyWrapper";
import TemplateDisplayHeader from "./TemplateDisplayHeader";

const TemplateDisplay = () => {
	return (
		<div className="w-full h-full overflow-y-scroll no-scroll">
			<TemplateDisplayHeader />
			<TemplateDisplayBodyWrapper>
				<TemplateDisplayBody />
			</TemplateDisplayBodyWrapper>
		</div>
	);
};

export default TemplateDisplay;
