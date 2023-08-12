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
	const { image, phone, country, email, city, firstname, lastname, position, portfolio_link, profile_link, linkedIn } = userPersonalData;

	const trimText = (textValue) => (textValue ? textValue.value.trim() : null); // return just the value

	function getIcontype(link) {
		let result;
		switch (link) {
			case "bitbucket":
				return (result = "ion:logo-bitbucket");
			case "github":
				return (result = "akar-icons:github-fill");
			case "gitlab":
				return (result = "simple-icons:gitlab");
			case "dribbble":
				return (result = "mingcute:dribbble-fill");
			case "behance":
				return (result = "uil:behance");
		}
		return result;
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
			value: trimText(phone),
			icon: "fluent:phone-24-filled",
		},
		{
			value: trimText(portfolio_link),
			icon: "fa6-solid:globe",
		},
		{
			value: trimText(linkedIn),
			icon: "uil:linkedin",
		},
		{
			value: trimText(profile_link),
			icon: getIcontype(trimText(profile_link)) ?? "fluent:person-link-24-filled",
		},
	];

	return (
		<>
			<div className="flex justify-between gap-2 w-full">
				<div className="text-end flex gap-3 mt-2">
					<div className="user-image rounded-full flex items-center justify-center overflow-hidden aspect-square w-[6rem] h-[6rem]">
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
							className="h-full w-full object-cover object-center scale-[1.1] aspect-square"
						/>
					</div>
					<span className="flex flex-col items-start mt-4">
						{(firstname.value || lastname.value) && (
							<h1 className="uppercase font-semibold text-start block" style={{ fontSize: 22, color: `${color}` }}>
								{trimText(lastname)} {trimText(firstname)}
							</h1>
						)}
						{position.value && <h6 className="mt-1 font-semibold text-base text-gray-600">{trimText(position)}</h6>}
					</span>
				</div>
				<div className="user-personal-info flex flex-col gap-y-[.25rem]">
					{newList.map(({ value, icon }, index) => {
						return (
							<React.Fragment key={index}>
								<div className="info-wrapper flex items-end flex-wrap justify-end leading-tight gap-[.4rem]">
									<Span1 className="value text">{value}</Span1>
									<Icon icon={icon} className="h-[.9rem] w-[.9rem] text-gray-600" />
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<div className="mt-4 leading-3">
				{userPersonalSummary && <small className="d-block text-start mt-4" dangerouslySetInnerHTML={{ __html: userPersonalSummary }}></small>}
			</div>
		</>
	);
};

export default UserDetailImage;
