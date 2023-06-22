import React from "react";
import Accordion from "../Components/Accordion";
import InputWithLabel from "../../FormComponent/InputComponent";

const EducationSectionBase = () => {
	const educationDetails = [
		{
			names: [
				{
					ariaLabel: "school",
					value: "",
					nameLabel: "school",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "degree",
					value: "",
					nameLabel: "Degree",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
	];

	return (
		<React.Fragment>
			<div id="title">
				<h2 className="font-bold">Education</h2>
				<small className="text-label_clr">Enter the little info about your educational background and how what to do</small>
			</div>
			<div className="mt-4">
				<Accordion>
					{educationDetails.map((eachDivWrapper, wrapperIndex) => {
						return (
							<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
								{Object.values(eachDivWrapper).map((detail) => {
									return detail.map(({ inputMode, ariaLabel, type, actionFunction, value, nameLabel }, useDetailIndex) => {
										return (
											<React.Fragment key={useDetailIndex}>
												<InputWithLabel
													aria-label={ariaLabel}
													actionFunction={actionFunction}
													value={value}
													inputMode={inputMode}
													type={type}
													label={nameLabel}
												/>
											</React.Fragment>
										);
									});
								})}
							</div>
						);
					})}
				</Accordion>
			</div>
		</React.Fragment>
	);
};

export default EducationSectionBase;
