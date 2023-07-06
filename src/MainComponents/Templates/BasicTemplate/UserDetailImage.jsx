import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

const UserDetailImage = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { image } = userPersonalData;
	return (
		<div className="user-image rounded-full overflow-hidden aspect-square w-20 h-20">
			<img src={image.imageSrc} alt="" />
		</div>
	);
};

export default UserDetailImage;
