import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { H1, Span } from "../../../assets/theme/fontSizes";

const SoftSkills = () => {
	const { skills } = useContext(userDataContext);
	const softSkills = skills.softSkills;
	return (
		<>
			{skills && skills.softSkills.length !== 0 && (
				<>
					<div name="skills">
						<div name="soft-skills">
							<H1>Softskills</H1>
							<div className="mt-1 flex items-center gap-1 flex-wrap">
								{softSkills.map(({ skillName }) => {
									return (
										<Span key={skillName} className="bg-gray-200 rounded-sm p-1 px-2 leading-none">
											{skillName}
										</Span>
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
