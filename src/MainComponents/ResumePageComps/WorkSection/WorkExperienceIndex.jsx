import React, { useContext } from "react";
import Accordion from "../Components/Accordion";
import { EachComponentAccordionState } from "../CreateResumePage";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(EachComponentAccordionState);
	const { workExperienceState, setWorkExperienceState } = workExperience;
	return (
		<Accordion title="work experience" icon="clarity:briefcase-line" toggle={{ state: workExperienceState, action: setWorkExperienceState }}>
			<div className="mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat ipsam aliquid placeat reiciendis maiores asperiores. Iure
				sunt aliquam earum vitae non ad tempore! Porro ullam excepturi dolore maiores dolores.
			</div>
		</Accordion>
	);
};

export default WorkExperienceIndex;
