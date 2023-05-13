import { Icon } from "@iconify/react";
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import resumeOne from "../../assets/images/resume-1.png";
import resumeTwo from "../../assets/images/resume-2.png";
import resumeThree from "../../assets/images/resume-3.png";
import resumeFive from "../../assets/images/resume-5.png";
import resumeSix from "../../assets/images/resume-6.png";
import resumeSeven from "../../assets/images/resume-7.jpg";
import resumeEight from "../../assets/images/resume-8.jpg";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import B_Offcanvas from "../../assets/UI-Components/B_Offcanvas";
import "../../assets/css/fonts.css";

const baseFont = {
	Rubik: "Rubik",
};

const resumes = [
	{
		image: resumeSeven,
		resumetype: "basic",
		name: "basic_II",
		locked: false,
	},
	{
		image: resumeEight,
		resumetype: "basic",
		name: "basic_I",
		locked: false,
	},
	{
		image: resumeSix,
		resumetype: "standard",
		name: "standard",
		locked: false,
	},
	{
		image: resumeFive,
		resumetype: "basic III",
		name: "basic_III",
		locked: true,
	},
	{
		image: resumeThree,
		resumetype: "premium",
		name: "premium",
		locked: true,
	},
	{
		image: resumeTwo,
		resumetype: "professional",
		name: "professional",
		locked: true,
	},
	{
		image: resumeOne,
		resumetype: "expert",
		name: "expert",
		locked: true,
	},
];

const SelectTemplate = () => {
	return (
		<React.Fragment>
			<div style={{ fontFamily: baseFont.Rubik }}>
				<Header />
				<div className="py-8 md:p-16 lg:px-20">
					<div className="text-center">
						<h1 className="text-main font-bold text-2xl md:text-4xl">Select any template of your choice</h1>
						<small className="text-sm">You can only select one template for use</small>
					</div>
					<div className="py-8 px-4 md:py-16">
						<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 md:gap-8 md:gap-y-20">
							{resumes.map(({ image, resumetype, locked, name }, resumeIndex) => {
								return (
									<React.Fragment key={resumeIndex}>
										<div className="flex flex-col justify-between">
											<div className="border border-main rounded-md overflow-hidden relative">
												<div
													className={`absolute inset-0 m-auto flex items-center justify-center bg-black/50 ${
														locked ? "hover:bg-main" : ""
													}`}>
													{locked ? (
														<div>
															<Icon
																icon="streamline:interface-lock-combination-combo-lock-locked-padlock-secure-security-shield-keyhole"
																className="text-4xl text-gray-50"
															/>
														</div>
													) : (
														<Link to={`/create-resume/${name}`}>
															<span className="uppercase text-white">{resumetype}</span>
														</Link>
													)}
												</div>
												<img src={image} alt="resume" className="capitalize text-sm" />
											</div>
											<div className="flex items-center justify-between mt-3 gap-1">
												<button
													type="button"
													name="view-template"
													className="text-xs selection:text-white bg-main hover:bg-hoverBgClr transition ease-in-out duration-500 rounded-md py-3 px-3 sm:px-5 text-white"
													onClick={() => console.log("welll")}>
													<span className="hidden md:inline">View template</span>
													<Icon icon="carbon:document-view" className="md:hidden w-5 h-4" />
												</button>
												<Link
													to={locked ? "" : `/create-resume/${name}`}
													className={`${
														locked ? "cursor-not-allowed bg-main/70" : " bg-main cursor-pointer hover:bg-hoverBgClr"
													} text-[11px] sm:text-xs selection:text-white transition ease-in-out duration-500 rounded-md py-3 px-2 sm:px-3 text-white`}>
													{locked ? "Unavailable" : "Use Template"}
												</Link>
											</div>
										</div>
									</React.Fragment>
								);
							})}
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default memo(SelectTemplate);
