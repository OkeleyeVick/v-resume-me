import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import resumeOne from "../../assets/images/resume-1.png";
import resumeTwo from "../../assets/images/resume-2.png";
import resumeThree from "../../assets/images/resume-3.png";
import resumeFive from "../../assets/images/resume-5.png";
import resumeSix from "../../assets/images/resume-6.png";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import "../../assets/css/fonts.css";
import B_Offcanvas from "../../assets/UI-Components/B_Offcanvas";

const baseFont = {
	Syne: "Syne ",
	Rubik: "Rubik",
	Montserrat: "Montserrat",
	Sora: "Sora",
	Comfortaa: "Comfortaa",
	IBMPlexSans: "IBMPlexSans",
	Oxygen: "Montserrat",
	Mulish: "Montserrat",
};

const resumes = [
	{
		image: resumeFive,
		resumetype: "basic",
	},
	{
		image: resumeSix,
		resumetype: "standard",
	},
	{
		image: resumeThree,
		resumetype: "premium",
	},
	{
		image: resumeTwo,
		resumetype: "professional",
	},
	{
		image: resumeOne,
		resumetype: "expert",
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
							{resumes.map(({ image, resumetype }, resumeIndex) => {
								return (
									<React.Fragment key={resumeIndex}>
										<div>
											<div className="border border-main rounded-md overflow-hidden">
												<img src={image} alt="" />
											</div>
											<div className="flex items-center justify-between mt-3 gap-1">
												<button
													type="button"
													className="text-xs selection:text-white bg-main hover:bg-hoverBgClr transition ease-in-out duration-500 rounded-md py-3 px-3 sm:px-5 text-white"
													onClick={() => console.log("welll")}>
													<span className="hidden md:inline">View template</span>
													<Icon icon="carbon:document-view" className="md:hidden w-5 h-4" />
												</button>
												<Link
													to={`/create-resume/${resumetype}`}
													className="text-[11px] sm:text-xs selection:text-white bg-main hover:bg-hoverBgClr transition ease-in-out duration-500 rounded-md py-3 px-2 sm:px-3 text-white">
													Use Template
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

export default SelectTemplate;
