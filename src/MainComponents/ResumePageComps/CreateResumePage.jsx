import React, { createContext, memo, useState } from "react";
import PersonalComponent from "./NavComponents/PersonalComponent";
import "../../assets/css/fonts.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import InputWithLabel from "../FormComponent/InputComponent";
import ResumePreviewPage from "./ResumePreviewPage";
import ImageUploadComponent from "../FormComponent/ImageUploadComponent";
import NavigationSublet from "./NavigationSublet";
import TemplateDisplay from "./TemplateDisplay";

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
					value: "justusofnigeria@gmail.com",
					nameLabel: "Email",
					type: "email",
					inputMode: "email",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "phone",
					hasExtraInfo: true,
					tooltip: "Tip: Write start your phone number ",
					value: "0909737340",
					type: "phone",
					nameLabel: "phone",
					inputMode: "numeric",
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
				<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
					<div className="bg-white h-full p-5 md:p-11 " style={{ fontFamily: baseFont.Syne }}>
						<div className="flex flex-col md:grid grid-cols-2 gap-x-10 gap-y-6 md:items-end mb-6">
							<InputWithLabel
								aria-label="position"
								value={position}
								name="position"
								label="Position"
								addInput={handleNameInput}
								inputMode="text"
							/>
							<ImageUploadComponent label="Upload photo" />
						</div>
						{userDetails.map((eachDivWrapper, wrapperIndex) => {
							return (
								<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-10 gap-y-6 md:items-end mb-6">
									{Object.values(eachDivWrapper).map((detail) => {
										return detail.map(({ inputMode, ariaLabel, type, hasExtraInfo, nameLabel }, useDetailIndex) => {
											return (
												<React.Fragment key={useDetailIndex}>
													<InputWithLabel inputMode={inputMode} label={nameLabel} aria-label={ariaLabel} type={type} />
												</React.Fragment>
											);
										});
									})}
								</div>
							);
						})}
					</div>
					<div className={`bg-[rgb(134,138,173)] h-full text-sm p-8 select-none relative`} style={{ fontFamily: baseFont.Syne }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut pariatur fugiat magnam minima doloribus! Accusantium,
						minima blanditiis doloribus, tempore odit id quos aperiam tempora nihil eius eligendi incidunt. Quasi.
						<ResumePreviewPage />
					</div>
				</div>
			</componentContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);
