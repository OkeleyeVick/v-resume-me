import React from "react";

const Input = ({ ariaLabel, placeholder, type, label }) => {
	return (
		<React.Fragment>
			<label htmlFor={label} className="text-slate-300">
				{label}
			</label>
			<input
				className="bg-transparent border-white outline-none border rounded-md min-h-[3rem] w-full p-2 transition duration-300 ease-in-out focus:border-main focus:shadow-sm"
				placeholder={placeholder}
				type={type}
				aria-label={ariaLabel}
			/>
		</React.Fragment>
	);
};

export default Input;
