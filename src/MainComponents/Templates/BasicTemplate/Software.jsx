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
						<Span
							className="text-title relative before:absolute before:h-[0.5px] before:-translate-y-1 before:top-0 before:w-3/5 before:bg-slate-500 opacity-80"
							style={{ color: `${color}` }}>
							Software Skills
						</Span>
						<div className="mt-1 grid grid-cols-2 gap-x-2 gap-y-[2px]">
							{softwareSkills.map(({ skillName }) => {
								return <Small key={skillName}>{skillName}</Small>;
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Software;
