import React, { createContext, memo, useState } from "react";
import UserIndex from "./UserInfoSection/UserIndex";
import WorkExperienceIndex from "./WorkSection/WorkExperienceIndex";
import { Icon } from "@iconify/react";
import ThemeTogglerButton from "../../assets/theme/themeComponents/ThemeTogglerButton";
import SkillsIndex from "./SkillsSection/SkillsIndex";
import LanguageIndex from "./LanguageSection/LanguageIndex";
import data from "../../assets/db/databsase.json";
import UserInputObjects from "./UserInputObjects";
import EducationIndex from "./EducationSection/EducationIndex";
import HobbyIndex from "./HobbySection/HobbyIndex";
import "../../assets/css/fonts.css";
import GoBack from "../GeneralComponents/GoBack";
import { motion } from "framer-motion";
const ResumePreviewPage = React.lazy(() => import("./ResumePreviewPage.jsx"));

const ThemeFamily = React.lazy(() => import("../../assets/theme/ThemeFamily.jsx"));

const database = window.indexedDB.open("v-resume");
console.log(database);

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
};
export const GeneralComponent = createContext();
export const themeContext = createContext();
export const userDataContext = createContext();

const CreateResumePage = () => {
	const { userDetails, themeDetails } = UserInputObjects(); //FROM OBJECTS
	const { software_skills, soft_skills } = data;
	const SOFTWARE = software_skills.map((skill, index) => ({ id: index, skillName: skill, isSet: false }));
	const SOFT = soft_skills.map((skill, index) => ({ id: index, skillName: skill, isSet: false }));

	// <============ all states ==================>
	const [userPersonalData, setUserPersonalData] = useState(userDetails); //an object of personal details

	const [fileName, setFileName] = useState(""); //filename that the user should enter

	const [userPersonalSummary, setUserPersonalSummary] = useState("");

	//an array of objects of educationDetails details
	const [userEducationData, setUserEducationData] = useState([]);

	// an object that contains all user inputs
	const [userGeneralData, setUserGeneralData] = useState({
		USER_PERSONAL_DATA: {},
		USER_EDUCATION_DATA: [],
		USER_WORK_EXPERIENCE_DATA: [],
		USER_HOBBIES_DATA: [],
		USER_LANGUAGES_DATA: [],
	});

	//array of hobbies
	const [hobbies, setHobbies] = useState([]);

	//an object of skill types
	const [skills, setSkills] = useState({
		softSkills: [],
		softAvailableSkills: [...SOFT],
		softwareSkills: [],
		softWareAvailableSkills: [...SOFTWARE],
	});

	//array of objects for languages
	const [languages, setLanguages] = useState([]);

	// everything about work experience
	const [userWorkExperiences, setUserWorkExperiences] = useState([]);

	//setting the look of the preview resume
	const [largePreview, setLargePreview] = useState(false);
	function zoomIn() {
		setLargePreview((previousView) => !previousView);
	}
	const [themeSelection, setSelectedThemes] = useState({ ...themeDetails });
	const [sideBarState, setSideBarState] = useState(false);

	const [isPreviewVisible, setIsPreviewVisible] = useState(false);
	const [isAllButtonVisible, setIsAllButtonVisibility] = useState(false);

	return (
		<GeneralComponent.Provider
			value={{
				isPreviewVisible, // for mobile screen and how it should be handled
				setIsPreviewVisible,
				isAllButtonVisible,
				setIsAllButtonVisibility,
			}}>
			<userDataContext.Provider
				value={{
					userGeneralData,
					userPersonalSummary,
					setUserPersonalSummary,
					setUserGeneralData,
					userPersonalData,
					setUserPersonalData,
					userEducationData,
					setUserEducationData,
					workExperienceValues: {
						workExperiences: { userWorkExperiences, setUserWorkExperiences },
					},
					fileName,
					setFileName,
					hobbies,
					setHobbies,
					languages,
					setLanguages,
					skills,
					setSkills,
				}}>
				<themeContext.Provider
					value={{
						largePreview,
						setLargePreview,
						sideBarState,
						setSideBarState,
						themeSelection,
						setSelectedThemes,
					}}>
					<React.Fragment>
						<motion.div
							initial={{ opacity: 0.22 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="min-h-screen flex items-stretch">
							<div className="bg-white h-full p-3 sm:p-5 md:p-11 md:pt-5 w-full lg:w-1/2 mb-8" style={{ fontFamily: baseFont.Syne }}>
								<React.Suspense>
									<ThemeFamily />
								</React.Suspense>
								<ThemeTogglerButton />
								<GoBack />
								<div className="">
									<section className="bg-white" id="user-personal-info">
										<UserIndex />
									</section>
									<div className="mt-8 flex flex-col gap-y-4">
										<section id="user-education">
											<EducationIndex />
										</section>
										<section id="user-work-experience">
											<WorkExperienceIndex />
										</section>
										<section id="user-skills-experience">
											<SkillsIndex />
										</section>
										<section id="user-hobbies">
											<HobbyIndex />
										</section>
										<section id="user-languages-experience">
											<LanguageIndex />
										</section>
									</div>
								</div>
							</div>
							{/* isPreviewVisible ? "right-0" : "-right-full" */}
							<motion.div
								className={`${
									isPreviewVisible ? "right-0" : "-right-full"
								} lg:right-0 scroll bottom-0 top-0 fixed overflow-y-auto z-20 bg-[rgb(134,138,173)] h-full text-sm select-none md:w-2/3 lg:w-1/2 w-[90%] transition-all duration-200 ease-linear  ${
									largePreview ? "lg:w-full overflow-auto" : "w-1/2"
								}`}>
								<div className="top-3 mt-0 sticky mx-5 z-10 items-start left-0">
									<button
										type="button"
										className="bg-main lg:flex hidden shadow-md p-3 rounded-full hover:bg-hoverBgClr relative focus-visible:outline-white"
										onClick={zoomIn}>
										<Icon
											icon={`${largePreview ? "material-symbols:pinch-zoom-in" : "material-symbols:pinch-zoom-out-rounded"}`}
											className="text-white w-6 h-6"
										/>
									</button>
								</div>
								<ResumePreviewPage />
							</motion.div>
						</motion.div>
					</React.Fragment>
				</themeContext.Provider>
			</userDataContext.Provider>
		</GeneralComponent.Provider>
	);
};

export default memo(CreateResumePage);
