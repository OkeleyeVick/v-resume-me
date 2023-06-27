import { Icon } from "@iconify/react";
import React from "react";
import { easeIn, motion } from "framer-motion";

const Accordion = ({ children, toggle, icon, title }) => {
	const { state, action } = toggle;
	return (
		<motion.div className={`mt-6 accordion border border-solid border-border_clr rounded-2xl overflow-hidden shadow-custom_3`}>
			<header className="cursor-pointer flex items-center py-6 px-8 justify-between" onClick={() => action(!state)}>
				<div id="title" className="select-none">
					<span className="flex items-center gap-x-3">
						<Icon icon={icon} className="w-8 h-8" />
						<h2 className="capitalize font-semibold text-xl">{title}</h2>
					</span>
				</div>
				<Icon icon="ion:chevron-down-outline" className={`${state === true ? "rotate-180" : "rotate-0"} h-6 w-6 text-slate-600`} />
			</header>
			<motion.div
				initial={{ height: state ? 0 : 100, opacity: state ? 0 : 1 }}
				animate={{ height: state ? 100 : 0, opacity: state ? 1 : 0 }}
				transition={{ duration: 0.01, ease: "easeInOut" }}
				className={`accordion-body px-5 text-xs overflow-hidden`}>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Accordion;
