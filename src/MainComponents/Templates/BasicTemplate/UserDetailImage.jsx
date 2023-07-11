import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Div, H4, H5, Link_, ProfileImageContainer, Span } from "../../../assets/theme/fontSizes";

const UserDetailImage = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { image, nationality, phone, country, address, dob, email, city } = userPersonalData;
	const fullAddress = `${returnValue(address)} ${returnValue(city)} ${returnValue(country)}`;

	// return just the value
	function returnValue(detail) {
		return detail.value;
	}

	return (
		<>
			<div className="grid grid-cols-3 items-center gap-2 w-full">
				<div className="user-personal-info col-span-2">
					{[email, phone, nationality, dob].map((eachUserDetail, index) => {
						return (
							<React.Fragment key={index}>
								{returnValue(eachUserDetail) ? (
									<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
										<H5 className="key capitalize font-semibold">{eachUserDetail.nameLabel}: </H5>
										{eachUserDetail === email ? (
											<Link_ href="https://www.twitter.com" target="_blank">
												{returnValue(eachUserDetail)}
											</Link_>
										) : (
											<Span className="value">{returnValue(eachUserDetail)}</Span>
										)}
									</div>
								) : null}
							</React.Fragment>
						);
					})}
					{(returnValue(address) !== "" || returnValue(city) !== "" || returnValue(country) !== "") && (
						<Div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
							<H5 className="font-semibold">Address: </H5>
							<Span>{fullAddress}</Span>
						</Div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					{image.imageSrc ? (
						<ProfileImageContainer className="user-image rounded-full overflow-hidden aspect-square flex items-center justify-between">
							<img src={image.imageSrc} alt="user-image" className="h-full w-full object-cover object-top" />
						</ProfileImageContainer>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
