import React from "react";
import img from "../../assets/images/get-a-job.svg";

const FinalSection = () => {
	return (
		<div className="grid grid-cols-12 py-10 bg-main_2">
			<div className="col-span-full flex items-center justify-center">
				<img src="" alt="alt 1" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-4 lg:col-end-10 flex items-center justify-between">
				<img src="" alt="Alternate image with error" />
				<img src="" alt="Alternate image with error" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-1 text-center lg:col-end-13 flex items-center justify-around gap-8">
				<img src="" alt="alt 1" />
				<img src={img} alt="alt-3" className="max-w-lg w-full" />
				<img src="" alt="alt 2" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-4 lg:col-end-10 flex items-center justify-between">
				<img src="" alt="Alternate image with error" />
				<img src="" alt="Alternate image with error" />
			</div>
			<div className="col-span-full flex items-center justify-center">
				<img src="" alt="alt 2" />
			</div>
		</div>
	);
};

export default FinalSection;
