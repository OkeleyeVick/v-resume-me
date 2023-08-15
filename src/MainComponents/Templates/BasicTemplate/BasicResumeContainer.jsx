import React from "react";
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
			<div className="flex flex-col justify-between">
				<UserDetailImage />
			</div>
			<div className="grid grid-cols-5 gap-3 mt-10">
				<div className="flex flex-col gap-y-3 col-span-3">
					<WorkExperience />
				</div>
				<div className="flex flex-col gap-y-6 col-span-2">
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
