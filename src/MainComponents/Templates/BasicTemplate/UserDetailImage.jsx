import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Link_, Span, Span1 } from "../../../assets/theme/fontSizes";
import { motion } from "framer-motion";

const UserDetailImage = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { image, nationality, phone, country, address, dob, email, city, postalCode } = userPersonalData;
	const fullAddress = `${returnValue(address)} ${returnValue(city)} ${returnValue(postalCode)} ${returnValue(country)}`;

	// return just the value
	function returnValue(detail) {
		return `${detail.value}`;
	}

	return (
		<>
			<div className="flex justify-between items-center gap-2 w-full mt-10">
				<div className="user-personal-info flex-grow">
					{[email, phone, nationality, dob].map((eachUserDetail, index) => {
						return (
							<React.Fragment key={index}>
								{returnValue(eachUserDetail) ? (
									<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
										<Span1 className="key capitalize text">{eachUserDetail.nameLabel}: </Span1>
										<Span1 className="value text">{returnValue(eachUserDetail)}</Span1>
									</div>
								) : null}
							</React.Fragment>
						);
					})}
					{(returnValue(address) !== "" || returnValue(city) !== "" || returnValue(country) !== "") && (
						<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
							<Span1 className="text key">Address: </Span1>
							<Span1 className="text">{fullAddress}</Span1>
						</div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					<div className="user-image rounded-full overflow-hidden aspect-square flex items-center justify-between w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
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
							className="h-full w-full object-cover object-top"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
