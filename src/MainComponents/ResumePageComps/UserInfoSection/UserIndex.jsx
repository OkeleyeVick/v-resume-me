import React, { useState } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import TextArea from "../../FormComponent/TextArea";

const UserIndex = () => {
	const [position, setJobPosition] = useState("");

	const handleInputChange = (event) => {
		setJobPosition(event.target.value);
	};
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
			<div id="title" className="select-none mb-6">
				<span className="flex items-end gap-x-3 text-slate-700">
					<Icon icon="uiw:user" className="w-8 h-8" />
					<h2 className="font-bold text-xl">Personal Information</h2>
				</span>
			</div>
			<div className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
				<InputWithLabel
					aria-label="position"
					value={position}
					name="position"
					hasDropdown
					label="Position"
					placeholder="e.g. Teacher"
					handleInputChange={handleInputChange}
					inputMode="text"
				/>
				<ImageUploadComponent label="Upload photo" />
			</div>
			{userDetails.map((eachDivWrapper, wrapperIndex) => {
				return (
					<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
						{Object.values(eachDivWrapper).map((detail) => {
							return detail.map(({ inputMode, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel }, useDetailIndex) => {
								return (
									<React.Fragment key={useDetailIndex}>
										<InputWithLabel
											inputMode={inputMode}
											label={nameLabel}
											aria-label={ariaLabel}
											type={type}
											handleInputChange={handleInputChange}
											tooltip={tooltipData}
											hasExtraInfo={hasExtraInfo}
										/>
									</React.Fragment>
								);
							});
						})}
					</div>
				);
			})}
			<div className="summary">
				<TextArea label="summary" aria-label="summary" hasSubText />
			</div>
		</React.Fragment>
	);
};

export default UserIndex;
