import React, { memo } from "react";
import img from "../../assets/images/PageImages/get-a-job.svg";
import img_one from "../../assets/images/ResumeImages/thumbnail.png";
import img_two from "../../assets/images/ResumeImages/thumbnail 2.png";
import img_three from "../../assets/images/ResumeImages/thumbnail 3.png";
import img_four from "../../assets/images/ResumeImages/thumbnail 4.png";
import img_five from "../../assets/images/ResumeImages/thumbnail 5.png";
import img_six from "../../assets/images/ResumeImages/thumbnail 6.png";

const FinalSection = () => {
	return (
		<div className="grid grid-cols-12 py-10 bg-main_2 overflow-x-hidden">
			<div className="col-span-full flex items-center -mb-16 justify-center md:hidden">
				<figure>
					<img src={img_two} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="alt 1" />
				</figure>
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 px-8 lg:col-start-4 lg:col-end-10 flex items-center justify-center gap-40">
				<figure>
					<img src={img_three} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="Alternate image with error" />
				</figure>
				<figure>
					<img src={img_four} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="Alternate image with error" />
				</figure>
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-1 text-center lg:col-end-13 flex items-center justify-center gap-16">
				<figure>
					<img src={img_five} className="animate-rotate bg-gray-50 max-w-[80px] hidden md:inline w-full" alt="alt 1" />
				</figure>
				<div className=" flex flex-col items-center gap-y-8">
					<img src={img} alt="alt-3" className="max-w-sm w-full" />
				</div>
				<figure>
					<img src={img_six} className="animate-rotate bg-gray-50 max-w-[80px] hidden md:inline w-full" alt="alt 2" />
				</figure>
			</div>
			<div className="col-span-full md:col-start-1 md:col-end-13 p-4 lg:col-start-4 lg:col-end-10 flex items-center justify-center gap-40">
				<figure>
					<img src={img_five} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="Alternate image with error" />
				</figure>
				<figure>
					<img src={img_one} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="Alternate image with error" />
				</figure>
			</div>
			<div className="col-span-full flex items-center justify-center md:hidden -mt-16">
				<figure>
					<img src={img_six} className="animate-rotate bg-gray-50 max-w-[80px] w-full" alt="alt 2" />
				</figure>
			</div>
		</div>
	);
};

export default memo(FinalSection);
