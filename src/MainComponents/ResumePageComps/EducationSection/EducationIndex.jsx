import React, { useContext, useState } from "react";
import Accordion from "../Components/Accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { EachComponentAccordionState, userDataContext } from "../CreateResumePage";

const EducationIndex = () => {
	const { education } = useContext(EachComponentAccordionState);
	const { educationState, setEducationState } = education;
	const { userGeneralData, setUserGeneralData, userPersonalData, setUserPersonalData } = useContext(userDataContext);

	function updateTheDetail(value, field) {
		setUserPersonalData((prev) => ({
			...prev,
			// [field ?? field]: value, //if the field does not exist, create one and update the value
		}));
	}

	// object to create a new education background
	const schoolObject = {
		name: "",
		degree: "",
		startDate: "",
		finishDate: "",
		isWorkingThere: false,
	};

	const educationDetails = [
		{
			names: [
				{
					ariaLabel: "school",
					nameLabel: "school",
					inputMode: "text",
					type: "text",
					runUpdate: updateTheDetail,
				},
				{
					ariaLabel: "degree",
					nameLabel: "degree",
					inputMode: "text",
					type: "text",
					runUpdate: updateTheDetail,
				},
			],
		},
	];

	return (
		<React.Fragment>
			<Accordion title="education" icon="cil:education" toggle={{ state: educationState, action: setEducationState }}>
				{educationDetails.map((eachDivWrapper, wrapperIndex) => {
					return (
						<div key={wrapperIndex} className={`flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-6 md:items-end mb-4`}>
							{Object.values(eachDivWrapper).map((detail) => {
								return detail.map(({ inputMode, ariaLabel, type, runUpdate, nameLabel }, useDetailIndex) => {
									return (
										<React.Fragment key={useDetailIndex}>
											<InputWithLabel
												aria-label={ariaLabel}
												inputMode={inputMode}
												runUpdate={runUpdate}
												type={type}
												label={nameLabel}
											/>
										</React.Fragment>
									);
								});
							})}
						</div>
					);
				})}
			</Accordion>
		</React.Fragment>
	);
};

export default EducationIndex;
