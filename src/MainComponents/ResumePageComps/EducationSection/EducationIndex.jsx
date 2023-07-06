import React, { useContext, useState } from "react";
import Accordion from "../Components/Accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { EachComponentAccordionState, userDataContext } from "../CreateResumePage";
import UserInputObjects from "../UserInputObjects";

const EducationIndex = () => {
	const { education } = useContext(EachComponentAccordionState);
	const { educationState, setEducationState } = education;
	const { userGeneralData, setUserGeneralData, userEducationData, setUserEducationData } = useContext(userDataContext);

	function updateTheInput(inputValue, field) {
		setUserEducationData((previousData) => ({
			...previousData,
			[field]: {
				...previousData[field],
				value: inputValue,
			},
		}));
	}

	return (
		<React.Fragment>
			<Accordion title="education" icon="cil:education" toggle={{ state: educationState, action: setEducationState }}>
				<div className="p-4 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md mb-4">
					{Object.values(userEducationData).map(
						({ inputMode, ariaLabel, type, nameLabel, value, hasExtraInfo, tooltipData }, educationDetailIndex) => {
							return (
								<React.Fragment key={educationDetailIndex}>
									<InputWithLabel
										aria-label={ariaLabel}
										inputMode={inputMode}
										name={ariaLabel}
										hasExtraInfo={hasExtraInfo}
										tooltip={tooltipData}
										type={type}
										updateTheDetail={updateTheInput}
										value={value ?? ""}
										label={nameLabel}
									/>
								</React.Fragment>
							);
						}
					)}
				</div>
			</Accordion>
		</React.Fragment>
	);
};

export default EducationIndex;
