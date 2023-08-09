import React, { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText, Link_, Span, Span1 } from "../../../assets/theme/fontSizes";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const UserDetailImage = () => {
	const { userPersonalData, userPersonalSummary } = useContext(userDataContext);
	const { themeSelection } = useContext(themeContext);

	const {
		userResumeColor: {
			selectedColor: { color },
		},
	} = themeSelection;
	// const { image, nationality, phone, country, address, dob, email, city, postalCode, firstname, lastname, position } = userPersonalData;
	// const fullAddress = `${trimText(address)} ${trimText(city)} ${trimText(postalCode)} ${trimText(country)}`;
	const { image, phone, country, email, city, firstname, lastname, position, webLink, github, linkedIn, designers_link } = userPersonalData;

	// return just the value
	function trimText(textValue) {
		return textValue.value.trim();
	}

	function getIcontype(link) {
		let result;
		if (link) {
			const weblink = link.toLowerCase();
			if (weblink.includes("bitbucket")) result = "ion:logo-bitbucket";
			if (weblink.includes("github")) result = "akar-icons:github-fill";
			if (weblink.includes("gitlab")) result = "simple-icons:gitlab";
		}
		return result;
	}

	function getDesignersIcon(link) {
		let resultIcon;
		if (link) {
			const webLink = link.toLowerCase();
			if (webLink.includes("dribbble")) resultIcon = "mingcute:dribbble-fill";
			if (webLink.includes("behance")) resultIcon = "uil:behance";
		}
		return resultIcon;
	}

	const newList = [
		{
			value: trimText(email),
			icon: "clarity:envelope-solid",
		},
		{
			value: `${trimText(city)}, ${trimText(country)}`,
			icon: "zondicons:location",
		},
		{
			value: trimText(github),
			icon: getIcontype(trimText(github)) ?? "akar-icons:github-fill",
		},
		{
			value: trimText(webLink),
			icon: "fa6-solid:globe",
		},
		{
			value: trimText(phone),
			icon: "fluent:phone-24-filled",
		},
		{
			value: trimText(linkedIn),
			icon: "uil:linkedin",
		},
		{
			value: trimText(designers_link),
			icon: getDesignersIcon(trimText(designers_link)),
		},
	];

	return (
		<>
			<div className="flex justify-between items-center gap-2 w-full">
				<div className="text-end flex gap-3 justify-end">
					<div className="user-image rounded-full overflow-hidden aspect-square flex items-center justify-between w-[6rem] h-[6rem]">
						<motion.img
							animate={{ opacity: 1 }}
							initia={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							src={
								image.imageSrc
									? image.imageSrc
									: `https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg`
							}
							alt="user-image"
							className="h-full w-full object-cover object-center scale-[1.1]"
						/>
					</div>
					<span className="flex flex-col items-start mt-4">
						{(firstname.value || lastname.value || userPersonalSummary) && (
							<h1 className="uppercase font-semibold text-start block" style={{ fontSize: 22, color: `${color}` }}>
								{trimText(lastname)} {trimText(firstname)}
							</h1>
						)}
						{position.value && <h6 className="mt-1 font-semibold text-base text-gray-600">{trimText(position)}</h6>}
						{userPersonalSummary && <small dangerouslySetInnerHTML={{ __html: userPersonalSummary }}></small>}
					</span>
				</div>
				<div className="user-personal-info flex flex-col gap-y-2">
					{newList.map(({ value, icon }, index) => {
						return (
							<React.Fragment key={index}>
								<div className="info-wrapper flex items-end flex-wrap justify-end leading-tight gap-2">
									<Span1 className="value text">{value}</Span1>
									<Icon icon={icon} className="h-4 w-4 text-gray-600" />
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
