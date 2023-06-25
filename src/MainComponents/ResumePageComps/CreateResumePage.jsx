import React, { createContext, memo, useState } from "react";
import PersonalComponent from "./NavComponents/PersonalComponent";
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

export const componentContext = createContext();

const CreateResumePage = () => {
	const [component, setComponent] = useState(<PersonalComponent />);
	const [font, setFont] = useState("Mulish");

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
							<UserIndex />
						</section>
						<section id="user-education">{/* <EducationIndex /> */}</section>
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
