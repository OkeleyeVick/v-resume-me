import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Div, H4, Link_, Span } from "../../../assets/theme/htmlFonts/fontSizes";

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
					{[email, nationality, phone, dob].map((eachUserDetail, index) => {
						return (
							<div className="info-wrapper flex items-center flex-wrap leading-tight gap-[2px]" key={index}>
								{returnValue(eachUserDetail) && (
									<>
										<H4 className="key capitalize font-semibold">{eachUserDetail.nameLabel}: </H4>
										{eachUserDetail === email ? (
											<Link_ href="https://www.twitter.com" target="_blank">
												{returnValue(eachUserDetail)}
											</Link_>
										) : (
											<Span className="value">{returnValue(eachUserDetail)}</Span>
										)}
									</>
								)}
							</div>
						);
					})}
					{(returnValue(address) !== "" || returnValue(city) !== "" || returnValue(country) !== "") && (
						<Div className="flex items-center gap-[2px] leading-tight">
							<H4 className="font-semibold">Address: </H4>
							<Span>{fullAddress}</Span>
						</Div>
					)}
				</div>
				<div className="col-span-1 text-end flex items-center justify-end">
					{image.imageSrc ? (
						<Div className="user-image rounded-full overflow-hidden aspect-square w-14 h-14 flex items-center justify-between">
							<img src={image.imageSrc} alt="user-image" className="h-full w-full object-cover object-top" />
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
