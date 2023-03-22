import React from "react";
import video from "../../assets/images/job-recruiter.gif";

const FirstSection = () => {
	return (
		<div className="py-10">
			<div className="flex flex-col md:flex-row">
				<div className="">
					<img src={video} alt="" />
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default FirstSection;
