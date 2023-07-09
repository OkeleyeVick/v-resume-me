import React from "react";
import HeaderContainer from "./HeaderContainer";
import UserDetailImage from "./UserDetailImage";

const BasicResumeContainer = () => {
	return (
		<React.Fragment>
			<div>
				<HeaderContainer />
			</div>
			<div className="flex flex-col items-center justify-between">
				<UserDetailImage />
			</div>
			<div className="grid grid-cols-2 gap-4"></div>
		</React.Fragment>
	);
};

export default BasicResumeContainer;
