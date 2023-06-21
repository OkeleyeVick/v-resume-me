import React from "react";

const InputWithLabel = ({ label, type, "aria-label": ariaLabel, name, addInput, value, inputMode }) => {
	return (
		<div
			className={`input_container flex flex-col relative before:block before:absolute before:content-[''] before:bg-main before:w-full before:h-[2px] before:bottom-0 before:transition before:duration-300 before:origin-center h-fit`}>
			<label htmlFor={label} className="capitalize text-sm leading-5 mb-1 text-[rgb(130,139,162)]">
				{label}
			</label>
			<input
				id={label}
				name={name}
				value={value}
				onChange={addInput}
				autoComplete="off"
				type={type ?? "text"}
				spellCheck="false"
				inputMode={inputMode}
				aria-label={ariaLabel}
				className={`caret-main bg-input_clr py-[12px] transition 300ms ease-out outline-none border-none px-4 text-ash-600 text-sm rounded-sm`}
			/>
		</div>
	);
};

export default InputWithLabel;
