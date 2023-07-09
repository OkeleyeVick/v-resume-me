import React, { useContext } from "react";
import { EachComponentAccordionState } from "../CreateResumePage";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Icon } from "@iconify/react";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(EachComponentAccordionState);
	const { workExperienceState, setWorkExperienceState } = workExperience;

	function newEducationBackground() {}

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
						<div className="border border-solid border-gray-200 rounded-md bg-gray-50">
							<AccordionItem>
								<AccordionHeader className="border-b border-solid border-b-gray-50 w-full bg-red-300 p-4">
									<span className="flex items-center justify-between">
										<span>#1</span>
										<Icon icon="mdi-light:chevron-down" />
									</span>
								</AccordionHeader>

								<AccordionBody className="">
									<div className="accordion-body p-4">Lorem ipsum dolor sit amet.</div>
								</AccordionBody>
							</AccordionItem>
						</div>
						<div className="my-4">
							<button className="border-[1.5px] border-dashed border-main font-semibold text-main w-full text-sm p-3 rounded-md">
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
