import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

const Software = () => {
	const { skills } = useContext(userDataContext);
	const softwareSkills = skills.softwareSkills;
	return (
		<>
			{skills && skills.softwareSkills.length !== 0 && (
				<>
					<div name="skills">
						<div name="soft-skills">
							<h1>Softwareskills</h1>
							<div className="mt-1 flex items-center gap-1 flex-wrap">
								{softwareSkills.map(({ skillName }) => {
									return (
										<span key={skillName} className="flex-grow  text-center bg-gray-200 rounded-sm p-1 px-2 leading-none">
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

export default Software;
