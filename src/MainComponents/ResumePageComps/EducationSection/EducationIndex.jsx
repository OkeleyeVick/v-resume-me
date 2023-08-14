import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import EducationAccordionChild from "./EducationAccordionChild";
import { memo } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
const EducationIndex = () => {
	const { userEducationData, setUserEducationData } = useContext(userDataContext); //array of user's experiences

	const [currentEducationObject, setEducationObject] = useState({
		id: 0,
		degree: "",
		school: "",
		startMonth: "",
		startYear: "",
		endMonth: "",
		endYear: "",
		location: "",
		currentlySchoolingThere: false,
		description: "",
	});

	function addNewEducation() {
		// first thing, add to the array of user's experiences
		setUserEducationData((currentEducationArray) => {
			return [...currentEducationArray, currentEducationObject];
		});

		//then initiate a new work object
		const newEducationObject = {
			id: currentEducationObject.id + 1,
			degree: "",
			school: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
			city: "",
			country: "",
			currentlySchoolingThere: false,
			description: "",
		};

		//set the new workObject
		setEducationObject({ ...newEducationObject });
	}

	function deleteEducation(e, id) {
		e.stopPropagation();
		const newWorkExperience = userEducationData.filter((accordion) => accordion.id !== id);
		setUserEducationData([...newWorkExperience]);
	}
	return (
		<div className="border border-gray-300 dark:border-label_clr border-solid rounded-md shadow-md">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3 dark:text-label_clr	">
							<Icon icon="ion:school-outline" className="w-8 h-8 dark:text-label_clr" />
							<h2 className="capitalize font-semibold text-xl">Education</h2>
						</span>
					</AccordionHeader>

					<AccordionBody className="px-4 md:px-6">
						<div className="flex flex-col gap-y-4">
							{userEducationData &&
								userEducationData.map((eachAccordion, accordionIndex) => {
									return (
										<React.Fragment key={accordionIndex}>
											<EducationAccordionChild
												count={accordionIndex}
												currentEducationObject={currentEducationObject}
												id={eachAccordion.id}
												eachAccordion={eachAccordion}
												userEducationData={userEducationData}
												setUserEducationData={setUserEducationData}
												deleteEducation={deleteEducation}
												setEducationObject={setEducationObject}
											/>
										</React.Fragment>
									);
								})}
						</div>
						<div className="my-4">
							<button
								className="border-[1px] border-dashed border-main font-semibold text-main w-full text-sm p-3 rounded-md bg-transparent hover:bg-hoverBgClr hover:bg-opacity-10  outline-transparent focus-visible:outline-main"
								onClick={addNewEducation}>
								Add Education
							</button>
						</div>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default memo(EducationIndex);
