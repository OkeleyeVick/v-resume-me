import React, { createContext, memo, useState } from "react";
import PersonalComponent from "./NavComponents/PersonalComponent";
import "../../assets/css/fonts.css";
import InputWithLabel from "../FormComponent/InputComponent";
import ResumePreviewPage from "./ResumePreviewPage";
import ImageUploadComponent from "../FormComponent/ImageUploadComponent";
import EducationSectionBase from "./EducationSection/EducationSectionBase";
// import NavigationSublet from "./NavigationSublet";
// import TemplateDisplay from "./TemplateDisplay";

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

export const componentContext = createContext();

const CreateResumePage = () => {
	const [component, setComponent] = useState(<PersonalComponent />);
	const [font, setFont] = useState("Mulish");
	const [position, setJobPosition] = useState("");

	const handleNameInput = (event) => {
		setJobPosition(event.target.value);
	};

	const userDetails = [
		{
			names: [
				{
					ariaLabel: "firstname",
					value: "Victor",
					nameLabel: "firstname",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "lastname",
					value: "Okeleye",
					nameLabel: "Lastname",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
		{
			emailPhone: [
				{
					ariaLabel: "email",
					nameLabel: "Email",
					type: "email",
					value: "",
					inputMode: "email",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "phone",
					hasExtraInfo: true,
					tooltipData: "Write start your phone number starting with your country code",
					value: "0909737340",
					type: "phone",
					nameLabel: "phone",
					inputMode: "numeric",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
		{
			CountryCity: [
				{
					ariaLabel: "country",
					hasExtraInfo: true,
					tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
					nameLabel: "Country",
					type: "text",
					value: "",
					inputMode: "text",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "city",
					nameLabel: "city",
					type: "text",
					value: "",
					inputMode: "text",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
		{
			postalcode: [
				{
					ariaLabel: "postal code",
					nameLabel: "postal code",
					type: "text",
					value: "",
					inputMode: "text",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "address",
					nameLabel: "address",
					type: "text",
					value: "",
					inputMode: "text",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
	];

	return (
		<React.Fragment>
			<componentContext.Provider value={{ font, setFont, component, setComponent }}>
				{/* <div className="lg:flex min-h-screen relative" style={{ fontFamily: baseFont.Syne }}>
					<div className={`fixed lg:hidden w-full h-full z-[90] backdrop-blur-[2px] bg-black bg-opacity-20`}></div>
					<div className={`flex items-center fixed z-[99] w-[90%] sm:w-3/5 md:w-2/4 lg:relative lg:w-[35%] xl:w-[31.5%] h-screen`}>
						<Navigation />
						<NavigationSublet />
					</div>
					<div className="h-screen lg:w-[65%] xl:w-[69.5%] bg-custom_1">
						<TemplateDisplay />
					</div>
				</div> */}
				<div className="min-h-screen flex items-stretch">
					<div className="bg-white h-full p-5 md:p-11 w-1/2" style={{ fontFamily: baseFont.SpaceGrotesk }}>
						<section id="user-info">
							<div className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
								<InputWithLabel
									aria-label="position"
									value={position}
									name="position"
									hasDropdown
									label="Position"
									placeholder="e.g. Teacher"
									addInput={handleNameInput}
									inputMode="text"
								/>
								<ImageUploadComponent label="Upload photo" />
							</div>
							{userDetails.map((eachDivWrapper, wrapperIndex) => {
								return (
									<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
										{Object.values(eachDivWrapper).map((detail) => {
											return detail.map(
												({ inputMode, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel }, useDetailIndex) => {
													return (
														<React.Fragment key={useDetailIndex}>
															<InputWithLabel
																inputMode={inputMode}
																label={nameLabel}
																aria-label={ariaLabel}
																type={type}
																tooltip={tooltipData}
																hasExtraInfo={hasExtraInfo}
															/>
														</React.Fragment>
													);
												}
											);
										})}
									</div>
								);
							})}
						</section>
						<section id="user-edu">
							<EducationSectionBase />
						</section>
					</div>
					<div
						className={`w-1/2 right-0 top-0 fixed bg-[rgb(134,138,173)] h-full text-sm p-8 select-none`}
						style={{ fontFamily: baseFont.Syne }}>
						<ResumePreviewPage />
					</div>
				</div>
			</componentContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);

// htmls tags
// <s><s/> for strike through
// <u></u> for underline
// <b><b/> for bold text
// all three tags has to do with the selection first
