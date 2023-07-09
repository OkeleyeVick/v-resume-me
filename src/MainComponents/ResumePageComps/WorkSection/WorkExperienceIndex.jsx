import React, { useContext } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import InputWithLabel from "../../FormComponent/InputComponent";

const WorkExperienceIndex = () => {
	const { workExperience } = useContext(userDataContext);
	const { accordionState, work_experience } = workExperience;
	const { userWorkExperience, setUserWorkExperience } = work_experience;

	const workObject = {
		id: null,
		company_name: "",
		job_title: "",
		location: "",
		start_date: "",
		end_date: "",
	};

	function updateTheInput(inputValue, field) {}
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
						<div className="border border-solid border-gray-200 rounded-md">
							<AccordionItem>
								<AccordionHeader className="w-full p-4 rounded-t-sm ">
									<span className="flex items-center justify-between">
										<span className="id-number">#1</span>
										<Icon icon="mdi-light:chevron-down" className="w-6 h-6" />
									</span>
								</AccordionHeader>

								<AccordionBody className="overflow-hidden bg-gray-50">
									<div className="accordion-body p-4 flex flex-col gap-y-4">
										<InputWithLabel label="Company name" />
										<InputWithLabel label="Job title" />
										<InputWithLabel
											label="Location"
											tooltip="If you are in your country, enter only the state where you worked, else if it's for a remote job role, specify the state, and country separated by comma e.g Lagos, Nigeria"
											hasExtraInfo={true}
										/>
									</div>
								</AccordionBody>
							</AccordionItem>
						</div>
						<div className="my-4">
							<button className="border-[1px] border-dashed border-main font-semibold text-main w-full text-sm p-3 rounded-md bg-transparent hover:bg-hoverBgClr hover:bg-opacity-10">
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
