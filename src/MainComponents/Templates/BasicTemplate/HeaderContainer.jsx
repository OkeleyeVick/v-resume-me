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
				<div className="mb-3 border-b border-solid">
					<h1 className={`block text-center font-extrabold leading-none ${largePreview ? "text-xl" : "text-[14px]"}`}>
						{trimText(lastname)} {trimText(firstname)}
					</h1>
				</div>
			)}
		</React.Fragment>
	);
};

export default HeaderContainer;
