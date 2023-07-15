import { Icon } from "@iconify/react";
import React, { memo, useContext, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import InputWithLabel from "../../FormComponent/InputComponent";
import { userDataContext } from "../CreateResumePage";

const LanguageIndex = () => {
	const { languages, setLanguages } = useContext(userDataContext);

	const [languageInput, setLanguageInput] = useState("");
	const [languageItem, setLanguageItem] = useState({ id: 0, languageName: "" });

	function setTheInput(inputValue) {
		setLanguageInput(inputValue);
		setLanguageItem((previous) => {
			return {
				...previous,
				languageName: inputValue,
			};
		});
	}

	function addLanguage() {
		if (languageInput.length !== 0) {
			setLanguages((previousLanguages) => {
				return [...previousLanguages, languageItem];
			});
			setLanguageInput("");
			setLanguageItem((previous) => ({ ...previous, id: languageItem.id + 1 }));
		}
	}

	const handleDeleteLanguage = (LanguageId) => {
		const newLanguages = languages.filter((eachLanguage) => eachLanguage.id !== LanguageId);
		setLanguages(newLanguages);
	};

	return (
		<div className="border border-gray-300 border-solid rounded-md shadow-md">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3">
							<Icon icon="heroicons:language-solid" className="w-8 h-8" />
							<h2 className="Capitalize font-semibold text-xl">Languages</h2>
						</span>
					</AccordionHeader>

					<AccordionBody className="px-4 md:px-6">
						<div className="flex flex-col gap-y-3">
							<div className="pb-3">
								{languages.length !== 0 && (
									<>
										<div className="flex items-center justify-between gap-y-2">
											<header className="text-sm text-gray-400">Languages you can speak</header>
										</div>
										<div name="languages-container" className="flex flex-wrap overflow-hidden items-center gap-3 mt-3 relative">
											{languages &&
												languages.map(({ languageName, id }, langIndex) => (
													<React.Fragment key={langIndex}>
														<span className="bg-[rgb(239,242,249)] text-[rgb(30,37,50)] flex items-center gap-[3px] hover:text-main px-4 py-[3px] w-max rounded-[4px] cursor-pointer overflow-hidden group/HoverIt">
															<span name="language" className="text-sm">
																{languageName}
															</span>
															<span
																className="bg-transparent hover:bg-slate-200 hover:bg-opacity-80 rounded-full p-2 group/Language -mr-8 duration-500 ease-in-out group-hover/HoverIt:mr-0 scale-0 group-hover/HoverIt:scale-100"
																role="button"
																onClick={() => handleDeleteLanguage(id)}>
																<Icon
																	icon="ep:delete"
																	className=" text-slate-700 group-hover/Language:text-red-600"
																/>
															</span>
														</span>
													</React.Fragment>
												))}
										</div>
									</>
								)}

								<div className={`${languages.length !== 0 ? "mt-10" : "mt-3"} mb-3`}>
									<div className="flex gap-4 justify-content-between items-end flex-wrap">
										<div className="flex-grow">
											<InputWithLabel
												value={languageInput}
												name="language"
												label="Language"
												updateTheDetail={setTheInput}
												placeholder="Enter a language you speak "
											/>
										</div>
										<button
											type="button"
											className={`p-3 px-8 text-sm rounded-sm ${
												languageInput
													? "cursor-pointer bg-main text-white hover:bg-hoverBgClr"
													: " cursor-not-allowed bg-slate-200 text-gray-400"
											}`}
											onClick={addLanguage}
											disable={languageInput ? "false" : "true"}>
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

export default memo(LanguageIndex);
