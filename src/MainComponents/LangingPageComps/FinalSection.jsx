import React from "react";
import img from "../../assets/images/get-a-job.svg";
import img_two from "../../assets/images/resume-1.png";
import img_three from "../../assets/images/resume-2.png";
import img_four from "../../assets/images/resume-3.png";
import img_five from "../../assets/images/resume-4.jpg";
import img_six from "../../assets/images/resume-5.png";
import img_seven from "../../assets/images/resume-6.png";

const FinalSection = () => {
	return (
		<div className="grid grid-cols-12 py-10 bg-main_2">
			<div className="col-span-full flex items-center justify-center md:hidden">
				<img src={img_two} className="max-w-[120px] w-full" alt="alt 1" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-4 lg:col-end-10 flex items-center justify-between">
				<img src={img_three} className="max-w-[120px] w-full" alt="Alternate image with error" />
				<img src={img_four} className="max-w-[120px] w-full" alt="Alternate image with error" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-1 text-center lg:col-end-13 flex items-center justify-around gap-8">
				<img src={img_five} className="max-w-[120px] hidden md:inline w-full" alt="alt 1" />
				<img src={img} alt="alt-3" className="max-w-sm w-full" />
				<img src={img_six} className="max-w-[120px] hidden md:inline w-full" alt="alt 2" />
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-4 lg:col-end-10 flex items-center justify-between">
				<img src={img_five} className="max-w-[120px] w-full" alt="Alternate image with error" />
				<img src={img_four} className="max-w-[120px] w-full" alt="Alternate image with error" />
			</div>
			<div className="col-span-full flex items-center justify-center md:hidden">
				<img src={img_three} className="max-w-[120px] w-full" alt="alt 2" />
			</div>
		</div>
	);
};

export default FinalSection;
