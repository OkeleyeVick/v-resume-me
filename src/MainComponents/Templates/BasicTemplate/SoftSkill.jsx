import React from "react";
import { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Small, Span } from "../../../assets/theme/fontSizes";

const SoftSkills = () => {
	const { skills } = useContext(userDataContext);
	const softSkills = skills.softSkills;
	const {
		themeSelection: {
			userResumeColor: {
				selectedColor: { color },
			},
		},
	} = useContext(themeContext);
	return (
		<>
			{skills && skills.softSkills.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title" style={{ color: `${color}` }}>
							Soft Skills
						</Span>
						<div className="mt-4 flex items-center gap-1 flex-wrap">
							{softSkills.map(({ skillName }) => {
								return <Small key={skillName}>{skillName}</Small>;
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SoftSkills;
