import React, { useContext } from "react";
import { themeContext, userDataContext } from "../../ResumePageComps/CreateResumePage";
import { DescriptionText } from "../../../assets/theme/fontSizes";

const HeaderContainer = () => {
	const { userPersonalData, userPersonalSummary } = useContext(userDataContext);
	const { themeSelection } = useContext(themeContext);
	const {
		userResumeColor: {
			selectedColor: { color },
		},
	} = themeSelection;
	const { firstname, lastname } = userPersonalData;

	function trimText(textValue) {
		return textValue.value.trim();
	}

	return (
		<React.Fragment>
			{(firstname.value || lastname.value || userPersonalSummary) && (
				<div className="flex-grow">
					<h1 className="font-extrabold uppercase text-center" style={{ fontSize: 26, color: `${color}` }}>
						{trimText(lastname)} {trimText(firstname)}
					</h1>
					{userPersonalSummary && (
						<div className="mt-6 marker:text-gray-500 marker:text-[10px]">
							<DescriptionText textValue={userPersonalSummary} />
						</div>
					)}
				</div>
			)}
		</React.Fragment>
	);
};

export default HeaderContainer;
