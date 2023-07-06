import React from "react";
import HeaderContainer from "./HeaderContainer";
import UserDetailImage from "./UserDetailImage";

const BasicResumeContainer = () => {
	return (
		<React.Fragment>
			<div>
				<HeaderContainer />
			</div>
			<div className="d-flex align-items-center justify-between">
				<UserDetailImage />
			</div>
		</React.Fragment>
	);
};

export default BasicResumeContainer;
