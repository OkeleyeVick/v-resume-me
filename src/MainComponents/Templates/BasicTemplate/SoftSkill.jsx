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
						<Span
							className="text-title relative before:absolute before:h-[1px] before:-translate-y-1 before:top-0 before:w-3/5 before:bg-slate-500 opacity-80"
							style={{ color: `${color}` }}>
							Soft Skills
						</Span>
						<div className="mt-1 grid grid-cols-2 gap-x-2 gap-y-[2px]">
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
