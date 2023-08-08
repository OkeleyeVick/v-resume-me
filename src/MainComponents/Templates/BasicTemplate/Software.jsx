import React from "react";
import { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Small, Span } from "../../../assets/theme/fontSizes";

const Software = () => {
	const { skills } = useContext(userDataContext);
	const softwareSkills = skills.softwareSkills;
	const {
		themeSelection: {
			userResumeColor: {
				selectedColor: { color },
			},
		},
	} = useContext(themeContext);

	return (
		<>
			{skills && skills.softwareSkills.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title" style={{ color: `${color}` }}>
							Software Skills
						</Span>
						<div className="mt-2 flex items-center gap-1 flex-wrap">
							{softwareSkills.map(({ skillName }) => {
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

export default Software;
