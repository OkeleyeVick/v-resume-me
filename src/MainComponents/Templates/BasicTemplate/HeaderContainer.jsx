import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Div, H1 } from "../../../assets/theme/fontSizes";

const HeaderContainer = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { firstname, lastname } = userPersonalData;

	function trimText(textValue) {
		return textValue.value.trim();
	}
	return (
		<React.Fragment>
			{(firstname.value || lastname.value) && (
				<div className="mb-3 border-b-2 border-solid">
					<H1 className="block text-center font-extrabold leading-none">
						{trimText(lastname)} {trimText(firstname)}
					</H1>
				</div>
			)}
		</React.Fragment>
	);
};

export default HeaderContainer;
