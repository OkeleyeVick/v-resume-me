import React from "react";
import { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { H1, Span } from "../../../assets/theme/fontSizes";

const Software = () => {
	const { skills } = useContext(userDataContext);
	const softwareSkills = skills.softwareSkills;
	return (
		<>
			{skills && skills.softwareSkills.length !== 0 && (
				<>
					<div name="skills">
						<div name="soft-skills">
							<H1>Softwareskills</H1>
							<div className="mt-1 flex items-center gap-1 flex-wrap">
								{softwareSkills.map(({ skillName }) => {
									return (
										<Span key={skillName} className="flex-grow  text-center bg-gray-200 rounded-sm p-1 px-2 leading-none">
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

export default Software;
