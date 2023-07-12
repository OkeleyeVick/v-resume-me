import React, { useContext } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { userDataContext } from "../CreateResumePage";

const SoftwareSkill = () => {
	const { skills, setSkills } = useContext(userDataContext);
	const { softwareSkills } = skills;

	return (
		<div className="border border-solid overflow-hidden border-gray-200 rounded-md">
			<AccordionItem>
				{({ open }) => {
					return (
						<>
							<AccordionHeader className="px-2 py-3">
								<span className="select-none flex flex-col items-start gap-x-3 px-2">
									<h2 className="Capitalize font-semibold text-lg">Software Skills</h2>
									<span className="text-[13px] text-gray-400">
										Enter the qualities you possess e.g Adaptability, Teamwork, Self-confidence... etc
									</span>
								</span>
							</AccordionHeader>
							<AccordionBody className="overflow-hidden px-2" as="section">
								<div className={`px-2 bg-transparent round-sm ${open ? "py-4" : "py-0"}`}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic harum doloribus autem repellendus nihil assumenda
									ducimus, magni fugit quaerat eveniet sint dolore nobis. Voluptatum adipisci maxime sequi debitis voluptates sunt!
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
