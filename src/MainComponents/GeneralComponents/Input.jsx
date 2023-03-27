import React from "react";

const Input = ({ ariaLabel, placeholder, type, label }) => {
	return (
		<React.Fragment>
			<div className="relative">
				<label htmlFor={label} className="text-slate-200 absolute top-0 left-0 leading-none -translate-y-1 bg-custom_2 px-1">
					{label}
				</label>
				<input
					className="bg-transparent border-gray-300 outline-none border-[1.5px] rounded-md min-h-[3rem] w-full p-2 transition duration-500 ease-in-out focus:border-main focus:shadow-inputShadow placeholder:text-sm"
					placeholder={placeholder}
					type={type}
					aria-label={ariaLabel}
				/>
			</div>
		</React.Fragment>
	);
};

export default Input;
