import React from "react";
import HeaderContainer from "./HeaderContainer";
import UserDetailImage from "./UserDetailImage";
import Language from "./Language";
import SoftSkills from "./SoftSkill";
import Software from "./Software";

const BasicResumeContainer = () => {
	return (
		<React.Fragment>
			<div>
				<HeaderContainer />
			</div>
			<div className="flex flex-col items-center justify-between">
				<UserDetailImage />
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div></div>
				<div className="flex flex-col gap-y-3">
					<Software />
					<SoftSkills />
					<Language />
				</div>
			</div>
		</React.Fragment>
	);
};

export default BasicResumeContainer;
