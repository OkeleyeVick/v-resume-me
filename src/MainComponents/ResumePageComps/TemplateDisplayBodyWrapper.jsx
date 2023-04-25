import React, { useContext } from "react";
import { componentContext } from "./CreateResumePage";

const TemplateDisplayBodyWrapper = ({ children }) => {
	const { font } = useContext(componentContext);

	return (
		<React.Fragment>
			<div className="h-full" style={{ fontFamily: font, fontSize: "10px" }}>
				<div className="hidden sm:block p-4 xl:p-8 overflow-hidden">{children}</div>
				<div className="sm:hidden pt-28 px-6 flex items-center justify-center text-gray-200 text-2xl text-center ">
					Sorry cannot create resume on mobile phones yet, try using a larger screen device (e.g tablet, desktop, or a laptop)
				</div>
			</div>
		</React.Fragment>
	);
};

export default TemplateDisplayBodyWrapper;
