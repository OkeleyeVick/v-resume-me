import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Div, H4, Span } from "../../../assets/theme/htmlFonts/fontSizes";
import { Link } from "react-router-dom";

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
			<div className="grid grid-cols-3 gap-2 justify-between">
				<div className="user-personal-info col-span-2">
					{[email, nationality, phone, dob].map((eachUserDetail, index) => {
						return (
							<div className="info-wrapper flex items-start flex-wrap gap-1" key={index}>
								{returnValue(eachUserDetail) && (
									<>
										<H4 className="key capitalize font-semibold">{eachUserDetail.nameLabel}: </H4>
										{eachUserDetail === email ? (
											<Link to="https://www.twitter.com" target="_blank">
												{eachUserDetail.value}
											</Link>
										) : (
											<Span className="value">{eachUserDetail.value}</Span>
										)}
									</>
								)}
							</div>
						);
					})}
					{(address.value !== "" || city.value !== "" || country.value !== "") && (
						<Div className="flex items-start gap-1 leading-tight">
							<H4>Address: </H4>
							<Span>{fullAddress}</Span>
						</Div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					{image.imageSrc ? (
						<Div className="user-image rounded-full overflow-hidden aspect-square w-14 h-14 flex items-center justify-between">
							<img src={image.imageSrc} alt="user-image" className="" />
						</Div>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export default UserDetailImage;
