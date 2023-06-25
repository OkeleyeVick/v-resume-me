import React, { useContext, useState } from "react";
import Accordion from "../Components/Accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { accordionIndexContext } from "../CreateResumePage";

const EducationIndex = () => {
	const { accordionIndex, setAccordionIndex } = useContext(accordionIndexContext);
	const [educationValue, setEducationValue] = useState("");
	const [date, setNewDate] = useState(null);

	function handleEducationInput(event) {
		setEducationValue(event.target.value);
	}

	const educationDetails = [
		{
			names: [
				{
					ariaLabel: "firstname",
					value: "",
					nameLabel: "firstname",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
				{
					ariaLabel: "lastname",
					value: "",
					nameLabel: "Lastname",
					inputMode: "text",
					type: "text",
					actionFunction: () => console.log("I am for here"),
				},
			],
		},
	];

	function toggleAccordion(event) {
		console.log(event.target);
	}

	return (
		<React.Fragment>
			<div className="mt-8">
				<Accordion toggleAccordion={toggleAccordion}>
					{educationDetails.map((eachDivWrapper, wrapperIndex) => {
						return (
							<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
								{Object.values(eachDivWrapper).map((detail) => {
									return detail.map(({ inputMode, ariaLabel, type, actionFunction, value, nameLabel }, useDetailIndex) => {
										return (
											<React.Fragment key={useDetailIndex}>
												<InputWithLabel
													aria-label={ariaLabel}
													handleInputChange={handleEducationInput}
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

export default EducationIndex;
