import React, { useContext } from "react";
import PersonalDetails from "./BasicTemplateComponents/PersonalDetails";
import "../assets/css/fonts.css";

const BasicTemplate = () => {
	return (
		<div className="bg-white min-h-[100vh] p-4 grid grid-cols-3 gap-4">
			<section className="col-span-1 bg-[#DEAB52] py-4 px-3">
				<PersonalDetails />
			</section>
			<section className="col-span-2 text-xs">
				<div className="">
					<h3 className="uppercase font-semibold text-slate-900 tracking-wider">Summary</h3>
					<div>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam vitae beatae fuga! Quaerat exercitationem ab sequi culpa
						in similique impedit quae ipsum, et eius aliquam, maiores dolor, nostrum saepe?
					</div>
				</div>
			</section>
		</div>
	);
};

export default BasicTemplate;
