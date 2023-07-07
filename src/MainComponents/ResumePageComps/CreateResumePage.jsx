import React, { createContext, memo, useState } from "react";
import ResumePreviewPage from "./ResumePreviewPage";
import EducationIndex from "./EducationSection/EducationIndex";
import UserIndex from "./UserInfoSection/UserIndex";
import WorkExperienceIndex from "./WorkSection/WorkExperienceIndex";
import "../../assets/css/fonts.css";
import { ReactSortable } from "react-sortablejs";
import UserInputObjects from "./UserInputObjects";
import ThemeFamily from "../../assets/theme/htmlFonts/ThemeFamily";

const baseFont = {
	Syne: "Syne",
};
export const EachComponentAccordionState = createContext();
export const themeContext = createContext();
export const userDataContext = createContext();

const CreateResumePage = () => {
	const { userDetails, schoolObject, themeSelection } = UserInputObjects(); //FROM OBJECTS

	// all states
	const [userPersonalData, setUserPersonalData] = useState(userDetails); //an object for users personal details
	const [userEducationData, setUserEducationData] = useState(schoolObject); //an object for users personal details
	const [userGeneralData, setUserGeneralData] = useState({}); // an object that contains all user inputs
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
	]); // components and draggable sectionsis

	return (
		<userDataContext.Provider
			value={{
				userGeneralData,
				setUserGeneralData,
				userPersonalData,
				setUserPersonalData,
				userEducationData,
				setUserEducationData,
				themeSelection,
			}}>
			<EachComponentAccordionState.Provider
				value={{
					education: { educationState, setEducationState },
					workExperience: { workExperienceState, setWorkExperienceState },
				}}>
				<themeContext.Provider value={{ font, setFont }}>
					<React.Fragment>
						<div className="min-h-screen flex items-stretch">
							<div className="bg-white h-full p-5 md:p-11 w-full lg:w-1/2 relative" style={{ fontFamily: baseFont.Syne }}>
								<ThemeFamily />
								<section className="bg-white" id="user-personal-info">
									<UserIndex />
								</section>
								<ReactSortable list={sections} setList={setSections}>
									{sections.map(({ section_id_name, id, component }) => {
										return (
											<React.Fragment key={id}>
												<section className="bg-white" id={section_id_name}>
													{component}
												</section>
											</React.Fragment>
										);
									})}
								</ReactSortable>
							</div>
							<div
								className={`w-1/2 hidden lg:block right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm p-8 pt-0 select-none`}
								style={{ fontFamily: font }}>
								<ResumePreviewPage />
							</div>
						</div>
					</React.Fragment>
				</themeContext.Provider>
			</EachComponentAccordionState.Provider>
		</userDataContext.Provider>
	);
};

export default memo(CreateResumePage);
