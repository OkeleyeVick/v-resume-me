import React, { useContext, useEffect, useState } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import TextArea from "../../FormComponent/TextArea";
import { userDataContext } from "../CreateResumePage";

const UserIndex = () => {
	const { userData, setUserData } = useContext(userDataContext);
	const [userInput, setUserInput] = useState("");

	const handleInputChange = (event) => {
		setUserData((prevData) => ({
			...prevData,
			userDetails: {
				...prevData[userDetails], //get other userDetails info
				[event.target.name]: event.target.value, //set each input based on name
			},
		}));
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
				},
				{
					ariaLabel: "lastname",
					value: "",
					nameLabel: "Lastname",
					inputMode: "text",
					type: "text",
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
				},
				{
					ariaLabel: "phone",
					hasExtraInfo: true,
					tooltipData: "Write start your phone number starting with your country code",
					value: "",
					type: "phone",
					nameLabel: "phone",
					inputMode: "numeric",
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
				},
				{
					ariaLabel: "city",
					nameLabel: "city",
					type: "text",
					value: "",
					inputMode: "text",
				},
			],
		},
		{
			postalcode: [
				{
					ariaLabel: "postal-code",
					nameLabel: "postal code",
					type: "text",
					value: "",
					inputMode: "text",
				},
				{
					ariaLabel: "address",
					nameLabel: "address",
					type: "text",
					value: "",
					inputMode: "text",
				},
				{
					ariaLabel: "dob",
					nameLabel: "Date of Birth",
					hasExtraInfo: true,
					tooltipData: "Type out the DOB in any format you prefer",
					type: "text",
					value: "",
					inputMode: "text",
				},
			],
		},
	];

	return (
		<React.Fragment>
			<div id="title" className="select-none mb-6">
				<span className="flex items-end gap-x-3 text-slate-700">
					<Icon icon="uiw:user" className="w-8 h-8" />
					<h2 className="font-semibold text-xl">Personal Information</h2>
				</span>
			</div>
			<div className="flex flex-col md:grid grid-cols-2 gap-x-8 gap-y-6 md:items-end mb-4">
				<InputWithLabel
					aria-label="position"
					value={userInput}
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
					<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-6 md:items-end mb-4">
						{Object.values(eachDivWrapper).map((detail) => {
							return detail.map(({ inputMode, value, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel }, useDetailIndex) => {
								return (
									<React.Fragment key={useDetailIndex}>
										<InputWithLabel
											inputMode={inputMode}
											label={nameLabel}
											name={ariaLabel}
											value={value}
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
