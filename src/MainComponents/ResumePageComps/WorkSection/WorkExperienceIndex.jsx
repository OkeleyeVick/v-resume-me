import React, { useContext } from "react";
import Accordion from "../Components/Accordion";
import { EachComponentAccordionState } from "../CreateResumePage";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(EachComponentAccordionState);
	const { workExperienceState, setWorkExperienceState } = workExperience;
	return (
		<Accordion title="work experience" icon="clarity:briefcase-line" toggle={{ state: workExperienceState, action: setWorkExperienceState }}>
			<div className="p-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum id ullam explicabo inventore et nulla delectus autem unde, laudantium,
				enim quae porro voluptates hic cum cupiditate possimus provident fugit.
			</div>
		</Accordion>
	);
};

export default WorkExperienceIndex;
