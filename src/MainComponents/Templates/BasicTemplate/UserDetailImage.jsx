import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Link } from "react-router-dom";

const UserDetailImage = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { image, nationality, phone, country, address, dob, email, city, postalCode } = userPersonalData;
	const fullAddress = `${returnValue(address)} ${returnValue(city)} ${returnValue(postalCode)} ${returnValue(country)}`;

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
										<h5 className="key capitalize font-semibold">{eachUserDetail.nameLabel}: </h5>
										{eachUserDetail === email ? (
											<Link to="https://www.twitter.com" target="_blank" className="text-blue-900 underline">
												{returnValue(eachUserDetail)}
											</Link>
										) : (
											<span className="value">{returnValue(eachUserDetail)}</span>
										)}
									</div>
								) : null}
							</React.Fragment>
						);
					})}
					{(returnValue(address) !== "" || returnValue(city) !== "" || returnValue(country) !== "") && (
						<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]">
							<h5 className="font-semibold">Address: </h5>
							<span>{fullAddress}</span>
						</div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					{image.imageSrc ? (
						<div className="user-image rounded-full overflow-hidden aspect-square flex items-center justify-between w-12">
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
