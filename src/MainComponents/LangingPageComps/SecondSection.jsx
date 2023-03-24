import React, { useEffect } from "react";
import image from "../../assets/images/dart-bullseye.svg";

const SecondSection = () => {
	useEffect(() => {
		var string1 = "Fishingweeksare";
		var intvalue = 35;
		alert(string1 + intvalue);
	}, []);

	return (
		<div className="bg-main_3 py-28 px-4 text-white">
			<div className="text-center flex items-center justify-center">
				<img src={image} alt="" />
			</div>
			<div className="text-center max-w-sm mx-auto mt-6">
				<h1 className="font-extrabold text-4xl md:text-5xl">Proven resumé templates</h1>
				<div className="my-8">
					<span className="text-slate-400">
						Win over employers and recruiters by using one of our 5 professionally-designed cover letter templates. Download to Word or
						PDF.
					</span>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
