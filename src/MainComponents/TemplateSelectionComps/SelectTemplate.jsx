import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import resumeOne from "../../assets/images/resume-1.png";
import resumeTwo from "../../assets/images/resume-2.png";
import resumeThree from "../../assets/images/resume-3.png";
import resumeFive from "../../assets/images/resume-5.png";
import resumeSix from "../../assets/images/resume-6.png";
import Header from "../GeneralComponents/Header";

const SelectTemplate = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="py-8 md:p-16 lg:px-20">
				<div className="text-center">
					<h1 className="text-main font-bold text-2xl md:text-4xl">Select any template of your choice</h1>
					<small className="text-sm">You can only select one template for use</small>
				</div>
				<div className="py-8 px-4 md:py-16">
					<div className="">
						<ul className="grid grid-cols-2 lg:grid-cols-3 gap-8">
							{resumes.map((resume, resumeIndex) => {
								const { image } = resume;
								return (
									<React.Fragment key={resumeIndex}>
										<div>
											<div className="border border-main rounded-md overflow-hidden">
												<img src={image} alt="" />
											</div>
											<div className="flex items-center justify-between mt-3">
												<button
													type="button"
													className="text-sm selection:text-white bg-main hover:bg-hoverBgClr transition ease-in-out duration-500 rounded-md py-3 px-5 text-white">
													<span className="hidden md:inline">View template</span>
													<Icon icon="carbon:document-view" className="md:hidden w-5 h-5" />
												</button>
												<Link to=""></Link>
											</div>
										</div>
									</React.Fragment>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SelectTemplate;

const resumes = [
	{
		image: resumeFive,
	},
	{
		image: resumeSix,
	},
	{
		image: resumeThree,
	},
	{
		image: resumeTwo,
	},
	{
		image: resumeOne,
	},
];
