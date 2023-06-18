import React, { createContext, memo, useState } from "react";
import PersonalComponent from "./NavComponents/PersonalComponent";
import "../../assets/css/fonts.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import InputWithLabel from "../FormComponent/InputComponent";
import ResumePreviewPage from "./ResumePreviewPage";

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
};

export const componentContext = createContext();

<Accordion>
	<AccordionSummary expandIcon={"+"} aria-controls="panel1a-content" id="panel1a-header">
		<Typography>Accordion 1</Typography>
	</AccordionSummary>
	<AccordionDetails>
		<Typography>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
		</Typography>
	</AccordionDetails>
</Accordion>;

const CreateResumePage = () => {
	const [component, setComponent] = useState(<PersonalComponent />);
	const [font, setFont] = useState("Mulish");
	const [fname, setFname] = useState("");
	const [age, setAge] = useState("");

	const handleNameInput = (event) => {
		setFname((previous) => (previous = event.target.value));
	};
	const handleAgeInput = (event) => {
		setAge((previous) => (previous = event.target.value));
	};

	return (
		<React.Fragment>
			<componentContext.Provider value={{ font, setFont, component, setComponent }}>
				{/* <div className="lg:flex min-h-screen relative" style={{ fontFamily: baseFont.Syne }}>
						<div
							className={`fixed lg:hidden w-full h-full z-[90] backdrop-blur-[2px] bg-black bg-opacity-20 ${
								isActiveMobileMenu ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
							}`}></div>
						<div
							className={`flex items-center fixed z-[99] w-[90%] sm:w-3/5 md:w-2/4 lg:relative lg:w-[35%] xl:w-[31.5%] h-screen ${
								isActiveMobileMenu ? "left-0 translate-x-0" : "-left-full lg:left-0 -translate-x-3 lg:-translate-x-0"
							}`}>
							<Navigation />
							<NavigationSublet />
						</div>
						<div className="h-screen lg:w-[65%] xl:w-[69.5%] bg-custom_1">
							<TemplateDisplay />
						</div>
					</div> */}
				<div className="grid grid-cols-2">
					<div className="bg-white min-h-screen p-4" style={{ fontFamily: baseFont.Syne }}>
						<InputWithLabel
							aria-label="fullname"
							value={fname}
							name="fullname"
							label="Fullname"
							addInput={handleNameInput}
							inputMode="text"
						/>
						{fname}
						<InputWithLabel aria-label="age" label="Age" value={age} name="age" addInput={handleAgeInput} inputMode="numeric" />
						{age}
					</div>
					<div className={`bg-[rgb(134,138,173)] p-8 select-none relative`} style={{ fontFamily: baseFont.Syne }}>
						<ResumePreviewPage />
					</div>
				</div>
			</componentContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);
