import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";

const HeaderContainer = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { firstname, lastname } = userPersonalData;

	function trimText(value) {
		return value.trim();
	}
	return (
		<React.Fragment>
			<div className="mb-3">
				<div className="block text-center font-bold text-base leading-none">
					{trimText(lastname.value)} {trimText(firstname.value)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeaderContainer;
