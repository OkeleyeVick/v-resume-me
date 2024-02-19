import React, { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Span1 } from "../../../assets/theme/fontSizes";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import defaultProfileImage from "../../../assets/images/PageImages/user-default-profile-image.jpg";

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
		switch (true) {
			case link.includes("bitbucket"):
				return (result = "ion:logo-bitbucket");
			case link.includes("github"):
				return (result = "akar-icons:github-fill");
			case link.includes("gitlab"):
				return (result = "simple-icons:gitlab");
			case link.includes("dribbble"):
				return (result = "mingcute:dribbble-fill");
			case link.includes("behance"):
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
			value: `${trimText(city)}${trimText(country).length > 0 ? ", " : ""}${trimText(country)}`,
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
			icon: getIcontype(trimText(profile_link).toLowerCase()) ?? "fluent:person-link-24-filled",
		},
	];

	return (
		<>
			<div className="flex justify-between w-full">
				<div className="text-end grid grid-cols-5 mt-2 space-x-4">
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						className="user-image col-span-1 rounded-full flex items-center justify-center overflow-hidden aspect-square w-[5.5rem] h-[5.5rem] relative">
						<motion.img
							animate={{ scale: 1 }}
							initial={{ scale: 0 }}
							exit={{ scale: 0 }}
							src={image.imageSrc ? image.imageSrc : `${defaultProfileImage}`}
							alt="user-image"
							className="h-full w-full object-cover object-center scale-[1.1] aspect-square"
						/>
					</motion.div>
					<div className="flex flex-col col-span-3 items-start mt-4 text-start flex-grow">
						{(firstname.value || lastname.value) && (
							<motion.h1
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								className="uppercase font-extrabold text-start block"
								style={{ fontSize: 22, color: `${color}` }}>
								{trimText(lastname)} {trimText(firstname)}
							</motion.h1>
						)}
						{position.value && (
							<motion.h6
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								className="mt-[8px] font-semibold flex leading-4 text-base text-gray-600">
								{trimText(position)}
							</motion.h6>
						)}
					</div>
				</div>
				<div className="user-personal-info flex flex-col gap-y-[.3rem]">
					{newList.map(({ value, icon }, index) => {
						return (
							<React.Fragment key={index}>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="info-wrapper flex items-end flex-nowrap justify-end leading-tight gap-[.4rem]">
									<Span1 className="value text whitespace-nowrap">{value}</Span1>
									<motion.i initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
										<Icon icon={icon} className="h-[.9rem] w-[.9rem] text-gray-600" />
									</motion.i>
								</motion.div>
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
