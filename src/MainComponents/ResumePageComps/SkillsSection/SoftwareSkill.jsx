import React, { useContext } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { userDataContext } from "../CreateResumePage";

const SoftwareSkill = () => {
	const { skills, setSkills } = useContext(userDataContext);
	const { softwareSkill } = skills;

	return (
		<div className="border border-solid overflow-hidden border-gray-200 rounded-md">
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="px-2 py-3">
								<span className="select-none flex flex-col items-start gap-x-3 px-2">
									<h2 className="Capitalize font-semibold text-lg">Software Skills</h2>
									<span className="text-[13px] text-gray-400 text-start">
										Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the
										job listing (especially when applying via an online system).
									</span>
								</span>
							</AccordionHeader>
							<AccordionBody className="overflow-hidden px-2" as="section">
								<div className={`px-2 bg-transparent round-sm ${open ? "py-4" : "py-0"}`}>
									<div className="">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda vitae totam quaerat quidem. Cupiditate
										debitis corporis aliquam nihil nemo eius distinctio architecto velit. Recusandae magni explicabo quasi,
										perspiciatis porro sed.
									</div>
									<div></div>
								</div>
							</AccordionBody>
						</>
					);
				}}
			</AccordionItem>
		</div>
	);
};

export default SoftwareSkill;
