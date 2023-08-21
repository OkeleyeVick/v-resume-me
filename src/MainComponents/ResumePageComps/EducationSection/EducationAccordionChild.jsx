import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { Icon } from "@iconify/react";
import { memo } from "react";
import Checkbox from "../Components/Checkbox";
import MonthPicker from "../Components/MonthPicker";
import YearPicker from "../Components/YearPicker";
import Tiptap from "../../FormComponent/Tiptap";
import { motion } from "framer-motion";

const EducationChildAccordion = ({ userEducationData, setUserEducationData, eachAccordion, deleteEducation, currentEducationObject }) => {
	const [isChecked, setIsChecked] = useState(false); //if user is still working there

	// this updates the UI
	const [educationDetails, setEducationDetails] = useState(currentEducationObject);

	/* get all the previous states, 
		get the current one whose id matches, then
		update the it ==> This updates the data
	*/
	const autoUpdate = (fieldToUpdate, fieldValue) => {
		const newEducationDetails = userEducationData.map((education) => {
			if (eachAccordion.id === education.id) {
				return {
					...education,
					[fieldToUpdate]: fieldValue,
				};
			}
			return education;
		});

		setUserEducationData(newEducationDetails);
	};

	// function that updates each input
	function updateTheInput(inputValue, field) {
		setEducationDetails((previousData) => {
			return {
				...previousData,
				[field]: inputValue,
			};
		});
		autoUpdate(field, inputValue);
	}

	function getStartMonth(monthNumber) {
		setEducationDetails((previous) => ({
			...previous,
			startMonth: `${monthNumber < 10 ? `0${monthNumber}` : monthNumber}`,
		}));

		autoUpdate("startMonth", monthNumber);
	}
	function getStartYear(startYear) {
		setEducationDetails((previous) => ({
			...previous,
			startYear: `${startYear}`,
		}));

		autoUpdate("startYear", startYear);
	}
	function getEndMonth(monthNumber) {
		setEducationDetails((previous) => ({
			...previous,
			endMonth: `${monthNumber < 10 ? `0${monthNumber}` : monthNumber}`,
		}));

		autoUpdate("endMonth", monthNumber);
	}
	function getEndYear(endYear) {
		setEducationDetails((previous) => ({
			...previous,
			endYear: `${endYear}`,
		}));
		autoUpdate("endYear", endYear);
	}
	function handleTheCheck() {
		let state = false; // by default, it is false
		// handle the check and change the state
		setIsChecked((oldState) => {
			state = !oldState;
			return !oldState;
		});
		setEducationDetails((previousData) => ({
			...previousData,
			currentlySchoolingThere: !previousData.currentlySchoolingThere,
		}));
		autoUpdate("currentlySchoolingThere", state);
	}

	const handleDescription = (data) => {
		setEducationDetails((previousData) => ({
			...previousData,
			description: data,
		}));
		autoUpdate("description", data);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="border border-solid dark:border-label_clr  border-gray-200 rounded-md"
			id={parseInt(eachAccordion.id + 1)}>
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="w-full rounded-t-sm overflow-hidden cursor-pointer" as="header">
								<span
									className={`flex items-center p-4 justify-between border-b border-solid ${
										open ? "border-border_clr dark:border-label_clr " : "border-b-transparent"
									}`}>
									<span className="school-name text-sm font-medium dark:text-label_clr">
										{educationDetails.school.trim().length !== 0 ? educationDetails.school.trim() : "(Not specified)"}
									</span>
									<span className="flex items-center gap-3">
										<button
											type="button"
											className="outline-transparent focus-visible:outline-main p-1"
											onClick={(e) => deleteEducation(e, eachAccordion.id)}>
											<Icon icon="fluent:delete-48-regular" className="w-5 h-5 text-red-500 pointer-events-none" />
										</button>
										<button type="button" className="outline-transparent focus-visible:outline-main">
											<Icon icon="mdi-light:chevron-down" className={`w-6 h-6 ${open ? "rotate-180" : "rotate-0"} dark:text-label_clr`} />
										</button>
									</span>
								</span>
							</AccordionHeader>

							<AccordionBody className="overflow-hidden transition duration-1000 ease-linear  dark:bg-dark_theme_text_clr bg-gray-50/40" as="section">
								<div className="accordion-body p-4 gap-4 flex flex-col">
									<InputWithLabel
										name="school"
										label="School"
										placeholder="e.g University of Lagos"
										value={educationDetails.school}
										updateTheDetail={updateTheInput}
										action={setEducationDetails}
										className="bg-white dark:bg-dark_theme_text_clr dark:border-label_clr border-gray-200"
									/>

									<InputWithLabel
										name="degree"
										updateTheDetail={updateTheInput}
										placeholder="e.g   Bsc. Engineering,  PhD Accounting ...etc"
										value={educationDetails.degree}
										action={setEducationDetails}
										label="Degree"
										className="bg-white dark:bg-dark_theme_text_clr dark:border-label_clr border-gray-200"
									/>

									<InputWithLabel
										label="city"
										name="city"
										value={educationDetails.city}
										action={setEducationDetails}
										updateTheDetail={updateTheInput}
										className="bg-white dark:bg-dark_theme_text_clr dark:border-label_clr border-gray-200"
									/>

									<InputWithLabel
										label="County"
										name="country"
										value={educationDetails.country}
										action={setEducationDetails}
										updateTheDetail={updateTheInput}
										className="bg-white dark:bg-dark_theme_text_clr dark:border-label_clr border-gray-200"
									/>

									<div className="col-span-2">
										<small className="mb-2 text-label_clr ">Time period</small>
										<div className={`flex items-start justify-between gap-x-2 gap-y-4 w-full flex-wrap sm:flex-nowrap relative`}>
											<div className="grid grid-cols-3 gap-2 flex-grow">
												<MonthPicker className="col-span-2" getMonth={getStartMonth} />
												<YearPicker className="col-span-1" getYear={getStartYear} />
											</div>
											<div className="hidden sm:inline leading-none mt-4 dark:text-label_clr">&mdash;</div>
											<motion.div className="flex-grow">
												{isChecked && (
													<motion.div
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														className="hover:border-main border dark:border-[1.5px] border-solid border-gray-200 rounded-md bg-white p-2 px-3 relative dark:bg-dark_theme dark:border-main">
														<span className="text-sm text-label_clr">Present</span>
													</motion.div>
												)}
												{!isChecked && (
													<motion.div
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														className="end-date grid grid-cols-3 gap-2">
														<MonthPicker className="col-span-2" getMonth={getEndMonth} />
														<YearPicker className="col-span-1" getYear={getEndYear} />
													</motion.div>
												)}
												<div className="mt-3">
													<Checkbox label="I currently study here" onChange={() => handleTheCheck(eachAccordion.id)} />
												</div>
											</motion.div>
										</div>
									</div>

									<div className="-mt-2">
										<span className="text-[.9rem] mb-2 text-label_clr">Description</span>
										<Tiptap text={educationDetails.description} onUpdate={handleDescription} />
									</div>
								</div>
							</AccordionBody>
						</>
					);
				}}
			</AccordionItem>
		</motion.div>
	);
};

export default memo(EducationChildAccordion);
