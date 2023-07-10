import React, { createContext, memo, useState } from "react";
import ResumePreviewPage from "./ResumePreviewPage";
import EducationIndex from "./EducationSection/EducationIndex";
import UserIndex from "./UserInfoSection/UserIndex";
import WorkExperienceIndex from "./WorkSection/WorkExperienceIndex";
import "../../assets/css/fonts.css";
import { ReactSortable } from "react-sortablejs";
import UserInputObjects from "./UserInputObjects";
import ThemeFamily from "../../assets/theme/themeComponents/ThemeFamily";
import { Icon } from "@iconify/react";
import ThemeTogglerButton from "../../assets/theme/themeComponents/ThemeTogglerButton";

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
};
export const EachComponentAccordionState = createContext();
export const themeContext = createContext();
export const userDataContext = createContext();

const CreateResumePage = () => {
	const { userDetails, schoolObject, themeDetails, workExperienceDetails } = UserInputObjects(); //FROM OBJECTS

	// all states
	const [userPersonalData, setUserPersonalData] = useState(userDetails); //an object of personal details
	const [userEducationData, setUserEducationData] = useState(schoolObject); //an object of educationDetails details
	const [userGeneralData, setUserGeneralData] = useState({}); // an object that contains all user inputs

	// everything about work experience
	const [isWorkExperienceAccordionActive, setIsWorkExperienceAccordionActive] = useState(workExperienceDetails.isActiveAccordion);
	const [userWorkExperiences, setUserWorkExperiences] = useState(workExperienceDetails.listOfExperiences); // an object of user work experience
	const [themeSelection, setSelectedThemes] = useState(themeDetails); //fonts and selection

	const [largePreview, setLargePreview] = useState(false);
	function zoomIn() {
		setLargePreview((previousView) => !previousView);
	}
	const [sideBarState, setSideBarState] = useState(false);

	// the font size should increase differently
	// the height and width should increase differently ==> the ratio of height and width is 1.414

	return (
		<userDataContext.Provider
			value={{
				userGeneralData,
				setUserGeneralData,
				userPersonalData,
				setUserPersonalData,
				userEducationData,
				setUserEducationData,
				workExperience: {
					accordionState: { isWorkExperienceAccordionActive, setIsWorkExperienceAccordionActive },
					work_experience: { userWorkExperiences, setUserWorkExperiences },
				},
			}}>
			<themeContext.Provider
				value={{
					scale: largePreview === true ? parseFloat(1.2) : parseFloat(0.7),
					themeSelection,
					setSelectedThemes,
					largePreview,
					setLargePreview,
					sideBarState,
					setSideBarState,
				}}>
				<React.Fragment>
					<div className="min-h-screen flex items-stretch">
						<div className="bg-white h-full p-5 md:p-11 w-full lg:w-1/2 relative" style={{ fontFamily: baseFont.Syne }}>
							<ThemeFamily />
							<ThemeTogglerButton />
							<section className="bg-white" id="user-personal-info">
								<UserIndex />
							</section>
							<section id="user-work-experience">
								<WorkExperienceIndex />
							</section>
						</div>
						<div
							className={`hidden lg:block right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm px-6 select-none ${
								largePreview ? "w-full overflow-auto" : "w-1/2"
							}`}>
							<div className="absolute top-0 flex px-6 z-10 items-start left-0 pt-3">
								<button type="button" className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr relative" onClick={zoomIn}>
									<Icon
										icon={`${largePreview ? "material-symbols:pinch-zoom-in" : "material-symbols:pinch-zoom-out-rounded"}`}
										className="text-white w-6 h-6"
									/>
								</button>
							</div>
							<div className={`${largePreview ? "my-40" : "my-0"} relative flex items-center justify-center h-full mx-auto`}>
								<ResumePreviewPage />
							</div>
						</div>
					</div>
				</React.Fragment>
			</themeContext.Provider>
		</userDataContext.Provider>
	);
};

export default memo(CreateResumePage);
