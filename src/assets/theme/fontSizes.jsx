import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../MainComponents/ResumePageComps/CreateResumePage";

const fontSize12 = ".8rem";
const fontSize16 = "1rem";
const fontSize10 = ".7rem";
const fontSize11 = ".79rem";

export const Span = ({ children, className }) => {
	const {
		themeSelection: {
			userResumeColor: {
				selectedColor: { color },
			},
		},
	} = useContext(themeContext);
	return (
		<span style={{ fontSize: `${fontSize16}`, lineHeight: 1.4, color: `${color}` }} className={`${className} break-words`}>
			{children}
		</span>
	);
};

export const Span1 = ({ children, className }) => {
	return (
		<span style={{ fontSize: `${fontSize12}`, lineHeight: 1.4 }} className={`${className} break-words`}>
			{children}
		</span>
	);
};
export const Link_ = ({ children, className, to }) => {
	return (
		<Link to={to} target="_blank" className={`${className} break-words`} style={{ fontSize: `${fontSize12}`, lineHeight: 1.4 }}>
			{children}
		</Link>
	);
};
export const Small = ({ children, className }) => (
	<small className={`${className} break-words`} style={{ fontSize: `${fontSize12}`, lineHeight: 1.4 }}>
		{children}
	</small>
);
export const Smaller = ({ children, className }) => (
	<small className={`${className} break-words`} style={{ fontSize: `${fontSize10}`, lineHeight: 1.4 }}>
		{children}
	</small>
);

export const DescriptionText = ({ textValue }) => (
	<span style={{ fontSize: `${fontSize11}`, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: textValue }}></span>
);
