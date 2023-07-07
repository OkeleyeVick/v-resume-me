import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { Div } from "../../../assets/theme/htmlFonts/fontSizes";

const HeaderContainer = () => {
	const { userPersonalData } = useContext(userDataContext);
	const { firstname, lastname } = userPersonalData;

	function trimText(textValue) {
		return textValue.value.trim();
	}
	return (
		<React.Fragment>
			<div className="mb-3">
				{(firstname.value || lastname.value) && (
					<Div className="block text-center font-bold text-base leading-none">
						{trimText(lastname)} {trimText(firstname)}
					</Div>
				)}
			</div>
		</React.Fragment>
	);
};

export default HeaderContainer;
