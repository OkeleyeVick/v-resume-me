import React, { useContext, useEffect, useState } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import TextArea from "../../FormComponent/TextArea";
import { userDataContext } from "../CreateResumePage";

const UserIndex = () => {
	const { userData, setUserData } = useContext(userDataContext);

	function updateTheDetail(value, field) {
		setUserData((prev) => ({
			...prev,
			[field ?? field]: value, //if the field does not exist, create one and update the value
		}));
	}

	function updateProfileImage(imageBlobFile) {
		setUserData((prevData) => ({
			...prevData,
			userImage: imageBlobFile,
		}));
	}

	console.log(userData);

	const userDetails = [
		{
			names: [
				{
					ariaLabel: "firstname",
					nameLabel: "firstname",
					inputMode: "text",
					type: "text",
					runUpdate: updateTheDetail,
				},
				{
					runUpdate: updateTheDetail,
					ariaLabel: "lastname",
					nameLabel: "lastname",
					inputMode: "text",
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
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "phone",
					hasExtraInfo: true,
					tooltipData: "Write start your phone number starting with your country code",
					type: "phone",
					nameLabel: "phone",
					inputMode: "numeric",
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
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "city",
					nameLabel: "city",
					type: "text",
					inputMode: "text",
					runUpdate: updateTheDetail,
				},
			],
		},
		{
			postalcode: [
				{
					ariaLabel: "postal-code",
					nameLabel: "postal code",
					type: "text",
					inputMode: "text",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "address",
					nameLabel: "address",
					type: "text",
					inputMode: "text",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "dob",
					nameLabel: "Date of Birth",
					hasExtraInfo: true,
					tooltipData: "Type out the DOB in any format you prefer",
					type: "text",
					inputMode: "text",
					runUpdate: updateTheDetail,
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
					value={userData.position}
					name="position"
					hasDropdown
					runUpdate={updateTheDetail}
					label="Position"
					placeholder="e.g. Teacher"
					inputMode="text"
				/>
				<ImageUploadComponent label="Upload photo" updateProfileImage={updateProfileImage} />
			</div>
			{userDetails.map((eachDivWrapper, wrapperIndex) => {
				return (
					<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-6 md:items-end mb-4">
						{Object.values(eachDivWrapper).map((detail) => {
							return detail.map(({ inputMode, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel, runUpdate }, useDetailIndex) => {
								return (
									<React.Fragment key={useDetailIndex}>
										<InputWithLabel
											inputMode={inputMode}
											label={nameLabel}
											name={ariaLabel}
											value={userData[ariaLabel]}
											aria-label={ariaLabel}
											type={type}
											runUpdate
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
