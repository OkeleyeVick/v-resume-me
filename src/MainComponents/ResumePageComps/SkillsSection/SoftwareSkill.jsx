import React, { useContext, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { userDataContext } from "../CreateResumePage";
import { Icon } from "@iconify/react";
import InputWithLabel from "../../FormComponent/InputComponent";

const SoftSkill = () => {
	const { skills, setSkills } = useContext(userDataContext);

	const arrayOfAvailableSoftwareSkills = skills.softWareAvailableSkills;

	//states
	const [inputValue, setInput] = useState("");
	const [newSoftwareSkill, setNewSoftwareSkill] = useState({ id: arrayOfAvailableSoftwareSkills.length + 1, skillName: "" });

	// functions
	function addSkillWithValue(e, { ...value }) {
		e.preventDefault();
		//check if the skill in the list of user's skill exist
		const skillInTheArray = skills.softwareSkills.some(({ id }) => id === value.id);

		//if there is no such skill, add it to the list of skill
		if (!skillInTheArray) {
			// update the UI of available skills
			const newArray = skills.softWareAvailableSkills.map((eachSkill) => {
				if (value.id === eachSkill.id) {
					return {
						...eachSkill,
						isSet: true,
					};
				}
				return eachSkill;
			});
			setSkills((previousSkills) => ({
				...previousSkills,
				softwareSkills: [...previousSkills.softwareSkills, { id: value.id, skillName: value.skillName, isSet: !value.isSet }],
				softWareAvailableSkills: [...newArray],
			}));
		}
	}

	function addSkillWithoutValue() {
		const arrayOfSkills = skills.softWareAvailableSkills.map(({ skillName }) => skillName.toLowerCase());
		const allTheSkillNames = skills.softwareSkills.map(({ skillName }) => skillName.toLowerCase());
		if (allTheSkillNames.length === 0 || !allTheSkillNames.includes(inputValue.toLowerCase())) {
			// if the skill in not in the list of entered skills, add it to the list
			setSkills((previousSkillData) => ({
				...previousSkillData,
				softwareSkills: [...previousSkillData.softwareSkills, newSoftwareSkill],
			}));

			//set the a new SkillItem with an incremented id
			setNewSoftwareSkill((previousSkillDatas) => {
				return {
					...previousSkillDatas,
					id: newSoftwareSkill.id + 1,
				};
			});

			setInput(""); //clear the input
		}
	}

	const handleTheInput = (inputValue) => {
		setInput(inputValue);
		setNewSoftwareSkill((prev) => ({
			// update the value of the skillName
			...prev,
			skillName: inputValue,
		}));
	};
	//TODO: PSALM 109 TO THE WATER
	function handleDeleteSkill(skillId) {
		if (skillId) {
			const newArray = skills.softwareSkills.filter(({ id }) => id !== skillId);
			setSkills((previousData) => ({
				//delete skill away from the user's list
				...previousData,
				softwareSkills: [...newArray],
			}));

			const newAvailableSkills = skills.softWareAvailableSkills.map((eachSkill) => {
				if (skillId === eachSkill.id) {
					return {
						...eachSkill,
						isSet: false,
					};
				}
				return eachSkill;
			});
			setSkills((previous) => ({
				...previous,
				softWareAvailableSkills: [...newAvailableSkills],
			}));
		}
	}

	function deleteAllSkills() {
		setSkills((previous) => ({
			...previous,
			softwareSkills: [],
		}));

		// get all skills that has isSet === true
		const newArray = skills.softWareAvailableSkills.map((eachSkill) => {
			if (eachSkill.isSet === true) {
				return {
					...eachSkill,
					isSet: false,
				};
			}
			return eachSkill;
		});
		setSkills((previous) => ({
			...previous,
			softWareAvailableSkills: [...newArray],
		}));
	}

	return (
		<div className="border border-solid overflow-hidden border-gray-200 rounded-md">
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="px-2 py-3">
								<span className="select-none flex flex-col items-start gap-x-3 px-2">
									<h2 className="Capitalize font-semibold text-lg">Software Skills</h2>
									<span className="text-[13px] text-gray-400">
										Prioritize your skills and select the ones you are very good at.
									</span>
								</span>
							</AccordionHeader>
							<AccordionBody className="overflow-hidden px-2" as="section">
								<div className={`px-2 bg-transparent round-sm ${open ? "py-3" : "py-0"}`}>
									<>
										<div className="mb-8">
											<header className="text-sm text-gray-400 mb-2">
												Select the software skills you are well experienced with
											</header>
											<div className="flex items-center flex-wrap gap-2 overflow-y-scroll max-h-[350px] py-4 px-3 border border-solid border-border_clr rounded-md scroll">
												{skills.softWareAvailableSkills.map(({ skillName, id, isSet }) => {
													return (
														<React.Fragment key={id}>
															<button
																type="button"
																className={`flex items-center gap-[4px] rounded-[4px] p-2 ${
																	isSet === true
																		? "bg-hoverBgClr text-white hover:bg-opacity-90 cursor-not-allowed "
																		: "text-slate-600 bg-[rgb(239,242,249)] hover:bg-main hover:bg-opacity-30 cursor-pointer pointer-events-auto"
																}`}
																disabled={isSet ? true : false}
																onClick={(e) => addSkillWithValue(e, { skillName, id, isSet })}>
																<span className="text-[.7rem]">{skillName}</span>
																<Icon
																	icon={isSet ? "solar:lock-keyhole-broken" : "solar:lock-keyhole-unlocked-broken"}
																	className={`${isSet ? "text-white" : "text-slate-600"}`}
																/>
															</button>
														</React.Fragment>
													);
												})}
											</div>
										</div>
									</>
									{skills.softwareSkills.length !== 0 && (
										<div className="p-3 border border-solid border-border_clr rounded-md">
											<div className="flex items-center justify-between gap-y-2">
												<header className="text-sm text-gray-400">Software skills you have</header>
												<button
													type="button"
													className="flex items-center gap-2 text-gray-400 group/delete"
													onClick={deleteAllSkills}>
													<span className="text-[.8rem] group-hover/delete:text-red-500 leading-tighter">Delete all</span>
													<Icon icon="ep:delete" className="group-hover/delete:text-red-500 w-4 h-4" />
												</button>
											</div>
											<div
												name="languages-container"
												className="flex flex-wrap overflow-hidden items-center gap-2 mt-3 relative">
												{skills.softwareSkills.length !== 0 &&
													skills.softwareSkills.map(({ id, skillName }) => {
														return (
															<React.Fragment key={id}>
																<span
																	className="bg-[rgb(239,242,249)] text-[rgb(30,37,50)] flex items-center gap-[3px] hover:text-main px-4 py-[2px] w-max rounded-[4px] cursor-pointer overflow-hidden group/HoverIt"
																	id={id}>
																	<span name="soft-skill" className="text-[.75rem]">
																		{skillName}
																	</span>
																	<span
																		className="bg-transparent hover:bg-slate-200 hover:bg-opacity-80 rounded-full p-2 group/delete -mr-8 duration-500 ease-in-out group-hover/HoverIt:mr-0 scale-0 group-hover/HoverIt:scale-100"
																		role="button"
																		onClick={() => handleDeleteSkill(id)}>
																		<Icon
																			icon="ep:delete"
																			className=" text-slate-700 group-hover/delete:text-red-600"
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
