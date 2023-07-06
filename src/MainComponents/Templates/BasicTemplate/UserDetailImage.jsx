import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { H4 } from "../../../assets/theme/htmlFonts/fontSizes";
import { Link } from "react-router-dom";

const UserDetailImage = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { image, nationality, phone, country, address, dob, email, city } = userPersonalData;

	return (
		<>
			<div className="flex items-center justify-between">
				<div className="user-personal-info">
					{[nationality, phone, country, address, email, dob, city].map((eachUserDetail, index) => {
						return (
							<div className="info-wrapper flex flex-wrap gap-1" key={index}>
								{eachUserDetail.value && (
									<>
										<H4 className="key capitalize">{eachUserDetail.nameLabel}: </H4>
										{eachUserDetail == email ? (
											<Link to="https://www.twitter.com" target="_blank">
												{eachUserDetail.value}
											</Link>
										) : (
											<span className="value">{eachUserDetail.value}</span>
										)}
									</>
								)}
							</div>
						);
					})}
				</div>
				<>
					{image.imageSrc && (
						<div className="user-image rounded-full overflow-hidden aspect-square w-14 h-14">
							<img src={image.imageSrc} alt="user-image" />
						</div>
					)}
				</>
			</div>
		</>
	);
};

export default UserDetailImage;
