import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Small, Span } from "../../../assets/theme/fontSizes";

const SoftSkills = () => {
	const { skills } = useContext(userDataContext);
	const softSkills = skills.softSkills;
	return (
		<>
			{skills && skills.softSkills.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title">Soft Skills</Span>
						<div className="mt-4 flex items-center gap-1 flex-wrap">
							{softSkills.map(({ skillName }) => {
								return (
									<Small key={skillName} className="pill">
										{skillName}
									</Small>
								);
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SoftSkills;
