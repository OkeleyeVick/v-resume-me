import { Icon } from "@iconify/react";
import React from "react";

const Accordion = ({ children, toggle, icon, title }) => {
	const { state, action } = toggle;
	return (
		<div className={`mt-6 accordion border border-solid border-border_clr rounded-2xl overflow-hidden shadow-custom_3`}>
			<header className="cursor-pointer flex items-center py-6 px-8 justify-between" onClick={() => action(!state)}>
				<div id="title" className="select-none">
					<span className="flex items-center gap-x-3">
						<Icon icon={icon} className="w-8 h-8" />
						<h2 className="capitalize font-bold text-xl">{title}</h2>
					</span>
				</div>
				<Icon icon="ion:chevron-down-outline" className="h-6 w-6 text-slate-600" />
			</header>
			<div className={`accordion-body px-5 text-xs ${state ? "h-0" : "h-auto"}`}>{children}</div>
		</div>
	);
};

export default Accordion;
