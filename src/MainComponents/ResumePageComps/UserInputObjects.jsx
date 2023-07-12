const UserInputObjects = () => {
	const workExperienceDetails = {
		listOfExperiences: [],
	};

	const themeDetails = {
		themeSideBar: {
			// checks if theme sidebar is open
			isThemeSideBarOpen: false,
		},
		font: {
			family: {
				//font that the user selects
				default: "Roboto",
				customFont: null,
			},
			fontSize: "16px",
			lineHeight: {},
			fontSelection: {
				isFontDropdownActive: false,
			},
		},
		userResumeColor: {
			selectedColor: {
				// resume color that a user picks
				default: "#000",
				color: "#000",
			},
			colorSelectionMenu: {
				//is React color active
				isToggleThemeActive: false,
			},
		},
		backgroundPattern: {},
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
		lastname: {
			ariaLabel: "lastname",
			nameLabel: "lastname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		firstname: {
			ariaLabel: "firstname",
			nameLabel: "firstname",
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
			type: "tel",
			nameLabel: "phone",
			inputMode: "numeric",
			value: "",
		},
		address: {
			ariaLabel: "address",
			nameLabel: "address",
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
		country: {
			ariaLabel: "country",
			hasExtraInfo: true,
			tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
			nameLabel: "country",
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

	return { userDetails, themeDetails, workExperienceDetails };
};

export default UserInputObjects;
