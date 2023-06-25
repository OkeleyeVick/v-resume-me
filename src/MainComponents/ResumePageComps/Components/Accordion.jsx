import { Icon } from "@iconify/react";
import React from "react";

const Accordion = ({ children, toggleAccordion }) => {
	return (
		<div className="accordion border border-solid border-border_clr rounded-2xl overflow-hidden shadow-custom_3" onClick={toggleAccordion}>
			<header className="cursor-pointer flex items-center py-6 px-8 justify-between">
				<div id="title" className="select-none">
					<span className="flex items-center gap-x-3">
						<Icon icon="cil:education" className="w-8 h-8" />
						<h2 className="font-bold text-xl">Education</h2>
					</span>
				</div>
				<Icon icon="ion:chevron-down-outline" className="h-6 w-6 text-slate-600" />
			</header>
			<div className="accordion-body px-5 text-xs h-0">{children}</div>
		</div>
	);
};

export default Accordion;
