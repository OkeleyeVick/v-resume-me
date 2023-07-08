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
		</React.Fragment>
	);
};

export default BasicResumeContainer;
