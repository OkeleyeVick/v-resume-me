import React, { createContext, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";
import { memo } from "react";
import Checkbox from "../Components/Checkbox";
import MonthPicker from "../Components/MonthPicker";
import YearPicker from "../Components/YearPicker";

const EducationChildAccordion = ({ eachAccordion, deleteExperience, count, currentEducationObject }) => {
	const [isChecked, setIsChecked] = useState(false); //if user is still working there

	const [educationDetails, setEducationDetails] = useState(currentEducationObject);

	// function that updates each input
	function updateTheInput(inputValue, field) {
		setEducationDetails((previousData) => {
			return {
				...previousData,
				[field]: inputValue,
			};
		});
	}

	function getStartMonth(monthNumber) {
		setEducationDetails((previous) => ({
			...previous,
			startMonth: `${monthNumber < 10 ? `0${monthNumber}` : monthNumber}`,
		}));
	}
	function getStartYear(startYear) {
		setEducationDetails((previous) => ({
			...previous,
			startYear: `${startYear}`,
		}));
	}
	function getEndMonth(monthNumber) {
		setEducationDetails((previous) => ({
			...previous,
			endMonth: `${monthNumber < 10 ? `0${monthNumber}` : monthNumber}`,
		}));
	}
	function getEndYear(endYear) {
		setEducationDetails((previous) => ({
			...previous,
			endYear: `${endYear}`,
		}));
	}

	function handleTheCheck() {
		// handle the check and change the state
		setIsChecked((oldState) => !oldState);
		setEducationDetails((previousData) => ({
			...previousData,
			currentlySchoolingThere: !previousData.currentlySchoolingThere,
		}));
	}

	return (
		<div className="border border-solid border-gray-200 rounded-md" id={parseInt(eachAccordion.id + 1)}>
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="w-full rounded-t-sm overflow-hidden cursor-pointer" as="header">
								<span
									className={`flex items-center p-4 justify-between border-b border-solid ${
										open ? "border-border_clr" : "border-b-transparent"
									}`}>
									<span className="school-name text-sm font-medium">
										{educationDetails.school.trim().length !== 0 ? educationDetails.school.trim() : "(Not specified)"}
									</span>
									<span className="flex items-center gap-3">
										<button
											type="button"
											className="outline-transparent focus-visible:outline-main p-1"
											onClick={(e) => deleteExperience(e, eachAccordion.id)}>
											<Icon icon="fluent:delete-48-regular" className="w-5 h-5 text-red-500" />
										</button>
										<button type="button" className="outline-transparent focus-visible:outline-main">
											<Icon icon="mdi-light:chevron-down" className={`w-6 h-6 ${open ? "rotate-180" : "rotate-0"}`} />
										</button>
									</span>
								</span>
							</AccordionHeader>

							<AccordionBody className="overflow-hidden bg-gray-50" as="section">
								<div className="accordion-body p-4 gap-4 flex flex-col">
									<InputWithLabel
										name="school"
										label="School"
										value={educationDetails.school}
										updateTheDetail={updateTheInput}
										action={setEducationDetails}
										className="bg-white border-gray-200"
									/>

									<InputWithLabel
										name="degree"
										updateTheDetail={updateTheInput}
										value={educationDetails.degree}
										action={setEducationDetails}
										label="Degree"
										className="bg-white border-gray-200"
									/>

									<InputWithLabel
										label="city"
										name="city"
										value={educationDetails.city}
										action={setEducationDetails}
										updateTheDetail={updateTheInput}
										className="bg-white border-gray-200"
									/>

									<InputWithLabel
										label="County"
										name="country"
										value={educationDetails.country}
										action={setEducationDetails}
										updateTheDetail={updateTheInput}
										className="bg-white border-gray-200"
									/>

									<div className="col-span-2">
										<small className="mb-2">Time period</small>
										<div className={`flex items-start justify-between gap-x-2 gap-y-4 w-full flex-wrap sm:flex-nowrap relative`}>
											<div className="grid grid-cols-3 gap-2 flex-grow">
												<MonthPicker className="col-span-2" getMonth={getStartMonth} />
												<YearPicker className="col-span-1" getYear={getStartYear} />
											</div>
											<div className="hidden sm:inline leading-none mt-4">&mdash;</div>
											<div className="flex-grow">
												{isChecked ? (
													<>
														<div className="hover:border-main border border-solid border-gray-200 rounded-md bg-white p-2 px-3 relative">
															<span className="text-sm text-gray-600">Present</span>
														</div>
													</>
												) : (
													<>
														<div className="end-date grid grid-cols-3 gap-2">
															<MonthPicker className="col-span-2" getMonth={getEndMonth} />
															<YearPicker className="col-span-1" getYear={getEndYear} />
														</div>
													</>
												)}
												<div className="mt-3">
													<Checkbox label="I currently work here" onChange={() => handleTheCheck(eachAccordion.id)} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</AccordionBody>
						</>
					);
				}}
			</AccordionItem>
		</div>
	);
};

export default memo(EducationChildAccordion);
