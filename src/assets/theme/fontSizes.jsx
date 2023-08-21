import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../MainComponents/ResumePageComps/CreateResumePage";
import { motion } from "framer-motion";

const fontSize12 = ".62rem";
const fontSize16 = ".9rem";
const fontSize11 = ".65rem";

export const Span = ({ children, className }) => {
	const {
		themeSelection: {
			userResumeColor: {
				selectedColor: { color },
			},
		},
	} = useContext(themeContext);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			style={{ fontSize: `${fontSize16}`, lineHeight: 1.6, color: `${color}` }}
			className={`${className} break-words`}>
			{children}
		</motion.div>
	);
};

export const Span1 = ({ children, className }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			style={{ fontSize: `${fontSize12}`, lineHeight: 1.6 }}
			className={`${className} break-words`}>
			{children}
		</motion.div>
	);
};
export const Link_ = ({ children, className, to }) => {
	return (
		<Link to={to} target="_blank" className={`${className} break-words`} style={{ fontSize: `${fontSize12}`, lineHeight: 1.6 }}>
			{children}
		</Link>
	);
};
export const Small = ({ children, className }) => (
	<motion.small
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className={`${className} break-words`}
		style={{ fontSize: `${fontSize12}`, lineHeight: 1.6 }}>
		{children}
	</motion.small>
);
export const Smaller = ({ children, className }) => (
	<motion.small
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		className={`${className} break-words`}
		style={{ fontSize: `${fontSize11}`, lineHeight: 1.6 }}>
		{children}
	</motion.small>
);

export const DescriptionText = ({ textValue }) => (
	<motion.small
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		style={{ fontSize: `${fontSize11}`, lineHeight: 1.2 }}
		dangerouslySetInnerHTML={{ __html: textValue }}></motion.small>
);
