import React, { createContext, memo, useState } from "react";
import ResumePreviewPage from "./ResumePreviewPage";
import EducationIndex from "./EducationSection/EducationIndex";
import UserIndex from "./UserInfoSection/UserIndex";
import WorkExperienceIndex from "./WorkSection/WorkExperienceIndex";
import "../../assets/css/fonts.css";
import { ReactSortable } from "react-sortablejs";

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
export const userDataContext = createContext();

const CreateResumePage = () => {
	const [userData, setUserData] = useState({
		userDetails: {
			firstname: "",
			lastname: "",
			position: "",
			email: "",
			phone: "",
			country: "",
			dob: "",
		},
	});
	const [font, setFont] = useState("Mulish"); //fonts and selection
	const [educationState, setEducationState] = useState(false);
	const [workExperienceState, setWorkExperienceState] = useState(false);
	const [sections, setSections] = useState([
		{
			id: 1,
			component: <EducationIndex />,
			section_id_name: "user-education",
		},
		{
			id: 2,
			component: <WorkExperienceIndex />,
			section_id_name: "user-work-experience",
		},
	]); // components and draggable sections

	return (
		<userDataContext.Provider value={{ userData, setUserData }}>
			<EachComponentAccordionState.Provider
				value={{
					education: { educationState, setEducationState },
					workExperience: { workExperienceState, setWorkExperienceState },
				}}>
				<fontContext.Provider value={{ font, setFont }}>
					<React.Fragment>
						<div className="min-h-screen flex items-stretch">
							<div className="bg-white h-full p-5 md:p-11 w-full lg:w-1/2" style={{ fontFamily: baseFont.Syne }}>
								<section className="bg-white" id="user-personal-info">
									<UserIndex />
								</section>

								<ReactSortable list={sections} setList={setSections}>
									{sections.map(({ section_id_name, id, component }, index) => {
										return (
											<React.Fragment key={index}>
												<section className="bg-white" id={section_id_name}>
													{component}
												</section>
											</React.Fragment>
										);
									})}
								</ReactSortable>
							</div>
							<div
								className={`w-1/2 hidden lg:block right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm p-8 select-none`}
								style={{ fontFamily: baseFont.Syne }}>
								<ResumePreviewPage />
							</div>
						</div>
					</React.Fragment>
				</fontContext.Provider>
			</EachComponentAccordionState.Provider>
		</userDataContext.Provider>
	);
};

export default memo(CreateResumePage);
