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
	// user initial state
	const userDetails = {
		position: {
			ariaLabel: "position",
			nameLabel: "position",
			inputMode: "text",
			value: "",
			type: "text",
		},
		image: {
			isImage: true,
			nameLabel: "Upload Photo",
			ariaLabel: "image",
			imageSrc: "",
		},
		firstname: {
			ariaLabel: "firstname",
			nameLabel: "firstname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		lastname: {
			ariaLabel: "lastname",
			nameLabel: "lastname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		email: {
			ariaLabel: "email",
			nameLabel: "email",
			type: "email",
			inputMode: "email",
			value: "",
		},
		phone: {
			ariaLabel: "phone",
			hasExtraInfo: true,
			tooltipData: "Write start your phone number starting with your country code",
			type: "phone",
			nameLabel: "phone",
			inputMode: "numeric",
			value: "",
		},
		country: {
			ariaLabel: "country",
			hasExtraInfo: true,
			tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
			nameLabel: "country",
			type: "text",
			inputMode: "text",
			value: "",
		},
		city: {
			ariaLabel: "city",
			nameLabel: "city",
			type: "text",
			inputMode: "text",
			value: "",
		},
		postalCode: {
			ariaLabel: "postalCode",
			nameLabel: "postal code",
			type: "text",
			inputMode: "text",
			value: "",
		},
		address: {
			ariaLabel: "address",
			nameLabel: "address",
			type: "text",
			inputMode: "text",
			value: "",
		},
		dob: {
			ariaLabel: "dob",
			nameLabel: "Date of Birth",
			hasExtraInfo: true,
			tooltipData: "Type out the DOB in any format you prefer",
			type: "text",
			inputMode: "text",
			value: "",
		},
	};

	// all states
	const [userPersonalData, setUserPersonalData] = useState(userDetails);
	const [userGeneralData, setUserGeneralData] = useState({});
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
		<userDataContext.Provider value={{ userGeneralData, setUserGeneralData, userPersonalData, setUserPersonalData }}>
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
