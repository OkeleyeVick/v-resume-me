import React from "react";
import resumeOne from "../../assets/images/resume-1.png";
import resumeTwo from "../../assets/images/resume-2.png";
import resumeThree from "../../assets/images/resume-3.png";
import resumeFive from "../../assets/images/resume-5.png";
import resumeSix from "../../assets/images/resume-6.png";

const SelectTemplate = () => {
	return (
		<div className="py-8 md:px-16 lg:px-20">
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
									<div className="">
										<div className="border border-main rounded-md overflow-hidden">
											<img src={image} alt="" />
										</div>
										<div className="flex items-center justify-between">
											<button type="button" className="text-sm ">
												View template
											</button>
										</div>
									</div>
								</React.Fragment>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
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
