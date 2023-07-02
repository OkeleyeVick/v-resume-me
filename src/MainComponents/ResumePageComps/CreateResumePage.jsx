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
	const userDetails = [
		{
			positionImage: [
				{
					ariaLabel: "position",
					nameLabel: "position",
					inputMode: "text",
					value: "",
					type: "text",
					runUpdate: updateTheDetail,
				},
				{
					isImage: true,
					nameLabel: "Upload Photo",
					ariaLabel: "image",
					imageSrc: "",
					updateProfileImage: updateProfileImage,
				},
			],
		},
		{
			names: [
				{
					ariaLabel: "firstname",
					nameLabel: "firstname",
					inputMode: "text",
					value: "",
					type: "text",
					runUpdate: updateTheDetail,
				},
				{
					runUpdate: updateTheDetail,
					ariaLabel: "lastname",
					nameLabel: "lastname",
					inputMode: "text",
					value: "",
					type: "text",
				},
			],
		},
		{
			emailPhone: [
				{
					ariaLabel: "email",
					nameLabel: "email",
					type: "email",
					inputMode: "email",
					value: "",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "phone",
					hasExtraInfo: true,
					tooltipData: "Write start your phone number starting with your country code",
					type: "phone",
					nameLabel: "phone",
					inputMode: "numeric",
					value: "",
					runUpdate: updateTheDetail,
				},
			],
		},
		{
			CountryCity: [
				{
					ariaLabel: "country",
					hasExtraInfo: true,
					tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
					nameLabel: "country",
					type: "text",
					inputMode: "text",
					value: "",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "city",
					nameLabel: "city",
					type: "text",
					inputMode: "text",
					value: "",
					runUpdate: updateTheDetail,
				},
			],
		},
		{
			postalcodeAddress: [
				{
					ariaLabel: "postal-code",
					nameLabel: "postal code",
					type: "text",
					inputMode: "text",
					value: "",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "address",
					nameLabel: "address",
					type: "text",
					inputMode: "text",
					value: "",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "dob",
					nameLabel: "Date of Birth",
					hasExtraInfo: true,
					tooltipData: "Type out the DOB in any format you prefer",
					type: "text",
					inputMode: "text",
					value: "",
					runUpdate: updateTheDetail,
				},
			],
		},
	];

	// all states
	const [userData, setUserData] = useState(userDetails);
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

	function updateTheDetail(value, field) {
		setUserData((prev) => ({
			...prev,
			[field ?? field]: value, //if the field does not exist, create one and update the value
		}));
	}
	function updateProfileImage(imageBlobFile) {
		setUserData((prevUserData) => {
			console.log(prevUserData[0], prevUserData);
			return [...prevUserData];
		});
	}
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
