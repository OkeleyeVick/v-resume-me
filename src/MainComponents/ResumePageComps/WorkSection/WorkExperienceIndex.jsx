import React, { useContext, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import AccordionChild from "./AccordionChild";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(userDataContext);
	const { accordionState, work_experience } = workExperience;
	const { userWorkExperiences, setUserWorkExperiences } = work_experience;
	const [newStateId, setNewStateId] = useState(0);
	const [workObject, setWorkObject] = useState({
		id: newStateId,
		company_name: "",
		job_title: "",
		location: "",
		start_date: "",
		end_date: "",
	});

	const [childrenAccordion, setChildrenAccordions] = useState([
		<AccordionChild id={workObject.id} workObject={workObject} setWorkObject={setWorkObject} />,
	]);

	function addNewExperience() {
		setNewStateId((currentId) => currentId + 1);
		setWorkObject((previousObject) => ({ ...previousObject, id: newStateId }));
		setUserWorkExperiences((currentWorkExperienceArray) => {
			return [...currentWorkExperienceArray, workObject];
		});
		const childAccordion = <AccordionChild id={workObject.id} workObject={workObject} setWorkObject={setWorkObject} />;
		setChildrenAccordions((previousAccordions) => [...previousAccordions, childAccordion]);
	}

	return (
		<div className="border border-gray-300 border-solid rounded-md shadow-md mt-3">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3">
							<Icon icon="clarity:briefcase-line" className="w-8 h-8" />
							<h2 className="capitalize font-semibold text-xl">Work Experience</h2>
						</span>
					</AccordionHeader>

					<AccordionBody className="px-6">
						<div className="flex flex-col gap-y-4">
							{childrenAccordion &&
								childrenAccordion.map((eachAccordion, accordionIndex) => {
									return <React.Fragment key={accordionIndex}>{eachAccordion}</React.Fragment>;
								})}
						</div>
						<div className="my-4">
							<button
								className="border-[1px] border-dashed border-main font-semibold text-main w-full text-sm p-3 rounded-md bg-transparent hover:bg-hoverBgClr hover:bg-opacity-10"
								onClick={addNewExperience}>
								Add more
							</button>
						</div>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default WorkExperienceIndex;
