import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Link_, Span, Span1 } from "../../../assets/theme/fontSizes";

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
										{eachUserDetail === email ? (
											<Link_ to="https://www.twitter.com" className="text-blue-900 underline">
												{returnValue(eachUserDetail)}
											</Link_>
										) : (
											<Span1 className="value text">{returnValue(eachUserDetail)}</Span1>
										)}
									</div>
								) : null}
							</React.Fragment>
						);
					})}
					{(returnValue(address) !== "" || returnValue(city) !== "" || returnValue(country) !== "") && (
						<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
							<Span1 className="text">Address: </Span1>
							<Span1 className="text">{fullAddress}</Span1>
						</div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					{image.imageSrc ? (
						<div
							className="user-image rounded-full overflow-hidden aspect-square flex items-center justify-between"
							style={{ height: 100, width: 100 }}>
							<img src={image.imageSrc} alt="user-image" className="h-full w-full object-cover object-top" />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
