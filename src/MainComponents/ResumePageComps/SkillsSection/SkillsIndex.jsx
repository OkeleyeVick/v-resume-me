import { Icon } from "@iconify/react";
import React, { memo } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
const SoftwareSkill = React.lazy(() => import("./SoftwareSkill"));
const SoftSkill = React.lazy(() => import("./SoftSkill"));

const SkillsIndex = () => {
	return (
		<div className="border border-gray-300 border-solid rounded-md shadow-md">
			<Accordion>
				<AccordionItem>
					<AccordionHeader className="flex items-center justify-between w-full p-5 px-6 focus-visible:outline-main">
						<span className="select-none flex items-center gap-x-3">
							<Icon icon="octicon:beaker-24" className="w-8 h-8" />
							<h2 className="Capitalize font-semibold text-xl">Skills</h2>
						</span>
					</AccordionHeader>
					<AccordionBody>
						<div className="accordion-body p-4 gap-4 flex flex-col">
							<React.Suspense>
								<SoftwareSkill />
								<SoftSkill />
							</React.Suspense>
						</div>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default memo(SkillsIndex);
