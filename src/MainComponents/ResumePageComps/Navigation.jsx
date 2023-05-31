import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { componentContext } from "./CreateResumePage";
import SkillComponent from "./NavComponents/SkillComponent";
import PersonalComponent from "./NavComponents/PersonalComponent";
import SocialComponent from "./NavComponents/SocialComponent";
import SummaryComponent from "./NavComponents/SummaryComponent";
import WorkExperienceComponent from "./NavComponents/WorkExperienceComponent";
import ThemeComponent from "./NavComponents/ThemeComponent";
import EducationComponent from "./NavComponents/EducationComponent";

const Navigation = () => {
	const { setComponent } = useContext(componentContext);
	const [buttonActive, setButtonActive] = useState(0);
	const [top, setTop] = useState(0);

	const handleSpanHeight = (index) => {
		const multiple = index * 60;
		setTop(multiple);
	};

	const navLinks = [
		{
			icon_name: "mingcute:user-1-line",
			linkname: "personal",
			component: <PersonalComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			icon_name: "ph:note-pencil",
			linkname: "Summary",
			component: <SummaryComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			icon_name: "carbon:education",
			linkname: "Education",
			component: <EducationComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			icon_name: "fluent:globe-24-regular",
			linkname: "Socials",
			component: <SocialComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			icon_name: "ph:toolbox",
			linkname: "Experience",
			component: <WorkExperienceComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			icon_name: "codicon:tools",
			linkname: "Skills",
			component: <SkillComponent />,
			size: "w-4 h-4 md:w-5 md:h-5",
		},
		{
			// icon_name: "ci:swatches-palette",
			// icon_name: "ph:paint-brush",
			icon_name: "fluent:paint-brush-24-regular",
			linkname: "Theme",
			component: <ThemeComponent />,
			// size: "w-4 h-4 md:w-5 md:h-5",
			size: "w-5 h-5 md:w-6 md:h-6", // if you use flend:paint,
		},
	];

	return (
		<div className="flex items-center justify-between bg-custom_1 h-full">
			<div className="h-full">
				<div className="py-[0.3rem] px-[0.2rem]">
					<Link
						to="/"
						className="relative before:absolute before:inset-0 overflow-hidden before:bg-slate-900 hover:before:bg-opacity-50 before:scale-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-150 before:rounded-full flex flex-col items-center border-2 border-main p-1 gap-y-1 py-4 rounded-tl-[10px] rounded-br-[10px]">
						<div className="font-semibold relative text-xs uppercase flex flex-col items-center leading-none text-main">
							<span>Resume</span>
							<span>.me</span>
						</div>
					</Link>
				</div>
				<div className="flex flex-col mt-8 relative">
					<div
						className="bg-main w-[2px] h-[60px] absolute top-0 right-0 z-[1] hidden md:block"
						style={{ top: `${top}px`, transition: "250ms ease" }}></div>
					{navLinks.map(({ icon_name, linkname, component, size }, index) => {
						return (
							<React.Fragment key={index}>
								<button
									type="button"
									className={`
									relative before:absolute before:inset-0 overflow-hidden before:bg-slate-900 hover:before:bg-opacity-50 before:scale-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-150 before:rounded-full h-[55px] md:h-[60px]
									${
										buttonActive === index
											? "bg-slate-900 text-main hover:bg-slate-800"
											: "hover:bg-opacity-80 hover:bg-gray-700 text-gray-300"
									} outline-none p-2 md:px-[0.3rem] md:py-[0.3rem] flex flex-col justify-center items-center`}
									onClick={() => {
										setComponent(component);
										setButtonActive(index);
										handleSpanHeight(index);
									}}>
									<Icon icon={icon_name} className={`${size} relative`} />
									<span className={`text-xs font-semibold capitalize relative`}>{linkname}</span>
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
