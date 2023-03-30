import React from "react";
import image from "../../assets/images/dart-bullseye.svg";

const SecondSection = () => {
	return (
		<div className="bg-main_3 py-28 px-4 text-white">
			<div className="text-center flex items-center justify-center">
				<img src={image} alt="" />
			</div>
			<div className="text-center max-w-sm mx-auto mt-6">
				<h1 className="font-extrabold text-4xl md:text-5xl">Proven resumé templates</h1>
				<div className="my-8">
					<span className="text-slate-400">
						Win over employers and recruiters by using one of our 5 professionally-designed resume templates. Download as Word docx format
						or PDF format.
					</span>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
