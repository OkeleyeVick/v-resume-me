import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";
import { memo } from "react";
import Checkbox from "../Components/Checkbox";
import MonthPicker from "../Components/MonthPicker";
import YearPicker from "../Components/YearPicker";

const AccordionChild = ({ eachAccordion, setWorkObject, deleteExperience, count }) => {
	// function that updates each input
	function updateTheInput(inputValue, field) {
		setWorkObject((previousData) => {
			return {
				...previousData,
				[field]: inputValue,
			};
		});
	}

	// start work
	const [startMonth, setStartMonth] = useState("");
	const [startYear, setStartYear] = useState("");
	// end job
	const [endMonth, setEndMonth] = useState("");
	const [endYear, setEndYear] = useState("");

	const [startDate, setStartDate] = useState(`${startMonth}/${startYear}`);
	const [endDate, setEndDate] = useState(`${endMonth}/${endYear}`);

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
									<span className="id-number">Experience no. {parseInt(count + 1)}</span>
									<span className="flex items-center gap-3">
										<button
											type="button"
											className="outline-transparent focus-visible:outline-main"
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
										name={eachAccordion.company_name}
										label="Company name"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
										value={eachAccordion.company_name}
									/>
									<InputWithLabel
										name={eachAccordion.job_title}
										label="Job title"
										className="bg-white border-gray-200"
										updateTheDetail={updateTheInput}
										value={eachAccordion.job_title}
									/>

									<InputWithLabel
										label="city"
										name={eachAccordion.city}
										value={eachAccordion.city}
										updateTheDetail={updateTheInput}
										className="bg-white border-gray-200"
									/>

									<InputWithLabel
										label="County"
										name={eachAccordion.county}
										value={eachAccordion.county}
										updateTheDetail={updateTheInput}
										className="bg-white border-gray-200"
									/>

									<div className="col-span-2">
										<small className="">Time period</small>
										<div className="flex items-start justify-between gap-x-2 gap-y-4 w-full flex-wrap sm:flex-nowrap relative">
											<div className="grid grid-cols-3 gap-2 flex-grow">
												<MonthPicker className="col-span-2" month={startMonth} setMonth={setStartMonth} />
												<YearPicker className="col-span-1" year={startYear} setYear={setStartYear} />
											</div>
											<div className="hidden sm:inline leading-none mt-4">&mdash;</div>
											<div className="flex-grow">
												<div className="end-date grid grid-cols-3 gap-2">
													<MonthPicker month={endMonth} setMonth={setEndMonth} className="col-span-2" />
													<YearPicker className="col-span-1" year={endYear} setYear={setEndYear} />
												</div>
												<div className="mt-3">
													<Checkbox label="I currently work here" />
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

export default memo(AccordionChild);
