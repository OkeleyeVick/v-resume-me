import React, { createContext, memo, useState } from "react";
import "../../assets/css/fonts.css";
import ResumePreviewPage from "./ResumePreviewPage";
import EducationIndex from "./EducationSection/EducationIndex";
import UserIndex from "./UserInfoSection/UserIndex";

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
	Mulish: "Mulish",
	Bianco: "Bianco",
	Cormonrant: "Cormonrant",
	Roobert: "Roobert",
	SpaceGrotesk: "SpaceGrotesk",
};

export const fontContext = createContext();
export const accordionIndexContext = createContext();

const CreateResumePage = () => {
	const [font, setFont] = useState("Mulish");
	const [accordionIndex, setAccordionIndex] = useState(null);

	function toggleIndex(event, wrapperIndex) {
		event.stopPropagation();
		setAccordionIndex(wrapperIndex);
	}

	const sectionsWrapper = [
		{
			id: 1,
			component: <EducationIndex />,
		},
		{
			id: 1,
			component: <EducationIndex />,
		},
	];

	return (
		<React.Fragment>
			<fontContext.Provider value={{ font, setFont }}>
				<div className="min-h-screen flex items-stretch">
					<div className="bg-white h-full p-5 md:p-11 w-1/2" style={{ fontFamily: baseFont.SpaceGrotesk }}>
						<section id="user-info">
							<UserIndex />
						</section>
						<accordionIndexContext.Provider value={{ accordionIndex, setAccordionIndex }}>
							{sectionsWrapper.map(({ id, component }, wrapperIndex) => {
								return (
									<section onClick={(event) => toggleIndex(event, wrapperIndex)} key={wrapperIndex} id="user-education">
										{component}
									</section>
								);
							})}
						</accordionIndexContext.Provider>
					</div>
					<div
						className={`w-1/2 right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm p-8 select-none`}
						style={{ fontFamily: baseFont.Syne }}>
						<ResumePreviewPage />
					</div>
				</div>
			</fontContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);
