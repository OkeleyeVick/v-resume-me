import React from "react";
import PersonalDetails from "./BasicTemplateComponents/PersonalDetails";

const BasicTemplate = () => {
	return (
		<div className="bg-gray-300 min-h-[100vh] p-4 grid grid-cols-3 gap-4">
			<section className="col-span-1 bg-[#DEAB52] p-4" style={{ backgroundColor: "" }}>
				<PersonalDetails />
			</section>
			<section className="col-span-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci quod perspiciatis perferendis inventore maiores odio. Quaerat
				repudiandae laudantium, ex, pariatur accusantium laborum voluptatum numquam, aliquam veritatis quas dolores fugit?
			</section>
		</div>
	);
};

export default BasicTemplate;
