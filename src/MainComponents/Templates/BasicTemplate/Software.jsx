import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Small, Span } from "../../../assets/theme/fontSizes";

const Software = () => {
	const { skills } = useContext(userDataContext);
	const softwareSkills = skills.softwareSkills;
	return (
		<>
			{skills && skills.softwareSkills.length !== 0 && (
				<>
					<div name="soft-skills">
						<Span className="text-title">Software Skills</Span>
						<div className="mt-4 flex items-center gap-1 flex-wrap">
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
