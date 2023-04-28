import React from "react";

const LinkInput = ({ name, ariaLabel, icon, placeholder, label }) => {
	return (
		<div className="relative">
			<label
				htmlFor={name}
				className="text-gray-300 absolute top-0 left-0 leading-none -translate-y-[.4rem] translate-x-2 bg-custom_2 px-1 text-[.78rem]">
				{label}
			</label>
			<div className="absolute pointer-events-none top-1/2 left-2 bg-custom_2 -translate-y-1/2">{icon}</div>
			<input
				type="url"
				name={name}
				autoComplete="off"
				id={name}
				aria-label={ariaLabel}
				placeholder={placeholder}
				className="bg-transparent text-gray-300 text-[.8rem] border-gray-500 outline-none border-[1.5px] rounded-md min-h-[3rem] w-full p-2 px-3 pl-9 transition duration-500 ease-in-out focus:border-main focus:shadow-inputShadow placeholder:text-[.8rem]"
			/>
		</div>
	);
};

export default LinkInput;
