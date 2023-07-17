import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

const SoftSkills = () => {
	const { skills } = useContext(userDataContext);
	const softSkills = skills.softSkills;
	return (
		<>
			{skills && skills.softSkills.length !== 0 && (
				<>
					<div name="skills">
						<div name="soft-skills">
							<h1>Softskills</h1>
							<div className="mt-1 flex items-center gap-1 flex-wrap">
								{softSkills.map(({ skillName }) => {
									return (
										<span key={skillName} className="bg-gray-200 rounded-sm p-1 px-2 leading-none">
											{skillName}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SoftSkills;
