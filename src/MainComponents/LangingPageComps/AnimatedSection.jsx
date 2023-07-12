import React from "react";
import { memo } from "react";

const AnimatedSection = () => {
	return (
		<div className="py-20">
			<div className="grid grid-cols-2 gap-8">
				<div className={`col-span-full md:col-start-1 md:col-end-2`}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vero hic laborum beatae facere sunt veniam dolorem iusto quisquam,
					error explicabo quidem totam aspernatur odit. Aperiam tenetur quos fuga repudiandae.
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
