import React, { useContext } from "react";
import { userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText } from "../../../assets/theme/fontSizes";

const HeaderContainer = () => {
	const { userPersonalData, userPersonalSummary } = useContext(userDataContext);
	const { firstname, lastname } = userPersonalData;

	function trimText(textValue) {
		return textValue.value.trim();
	}

	return (
		<React.Fragment>
			{(firstname.value || lastname.value || userPersonalSummary) && (
				<div className="flex-grow">
					<h1 className="font-extrabold uppercase text-center" style={{ fontSize: 26 }}>
						{trimText(lastname)} {trimText(firstname)}
					</h1>
					{userPersonalSummary && (
						<div className="mt-4">
							<DescriptionText textValue={userPersonalSummary} />
						</div>
					)}
				</div>
			)}
		</React.Fragment>
	);
};

export default HeaderContainer;
