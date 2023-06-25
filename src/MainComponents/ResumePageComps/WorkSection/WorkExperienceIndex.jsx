import React, { useContext } from "react";
import Accordion from "../Components/Accordion";
import { EachComponentAccordionState } from "../CreateResumePage";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(EachComponentAccordionState);
	const { workExperienceState, setWorkExperienceState } = workExperience;
	return (
		<Accordion
			title="work experience"
			icon="clarity:briefcase-line"
			toggle={{ state: workExperienceState, action: setWorkExperienceState }}></Accordion>
	);
};

export default WorkExperienceIndex;
