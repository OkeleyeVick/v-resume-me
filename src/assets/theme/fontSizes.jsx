import React from "react";
import { Link } from "react-router-dom";

export const Span = ({ children, className }) => {
	return (
		<span style={{ fontSize: 16, lineHeight: 1.4 }} className={`${className} break-words`}>
			{children}
		</span>
	);
};
export const Span1 = ({ children, className }) => {
	return (
		<span style={{ fontSize: 12, lineHeight: 1.4 }} className={`${className} break-words`}>
			{children}
		</span>
	);
};
export const Link_ = ({ children, className, to }) => {
	return (
		<Link to={to} target="_blank" className={`${className} break-words`} style={{ fontSize: 12, lineHeight: 1.4 }}>
			{children}
		</Link>
	);
};
export const Small = ({ children, className }) => (
	<small className={`${className} break-words`} style={{ fontSize: 12, lineHeight: 1.4 }}>
		{children}
	</small>
);
export const Smaller = ({ children, className }) => (
	<small className={`${className} break-words`} style={{ fontSize: 10, lineHeight: 1.4 }}>
		{children}
	</small>
);
