import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { componentContext } from "./CreateResumePage";
import SkillComponent from "./NavComponents/SkillComponent";
import PersonalComponent from "./NavComponents/PersonalComponent";
import SocialComponent from "./NavComponents/SocialComponent";
import SummaryComponent from "./NavComponents/SummaryComponent";
import WorkExperienceComponent from "./NavComponents/WorkExperienceComponent";
import ThemeComponent from "./NavComponents/ThemeComponent";

const Navigation = () => {
	const { setComponent } = useContext(componentContext);

	return (
		<div className="flex items-center justify-between bg-custom_1 h-full">
			<div className="h-full">
				<div className="p-2">
					<Link to="/" className="flex flex-col items-center border-2 border-main p-1 gap-y-1 py-4 ">
						<div className="font-bold text-xs uppercase flex flex-col items-center leading-none text-main">
							<span>Resume</span>
							<span>.me</span>
						</div>
					</Link>
				</div>
				<div className="flex flex-col mt-4 relative">
					{navLinks.map((link, index) => {
						const { icon_name, linkname, component, size } = link;
						return (
							<React.Fragment key={index}>
								<button
									type="button"
									className={`outline-none p-3 flex flex-col items-center text-gray-300 hover:bg-slate-900 hover:bg-opacity-50`}
									onClick={() => {
										setComponent(component);
									}}>
									<Icon icon={icon_name} className={`${size}`} />
									<span className="text-xs font-semibold capitalize">{linkname}</span>
								</button>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navigation;

const navLinks = [
	{
		icon_name: "prime:user-edit",
		linkname: "personal",
		component: <PersonalComponent />,
		size: "w-6 h-6",
	},
	{
		icon_name: "fluent:globe-24-regular",
		linkname: "Social",
		component: <SocialComponent />,
		size: "w-5 h-5",
	},
	{
		icon_name: "ph:note-pencil",
		linkname: "Summary",
		component: <SummaryComponent />,
		size: "w-5 h-5",
	},
	{
		icon_name: "ph:toolbox",
		linkname: "Experience",
		component: <WorkExperienceComponent />,
		size: "w-5 h-5",
	},
	{
		icon_name: "codicon:tools",
		linkname: "Skills",
		component: <SkillComponent />,
		size: "w-5 h-5",
	},
	{
		icon_name: "ci:swatches-palette",
		linkname: "Theme",
		component: <ThemeComponent />,
		size: "w-6 h-6",
	},
];
