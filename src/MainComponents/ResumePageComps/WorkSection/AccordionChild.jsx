import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";

const AccordionChild = ({ id, setWorkObject }) => {
	// function that updates each input

	function updateTheInput(inputValue, field) {
		setWorkObject((previousData) => {
			return {
				...previousData,
				[field]: inputValue,
			};
		});
	}
	function DeleteWorkExperience() {}

	return (
		<div className="border border-solid border-gray-200 rounded-md">
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="w-full rounded-t-sm overflow-hidden">
								<span
									className={`flex items-center p-4 justify-between border-b border-solid ${
										open ? "border-border_clr" : "border-b-transparent"
									}`}>
									<span className="id-number">Experience #{id}</span>
									<span className="flex items-center gap-3">
										<span role="button" className="cursor-pointer" onClick={() => DeleteWorkExperience()}>
											<Icon icon="fluent:delete-48-regular" className="w-5 h-5 text-red-500" />
										</span>
										<span role="button" className="cursor-pointer">
											<Icon icon="mdi-light:chevron-down" className="w-6 h-6" />
										</span>
									</span>
								</span>
							</AccordionHeader>

							<AccordionBody className="overflow-hidden bg-gray-50">
								<div className="accordion-body p-4 flex flex-col gap-y-4">
									<InputWithLabel
										name="company_name"
										label="Company name"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
									/>
									<InputWithLabel
										name="job_title"
										label="Job title"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
									/>
									<InputWithLabel
										label="Location"
										name="location"
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
