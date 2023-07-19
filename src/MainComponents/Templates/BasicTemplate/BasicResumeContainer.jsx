import React from "react";
import HeaderContainer from "./HeaderContainer";
import UserDetailImage from "./UserDetailImage";
import Language from "./Language";
import SoftSkills from "./SoftSkill";
import Software from "./Software";
import Hobbies from "./Hobbies";

const BasicResumeContainer = () => {
	return (
		<React.Fragment>
			<div>
				<HeaderContainer />
			</div>
			<div className="flex flex-col items-center justify-between">
				<UserDetailImage />
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a, fugiat culpa maiores, adipisci ullam esse iure rerum
					inventore sequi, debitis optio laboriosam quaerat autem eius asperiores ea tenetur iste?
				</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div></div>
				<div className="flex flex-col gap-y-3">
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
