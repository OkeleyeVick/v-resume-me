import React, { useContext, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import AccordionChild from "./AccordionChild";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(userDataContext);
	const { accordionState, work_experience } = workExperience;
	const { userWorkExperiences, setUserWorkExperiences } = work_experience; //array of user's experiences
	const [objectId, setNewObjectId] = useState(0);
	const [workObject, setWorkObject] = useState({ id: objectId, company_name: "", job_title: "", location: "", start_date: "", end_date: "" });

	// const [childrenAccordion, setChildrenAccordions] = useState([]);

	function addNewExperience() {
		//initiate a new work object
		const newWorkObject = {
			id: objectId + 1,
			company_name: "",
			job_title: "",
			location: "",
			start_date: "",
			end_date: "",
		};

		setWorkObject({ ...newWorkObject }); //set the new workObject
		// add to the array of user's experiences
		setUserWorkExperiences((currentWorkExperienceArray) => {
			return [...currentWorkExperienceArray, workObject];
		});

		setNewObjectId((prevId) => prevId + 1); //increment the Id
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
							{userWorkExperiences &&
								userWorkExperiences.map((eachAccordion, accordionIndex) => {
									console.log(eachAccordion);
									return (
										<React.Fragment key={accordionIndex}>
											<AccordionChild id={workObject.id} workObject={workObject} setWorkObject={setWorkObject} />
										</React.Fragment>
									);
									// return <React.Fragment key={accordionIndex}>{eachAccordion}</React.Fragment>;
								})}
						</div>
						<div className="my-4">
							<button
								className="border-[1px] border-dashed border-main font-semibold text-main w-full text-sm p-3 rounded-md bg-transparent hover:bg-hoverBgClr hover:bg-opacity-10  outline-transparent focus-visible:outline-main"
								onClick={addNewExperience}>
								Add New Experience
							</button>
						</div>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default WorkExperienceIndex;
