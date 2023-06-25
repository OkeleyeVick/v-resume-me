import React, { createContext, memo, useState } from "react";
import "../../assets/css/fonts.css";
import ResumePreviewPage from "./ResumePreviewPage";
import EducationIndex from "./EducationSection/EducationIndex";
import UserIndex from "./UserInfoSection/UserIndex";
import WorkExperienceIndex from "./WorkSection/WorkExperienceIndex";

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

export const EachComponentAccordionState = createContext();
export const fontContext = createContext();

const CreateResumePage = () => {
	const [font, setFont] = useState("Mulish");
	const [educationState, setEducationState] = useState(false);
	const [workExperienceState, setWorkExperienceState] = useState(false);

	function toggleIndex(event, wrapperIndex) {
		event.stopPropagation();
	}

	return (
		<React.Fragment>
			<fontContext.Provider value={{ font, setFont }}>
				<div className="min-h-screen flex items-stretch">
					<div className="bg-white h-full p-5 md:p-11 w-full lg:w-1/2" style={{ fontFamily: baseFont.SpaceGrotesk }}>
						<section id="user-info">
							<UserIndex />
						</section>
						<EachComponentAccordionState.Provider
							value={{
								education: { educationState, setEducationState },
								workExperience: { workExperienceState, setWorkExperienceState },
							}}>
							<section id="user-education">
								<EducationIndex />
							</section>
							<section id="work-experience">
								<WorkExperienceIndex />
							</section>
						</EachComponentAccordionState.Provider>
					</div>
					<div
						className={`w-1/2 hidden lg:block right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm p-8 select-none`}
						style={{ fontFamily: baseFont.Syne }}>
						<ResumePreviewPage />
					</div>
				</div>
			</fontContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);
