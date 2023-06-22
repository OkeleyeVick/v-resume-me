import { Icon } from "@iconify/react";
import React from "react";

const Accordion = ({ children }) => {
	return (
		<div className="accordion shadow-sm border border-solid border-border_clr rounded-[4px] overflow-hidden">
			<header className="cursor-pointer flex items-center py-6 px-6 justify-between bg-red-300">
				<span className="text-xs">Something unnecessary</span>
				<Icon icon="tabler:minus" />
			</header>
			<div className="accordion-body px-5 py-6 text-xs">{children}</div>
		</div>
	);
};

export default Accordion;
