import React, { useState } from "react";
import Accordion from "../Components/Accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";

const EducationIndex = () => {
	const [educationValue, setEducationValue] = useState("");
	const [date, setNewDate] = useState(null);

	function handleEducationInput(event) {
		setEducationValue(event.target.value);
	}

	const userDetails = [
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
					value: "",
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
			<div className="mt-12">
				<div id="title" className="select-none">
					<span className="flex items-center gap-x-3">
						<Icon icon="cil:education" className="w-8 h-8" />
						<h2 className="font-bold text-xl">Education</h2>
					</span>
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
														onChange={handleEducationInput}
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
			</div>
		</React.Fragment>
	);
};

export default EducationIndex;
