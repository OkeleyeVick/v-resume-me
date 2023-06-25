import React, { useContext } from "react";
import Accordion from "../Components/Accordion";
import { EachComponentAccordionState } from "../CreateResumePage";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(EachComponentAccordionState);
	const { workExperienceState, setWorkExperienceState } = workExperience;
	return (
		<Accordion title="work experience" icon="clarity:briefcase-line" toggle={{ state: workExperienceState, action: setWorkExperienceState }}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum possimus minima unde deleniti at est provident aliquam maiores. Rem
			facilis placeat commodi. Recusandae quae vitae dignissimos, omnis ea voluptates facere.
		</Accordion>
	);
};

export default WorkExperienceIndex;
