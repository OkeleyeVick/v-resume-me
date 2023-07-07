import React from "react";
import { motion } from "framer-motion";

export const H1 = ({ children, className }) => (
	<motion.h1 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h1>
);
export const H2 = ({ children, className }) => (
	<motion.h2 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h2>
);
export const H3 = ({ children, className }) => (
	<motion.h3 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h3>
);
export const H4 = ({ children, className }) => (
	<motion.h4 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h4>
);
export const H5 = ({ children, className }) => (
	<motion.h5 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h5>
);
export const H6 = ({ children, className }) => (
	<motion.h6 transition={{ ease: "easeInOut" }} className={`${className}`}>
		{children}
	</motion.h6>
);
export const Span = ({ children, className }) => <span className={className}>{children}</span>;
export const Div = ({ children, className }) => (
	<motion.div className={className} transition={{ ease: "easeInOut" }}>
		{children}
	</motion.div>
);
