import React from "react";
import Tooltip from "./Tooltip";
import { Icon } from "@iconify/react";

const InputWithLabel = ({ label, type, placeholder, "aria-label": ariaLabel, name, addInput, value, inputMode, tooltip, hasExtraInfo }) => {
	return (
		<div
			className={`input_container flex flex-col relative before:block before:absolute before:content-[''] before:bg-main before:w-full before:h-[2px] before:bottom-0 before:transition before:duration-300 before:origin-center h-fit`}>
			<div className={`${hasExtraInfo ? "flex items-center gap-x-2" : ""}`}>
				<label htmlFor={label} className="capitalize text-sm leading-5 mb-[2px] text-[rgb(130,139,162)]">
					{label}
				</label>
				{hasExtraInfo && tooltip ? (
					<div className="relative leading-5 mb-[5px] group/tooltip">
						<Icon
							icon="ph:question"
							className="text-[rgb(130,139,162)] hover:text-hoverBgClr hover:cursor-pointer w-5 h-5 leading-none"
						/>
						<Tooltip data={tooltip} className="group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1/2" />
					</div>
				) : null}
			</div>
			<input
				id={label}
				name={name}
				value={value}
				placeholder={placeholder ? placeholder : ""}
				onChange={addInput}
				autoComplete="off"
				type={type ?? "text"}
				spellCheck="false"
				inputMode={inputMode}
				aria-label={ariaLabel}
				className={`caret-main bg-input_clr py-[12px] transition 300ms ease-out outline-none border-none px-4 text-ash-600 text-sm rounded-[3px]`}
			/>
		</div>
	);
};

export default InputWithLabel;
