import React, { useContext, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import AccordionChild from "./AccordionChild";
import { memo } from "react";

const WorkExperienceIndex = () => {
	const { workExperienceValues } = useContext(userDataContext);
	const { workExperiences } = workExperienceValues;
	const { userWorkExperiences, setUserWorkExperiences } = workExperiences; //array of user's experiences
	const [currentWorkObject, setWorkObject] = useState({
		id: -1,
		companyName: "",
		jobTitle: "",
		country: "",
		startMonth: "",
		startYear: "",
		endMonth: "",
		endYear: "",
		city: "",
		isChecked: false,
	});

	function addNewExperience() {
		// first thing, add to the array of user's experiences
		setUserWorkExperiences((currentWorkExperienceArray) => {
			return [...currentWorkExperienceArray, currentWorkObject];
		});

		//then initiate a new work object
		const newWorkObject = {
			id: currentWorkObject.id + 1,
			companyName: "",
			jobTitle: "",
			country: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
			city: "",
			currentlyWorkingThere: false,
		};

		//set the new workObject
		setWorkObject({ ...newWorkObject });
	}

	function deleteExperience(e, id) {
		e.stopPropagation();
		e.preventDefault();
		const newWorkExperience = userWorkExperiences.filter((accordion) => accordion.id !== id);
		setUserWorkExperiences([...newWorkExperience]);
	}
	return (
		<div className="border border-gray-300 border-solid rounded-md shadow-md">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3">
							<Icon icon="clarity:briefcase-line" className="w-8 h-8" />
							<h2 className="capitalize font-semibold text-xl">Work Experience</h2>
						</span>
					</AccordionHeader>

					<AccordionBody className="px-4 md:px-6">
						<div className="flex flex-col gap-y-4">
							{userWorkExperiences &&
								userWorkExperiences.map((eachAccordion, accordionIndex) => {
									return (
										<React.Fragment key={accordionIndex}>
											<AccordionChild
												count={accordionIndex}
												currentWorkObject={currentWorkObject}
												id={eachAccordion.id}
												eachAccordion={eachAccordion}
												deleteExperience={deleteExperience}
												setWorkObject={setWorkObject}
											/>
										</React.Fragment>
									);
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

export default memo(WorkExperienceIndex);
