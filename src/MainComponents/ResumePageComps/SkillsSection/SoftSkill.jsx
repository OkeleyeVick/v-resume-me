import React, { useContext, useMemo, useRef, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { userDataContext } from "../CreateResumePage";
import { Icon } from "@iconify/react";
import data from "../../../assets/db/databsase.json";
import InputWithLabel from "../../FormComponent/InputComponent";

const SoftSkill = () => {
	const { skills, setSkills } = useContext(userDataContext);

	const { soft_skills: skillsArrayData } = data; //from database

	const arrayOfAvailableSkills = skillsArrayData.map((skill, index) => ({ id: index, skillName: skill, isSet: false })); // all of their id, skillname and default value of false for isSet property

	const [allSkills, setAllSkills] = useState(arrayOfAvailableSkills);

	const [inputValue, setInput] = useState("");
	// const [skillObject, setSkillObject] = useState({ id: 0, skillName: "", isSet: false });

	function addSkillWithValue(e, { ...value }) {
		e.preventDefault();
		const skillInTheArray = skills.softSkills.some(({ id }) => id === value.id);
		if (!skillInTheArray) {
			//if there is no such skill, add it to the list of skill
			setSkills((previousSkills) => ({
				...previousSkills,
				softSkills: [...previousSkills.softSkills, { id: value.id, skillName: value.skillName, isSet: !value.isSet }],
			}));
		} else {
			//get the item and set the kini to false
			const theObject = skills.softSkills.find(({ id }) => id === value.id);
		}
		// update the UI of available skills
		const newArray = allSkills.map((eachSkill) => {
			if (value.id === eachSkill.id) {
				return {
					...eachSkill,
					isSet: !eachSkill.isSet,
				};
			}
			return eachSkill;
		});
		setAllSkills(newArray);
	}

	console.log(skills.softSkills);

	function addSkillWithoutValue() {
		//function for the add button
		// setInput("");
		// setSkills((oldObjects) => ({ ...oldObjects, softSkills: [...oldObjects.softSkills, skillObject] }));
		// setSkillObject((previousObject) => ({ ...previousObject, id: previousObject.id + 1 }));
	}

	const handleTheInput = (inputValue) => {
		// setInput(inputValue);
		// setSkillObject((prev) => ({
		// 	...prev,
		// 	skillName: inputValue,
		// }));
	};

	function handleDeleteSkill(skillId) {
		// const newArray = softSkills.filter(({ id }) => id !== skillId);
		console.log(skillId);
		// setSkills(newArray);
	}

	/*	TODO: 1 ==> delete function isn't working cos it has to be an object with id
				2 ==> onclick of any available button on the board,it should toggle its UI that shows that is it part of the array
	*/
	return (
		<div className="border border-solid overflow-hidden border-gray-200 rounded-md">
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="px-2 py-3">
								<span className="select-none flex flex-col items-start gap-x-3 px-2">
									<h2 className="Capitalize font-semibold text-lg">Soft Skills</h2>
									<span className="text-[13px] text-gray-400">
										Enter the qualities you possess e.g Adaptability, Teamwork, Self-confidence... etc
									</span>
								</span>
							</AccordionHeader>
							<AccordionBody className="overflow-hidden px-2" as="section">
								<div className={`px-2 bg-transparent round-sm ${open ? "py-3" : "py-0"}`}>
									<>
										<div className="mb-8">
											<header className="text-sm text-gray-400 mb-2">Select at most 5 Soft skills you might possess</header>
											<div className="flex items-center flex-wrap gap-2">
												{allSkills.map(({ skillName, id, isSet }) => {
													return (
														<React.Fragment key={id}>
															<span
																className={`flex items-center gap-[4px] rounded-[4px] p-2 ${
																	isSet === true
																		? "bg-hoverBgClr text-white hover:bg-opacity-90"
																		: "text-slate-600 bg-[rgb(239,242,249)] hover:bg-main hover:bg-opacity-30"
																}`}
																role="button"
																onClick={(e) => addSkillWithValue(e, { skillName, id, isSet })}>
																<span className="text-[.7rem]">{skillName}</span>
																<Icon
																	icon={isSet ? "iconamoon:check" : "iconoir:plus"}
																	className={`${isSet ? "text-white" : "text-slate-600"}`}
																/>
															</span>
														</React.Fragment>
													);
												})}
											</div>
										</div>
									</>
									{skills.softSkills.length !== 0 && (
										<div className="p-3 border border-solid border-border_clr rounded-md">
											<div className="flex items-center justify-between gap-y-2">
												<header className="text-sm text-gray-400">Soft skills you possess</header>
											</div>
											<div
												name="languages-container"
												className="flex flex-wrap overflow-hidden items-center gap-2 mt-3 relative">
												{skills.softSkills &&
													skills.softSkills.map(({ id, skillName }) => {
														return (
															<React.Fragment key={id}>
																<span
																	className="bg-[rgb(239,242,249)] text-[rgb(30,37,50)] flex items-center gap-[3px] hover:text-main px-4 py-[3px] w-max rounded-[4px] cursor-pointer overflow-hidden group/HoverIt"
																	id={id}>
																	<span name="soft-skill" className="text-[.8rem]">
																		{skillName}
																	</span>
																	<span
																		className="bg-transparent hover:bg-slate-200 hover:bg-opacity-80 rounded-full p-2 group/Language -mr-8 duration-500 ease-in-out group-hover/HoverIt:mr-0 scale-0 group-hover/HoverIt:scale-100"
																		role="button"
																		onClick={() => handleDeleteSkill(id)}>
																		<Icon
																			icon="ep:delete"
																			className=" text-slate-700 group-hover/Language:text-red-600"
																		/>
																	</span>
																</span>
															</React.Fragment>
														);
													})}
											</div>
										</div>
									)}
									<div className="mt-8 flex items-end gap-4 flex-wrap">
										<div className="relative flex-grow">
											<InputWithLabel
												value={inputValue}
												name="Soft-skill"
												label="Enter skill"
												hasExtraInfo
												tooltip={"Enter a skill you can't find in the above listed"}
												aria-label="soft-skill"
												placeholder="Enter a skill you possess"
												updateTheDetail={handleTheInput}
											/>
										</div>
										<button
											type="button"
											name="add-skill"
											className={`p-3 px-8 text-sm rounded-sm ${
												inputValue
													? "cursor-pointer bg-main text-white hover:bg-hoverBgClr"
													: " cursor-not-allowed bg-slate-200 text-gray-400"
											}`}
											onClick={addSkillWithoutValue}
											disable={inputValue ? "false" : "true"}>
											Add
										</button>
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

export default SoftSkill;
