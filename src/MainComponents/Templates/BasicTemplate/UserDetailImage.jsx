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
	const { image, nationality, phone, country, email, city, firstname, lastname, position } = userPersonalData;
	const fullAddress = `${trimText(city)} ${trimText(country)}`;

	// return just the value
	function trimText(textValue) {
		return textValue.value.trim();
	}

	console.log(position);

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
					</span>
				</div>
				<div className="user-personal-info flex flex-col gap-y-2">
					{[email, phone, nationality].map((eachUserDetail, index) => {
						return (
							<React.Fragment key={index}>
								{trimText(eachUserDetail) ? (
									<div className="info-wrapper flex items-end flex-wrap justify-end leading-tight gap-2">
										<Span1 className="value text">{trimText(eachUserDetail)}</Span1>
										{eachUserDetail?.icon ? (
											<Icon icon={eachUserDetail?.icon} className="h-4 w-4 text-gray-600" />
										) : (
											<Span1 className="key capitalize text">{eachUserDetail.nameLabel}</Span1>
										)}
									</div>
								) : null}
							</React.Fragment>
						);
					})}
					{(trimText(city) !== "" || trimText(country) !== "") && (
						<div className="info-wrapper flex items-end	 flex-wrap justify-end leading-tight gap-1">
							<Span1 className="text value">{fullAddress}</Span1>
							{address.icon ? (
								<Icon icon={address.icon} className="h-4 w-4 text-gray-600" />
							) : (
								<Span1 className="text key">Address</Span1>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
