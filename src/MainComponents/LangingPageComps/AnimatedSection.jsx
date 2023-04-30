import React from "react";
import video from "../../assets/images/job-recruiter.gif";
import { memo } from "react";

const AnimatedSection = () => {
	return (
		<div className="py-20">
			<div className="grid grid-cols-2 gap-8">
				<div className="col-span-full md:col-start-1 md:col-end-2">
					<img src={video} alt="" className="max-w-lg mx-auto w-full" />
				</div>
				<div className="col-span-full md:col-start-2 md:col-end-3 p-4 md:p-8">
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cupiditate, assumenda minima tenetur recusandae
						expedita eaque quasi, beatae velit laudantium. Magnam beatae fuga qui iusto sit quod atque repellat?
					</span>
				</div>
			</div>
		</div>
	);
};

export default memo(AnimatedSection);
