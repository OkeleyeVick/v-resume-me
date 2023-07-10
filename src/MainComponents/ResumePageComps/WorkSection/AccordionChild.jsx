import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";

const AccordionChild = ({ workObject, id, setWorkObject }) => {
	// function that updates each input
	function updateTheInput(inputValue, field) {
		setWorkObject((previousData) => {
			return {
				...previousData,
				[field]: inputValue,
			};
		});
	}

	function DeleteWorkExperience(id) {}
	return (
		<div className="border border-solid border-gray-200 rounded-md" id={workObject.id}>
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="w-full rounded-t-sm overflow-hidden cursor-pointer" as="header">
								<span
									className={`flex items-center p-4 justify-between border-b border-solid ${
										open ? "border-border_clr" : "border-b-transparent"
									}`}>
									<span className="id-number">Experience no. {id}</span>
									<span className="flex items-center gap-3">
										<button
											type="button"
											className="outline-transparent focus-visible:outline-main"
											onClick={() => DeleteWorkExperience(id)}>
											<Icon icon="fluent:delete-48-regular" className="w-5 h-5 text-red-500" />
										</button>
										<button type="button" className="outline-transparent focus-visible:outline-main">
											<Icon icon="mdi-light:chevron-down" className={`w-6 h-6 ${open ? "rotate-180" : "rotate-0"}`} />
										</button>
									</span>
								</span>
							</AccordionHeader>

							<AccordionBody className="overflow-hidden bg-gray-50" as="section">
								<div className="accordion-body p-4 flex flex-col gap-y-4">
									<InputWithLabel
										name={workObject.company_name}
										label="Company name"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
										value={workObject.company_name}
									/>
									<InputWithLabel
										name={workObject.job_title}
										label="Job title"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
										value={workObject.job_title}
									/>
									<InputWithLabel
										label="Location"
										name={workObject.location}
										value={workObject.location}
										updateTheDetail={updateTheInput}
										tooltip="If you are in your country, specify only the state where you worked, else if it's for a remote job role, specify the state, and country separated by comma e.g Lagos, Nigeria"
										hasExtraInfo={true}
										className="bg-white border-gray-200"
									/>
								</div>
							</AccordionBody>
						</>
					);
				}}
			</AccordionItem>
		</div>
	);
};

export default AccordionChild;
