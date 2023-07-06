import React from "react";

const UserInputObjects = () => {
	const educationDetails = [];

	const themeSelection = {
		font: {
			default: "sans-serif", //default font
			customFault: null,
		},
		color: "#000",
	};

	// user initial state
	const userDetails = {
		position: {
			ariaLabel: "position",
			nameLabel: "position",
			inputMode: "text",
			value: "",
			type: "text",
		},
		image: {
			isImage: true,
			nameLabel: "Upload Photo",
			ariaLabel: "image",
			imageSrc: "",
		},
		firstname: {
			ariaLabel: "firstname",
			nameLabel: "firstname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		lastname: {
			ariaLabel: "lastname",
			nameLabel: "lastname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		email: {
			ariaLabel: "email",
			nameLabel: "email",
			type: "email",
			inputMode: "email",
			value: "",
		},
		phone: {
			ariaLabel: "phone",
			hasExtraInfo: true,
			tooltipData: "Write start your phone number starting with your country code",
			type: "phone",
			nameLabel: "phone",
			inputMode: "numeric",
			value: "",
		},
		country: {
			ariaLabel: "country",
			hasExtraInfo: true,
			tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
			nameLabel: "country",
			type: "text",
			inputMode: "text",
			value: "",
		},
		city: {
			ariaLabel: "city",
			nameLabel: "city",
			type: "text",
			inputMode: "text",
			value: "",
		},
		postalCode: {
			ariaLabel: "postalCode",
			nameLabel: "postal code",
			type: "text",
			inputMode: "text",
			value: "",
		},
		address: {
			ariaLabel: "address",
			nameLabel: "address",
			type: "text",
			inputMode: "text",
			value: "",
		},
		nationality: {
			ariaLabel: "nationality",
			nameLabel: "nationality",
			type: "text",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: "If you are applying for a job outside the country, you might want to fill this, otherwise you can leave it blank",
		},
		dob: {
			ariaLabel: "dob",
			nameLabel: "Date of Birth",
			type: "text",
			inputMode: "text",
			value: "",
		},
	};

	// object to create a new education background
	const schoolObject = {
		school: {
			ariaLabel: "school",
			nameLabel: "school",
			inputMode: "text",
			type: "text",
			value: "",
		},
		degree: {
			ariaLabel: "degree",
			nameLabel: "degree",
			inputMode: "text",
			type: "text",
			value: "",
		},
		startDate: {
			hasExtraInfo: true,
			nameLabel: "start date",
			ariaLabel: "startDate",
			inputMode: "text",
			type: "text",
			value: "",
			tooltipData: "Write just the month and year separated by a character",
		},
		endDate: {
			hasExtraInfo: true,
			nameLabel: "end date",
			ariaLabel: "endDate",
			inputMode: "text",
			type: "text",
			value: "",
			tooltipData: "Write just the month and year separated by a character",
		},
	};

	return { educationDetails, userDetails, schoolObject, themeSelection };
};

export default UserInputObjects;
