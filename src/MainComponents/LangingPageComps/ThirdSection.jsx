import React from "react";
import image from "../../assets/images/cv-woman.svg";
import downloadformat from "../../assets/images/download-types.svg";
import documentFormat from "../../assets/images/document-svg.svg";

const ThirdSection = () => {
	return (
		<div className="py-28">
			<div className="grid grid-cols-2 p-4 md:px-16 gap-20">
				<div className="col-span-full md:col-start-1 md:col-end-2 flex flex-col justify-center gap-y-8">
					<div className="flex items-center rounded-[12px] shadow-custom_3 overflow-hidden p-3">
						<div className=""></div>
						<div className="max-w-[13rem]">
							<img src={downloadformat} alt="" />
						</div>
					</div>
					<div className="flex items-center rounded-[12px] shadow-custom_3 overflow-hidden p-3">
						<div className=""></div>
						<div className="max-w-[13rem]">
							<img src={documentFormat} alt="" />
						</div>
					</div>
				</div>
				<div className="col-span-full md:col-start-2 md:col-end-3">
					<img src={image} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
