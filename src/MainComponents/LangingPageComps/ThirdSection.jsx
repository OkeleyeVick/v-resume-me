import React from "react";
import image from "../../assets/images/cv-woman.svg";
import downloadformat from "../../assets/images/download-types.svg";
import documentFormat from "../../assets/images/document-svg.svg";

const ThirdSection = () => {
	return (
		<div className="py-28">
			<div className="grid grid-cols-2 p-4 md:px-16 gap-20">
				<div className="col-span-full md:col-start-1 md:col-end-2 flex flex-col justify-center gap-y-8">
					<div className="flex items-center flex-col-reverse md:flex-row justify-center md:justify-around text-center rounded-[12px] overflow-hidden p-3">
						<div className="flex flex-col gap-y-4">
							<h3 className="font-semibold text-xl text-main">Download Your Resume</h3>
							<span className="block text-sm">Create your resume and download it in a PDF (.pdf) or DOCX (.docx) format.</span>
						</div>
						<div className="max-w-[16rem]">
							<img src={downloadformat} alt="" />
						</div>
					</div>
					<div className="flex items-center  flex-col-reverse md:flex-row justify-center md:justify-around text-center rounded-[12px] overflow-hidden p-3">
						<div className="flex flex-col gap-y-4">
							<h3 className="font-semibold text-xl text-main">Multi-theme Resume</h3>
							<span className="block text-sm">Sweet to let you know that you can have your resume in different theme of options.</span>
						</div>
						<div className="max-w-[16rem]">
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
