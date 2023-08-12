const UserInputObjects = () => {
	// user initial state
	const options = "Optional if you don't have one";
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
			tooltipData: "Start phone number with your country code if you are applying for a remote jon",
			type: "tel",
			nameLabel: "phone",
			inputMode: "numeric",
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
		portfolio_link: {
			ariaLabel: "portfolio_link",
			nameLabel: "Portfolio or Website URL",
			type: "url",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: `Enter your portfolio or any link that showcases your projects and works. ${options}`,
		},
		profile_link: {
			ariaLabel: "profile_link",
			nameLabel: "Profile link",
			type: "url",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: `Enter your Github, Gitlab, Bitbucket, Behance or Dribbble profile link. ${options}`,
		},
		linkedIn: {
			ariaLabel: "linkedIn",
			nameLabel: "LinkedIn URL",
			type: "url",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: `Enter your Linkedin profile URL. ${options}`,
		},
	};

	return { userDetails };
};

export default UserInputObjects;
