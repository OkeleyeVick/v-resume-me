import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../MainComponents/ResumePageComps/CreateResumePage";
export const H1 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h1 style={{ fontSize: `calc(${12.5}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h1>
	);
};
export const H2 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h2 style={{ fontSize: `calc(${12}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h2>
	);
};
export const H3 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h3 style={{ fontSize: `calc(${11.5}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h3>
	);
};
export const H4 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h4 style={{ fontSize: `calc(${11}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h4>
	);
};
export const H5 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h5 style={{ fontSize: `calc(${10.5}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h5>
	);
};
export const H6 = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<h6 style={{ fontSize: `calc(${10}px * ${scale - 0.9})` }} className={`${className}`}>
			{children}
		</h6>
	);
};
export const Span = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<span style={{ fontSize: `calc(${9.5}px * ${scale - 0.9})` }} className={className}>
			{children}
		</span>
	);
};
export const Link_ = ({ children, className, href }) => {
	const { scale } = useContext(themeContext);
	return (
		<Link to={href} className={className} style={{ fontSize: `calc(${9.5}px * ${scale - 0.9})` }}>
			{children}
		</Link>
	);
};
export const Div = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	return (
		<div className={className} style={{ fontSize: `calc(${12}px * ${scale - 0.9})` }}>
			{children}
		</div>
	);
};

export const ProfileImageContainer = ({ children, className }) => {
	const { scale } = useContext(themeContext);
	const size = 4;
	return (
		<div className={className} style={{ height: `calc(${size}rem * ${scale - 0.9})`, width: `calc(${size}rem * ${scale - 0.9})` }}>
			{children}
		</div>
	);
};
