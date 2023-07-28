import React from "react";
import HeaderContainer from "./HeaderContainer";
import UserDetailImage from "./UserDetailImage";
import Language from "./Language";
import SoftSkills from "./SoftSkill";
import Software from "./Software";
import Hobbies from "./Hobbies";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const BasicResumeContainer = () => {
	return (
		<React.Fragment>
			<div>
				<HeaderContainer />
			</div>
			<div className="flex flex-col items-center justify-between">
				<UserDetailImage />
			</div>
			<div className="grid grid-cols-2 gap-8 mt-10">
				<div className="flex flex-col gap-y-3">
					<WorkExperience />
				</div>
				<div className="flex flex-col gap-y-6">
					<Education />
					<Software />
					<SoftSkills />
					<Language />
					<Hobbies />
				</div>
			</div>
		</React.Fragment>
	);
};

export default BasicResumeContainer;
