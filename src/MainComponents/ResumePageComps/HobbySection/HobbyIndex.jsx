import { Icon } from "@iconify/react";
import React, { memo, useContext, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { userDataContext } from "../CreateResumePage";

const HobbyIndex = () => {
	const { hobbies, setHobbies } = useContext(userDataContext);

	const [hobbiesInput, setHobbiesInput] = useState("");
	const [hobbyItem, setHobbyItem] = useState({ id: 0, hobbyName: "" });

	function setTheInput(inputValue) {
		setHobbiesInput(inputValue.trim());
		setHobbyItem((previous) => {
			return {
				...previous,
				hobbyName: inputValue.trim(),
			};
		});
	}

	function addHobby() {
		if (hobbiesInput.trim().length !== 0) {
			setHobbies((previousHobbies) => {
				return [...previousHobbies, hobbyItem];
			});
			setHobbiesInput("");
			setHobbyItem((previous) => ({ ...previous, id: hobbyItem.id + 1 }));
		}
	}

	const handleDeleteHobby = (HobbyId) => {
		const newHobbies = hobbies.filter((eachHobby) => eachHobby.id !== HobbyId);
		setHobbies(newHobbies);
	};

	return (
		<div className="border border-gray-300 border-solid rounded-md shadow-md">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3">
							<Icon icon="fluent-mdl2:cycling" className="w-8 h-8" />
							<h2 className="Capitalize font-semibold text-xl">Hobbies</h2>
						</span>
					</AccordionHeader>

					<AccordionBody className="px-4 md:px-6">
						<div className="flex flex-col gap-y-3">
							<div className="pb-3">
								{hobbies.length !== 0 && (
									<>
										<div className="flex items-center justify-between gap-y-2">
											<header className="text-sm text-gray-400">Your favourite hobbies</header>
										</div>
										<div name="hobbies-container" className="flex flex-wrap overflow-hidden items-center gap-3 mt-3 relative">
											{hobbies &&
												hobbies.map(({ hobbyName, id }, langIndex) => (
													<React.Fragment key={langIndex}>
														<span className="bg-[rgb(239,242,249)] text-[rgb(30,37,50)] flex items-center gap-[3px] hover:text-main px-4 py-[3px] w-max rounded-[4px] cursor-pointer overflow-hidden group/HoverIt">
															<span name="hobby" className="text-sm">
																{hobbyName}
															</span>
															<span
																className="bg-transparent hover:bg-slate-200 hover:bg-opacity-80 rounded-full p-2 group/Hobby -mr-8 duration-500 ease-in-out group-hover/HoverIt:mr-0 scale-0 group-hover/HoverIt:scale-100"
																role="button"
																onClick={() => handleDeleteHobby(id)}>
																<Icon icon="ep:delete" className=" text-slate-700 group-hover/Hobby:text-red-600" />
															</span>
														</span>
													</React.Fragment>
												))}
										</div>
									</>
								)}

								<div className={`${hobbies.length !== 0 ? "mt-10" : "mt-3"} mb-3`}>
									<div className="flex gap-4 justify-content-between items-end flex-wrap">
										<div className="flex-grow">
											<InputWithLabel
												value={hobbiesInput}
												name="hobby"
												label="Hobby"
												updateTheDetail={setTheInput}
												placeholder="Enter your hobbies"
											/>
										</div>
										<button
											type="button"
											className={`p-3 px-8 text-sm rounded-sm ${
												hobbiesInput
													? "cursor-pointer bg-main text-white hover:bg-hoverBgClr"
													: " cursor-not-allowed bg-slate-200 text-gray-400"
											}`}
											onClick={addHobby}
											disable={hobbiesInput ? "false" : "true"}>
											Add
										</button>
									</div>
								</div>
							</div>
						</div>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default memo(HobbyIndex);
