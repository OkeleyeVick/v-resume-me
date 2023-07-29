import React, { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";

const HeaderContainer = () => {
	const { largePreview } = useContext(themeContext);
	const { userPersonalData } = useContext(userDataContext);
	const { firstname, lastname } = userPersonalData;

	function trimText(textValue) {
		return textValue.value.trim();
	}

	return (
		<React.Fragment>
			{(firstname.value || lastname.value) && (
				<div className="flex-grow text-center">
					<h1 className="font-extrabold uppercase" style={{ fontSize: 26 }}>
						{trimText(lastname)} {trimText(firstname)}
					</h1>
				</div>
			)}
		</React.Fragment>
	);
};

export default HeaderContainer;
