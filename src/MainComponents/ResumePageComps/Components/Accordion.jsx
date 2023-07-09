import { Icon } from "@iconify/react";
import React from "react";
import { easeIn, motion } from "framer-motion";

const Accordion = ({ children, toggle, icon, title }) => {
	const { state, action } = toggle;
	return (
		<motion.div className={`mt-6 accordion border border-solid border-gray-300 rounded-md overflow-hidden`}>
			<header className="cursor-pointer flex items-center py-5 px-8 justify-between" onClick={() => action(!state)}>
				<div id="title" className="select-none">
					<span className="flex items-center gap-x-3">
						<Icon icon={icon} className="w-8 h-8" />
						<h2 className="capitalize font-semibold text-xl">{title}</h2>
					</span>
				</div>
				<Icon icon="ion:chevron-down-outline" className={`${state === true ? "rotate-180" : "rotate-0"} h-6 w-6 text-slate-600`} />
			</header>
			<div
				className={`accordion-body px-5 text-xs grid overflow-hidden duration-300 ease-in-out ${
					state === true ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}>
				<div className={`min-h-0`}>{children}</div>
			</div>
		</motion.div>
	);
};

export default Accordion;
