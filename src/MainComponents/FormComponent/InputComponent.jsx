import React from "react";

const InputWithLabel = ({ label, "aria-label": ariaLabel, name, addInput, value, inputMode }) => {
	return (
		<div
			className={`input_container flex flex-col relative before:block before:absolute before:content-[''] before:bg-main before:w-full before:h-[2px] before:bottom-0 before:transition before:duration-300 before:origin-center max-h-max`}>
			<label htmlFor={label} className="capitalize text-sm leading-5 mb-1 text-[rgb(130,139,162)]">
				{label}
			</label>
			<input
				id={label}
				name={name}
				value={value}
				onChange={addInput}
				autoComplete="off"
				type="text"
				spellCheck="false"
				inputMode={inputMode}
				aria-label={ariaLabel}
				className={`caret-main bg-input_clr py-0 transition 300ms ease-out outline-none border-none p-4 min-h-[3rem] text-ash-600 text-sm rounded-sm`}
			/>
		</div>
	);
};

export default InputWithLabel;
