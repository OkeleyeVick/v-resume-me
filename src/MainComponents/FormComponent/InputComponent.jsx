import React, { useCallback } from "react";
import Tooltip from "./Tooltip";
import { Icon } from "@iconify/react";
import { debounce } from "lodash";

const InputWithLabel = ({
	label,
	type,
	placeholder,
	"aria-label": ariaLabel,
	name,
	updateTheDetail,
	className,
	inputMode,
	tooltip,
	hasExtraInfo,
}) => {
	const debounceFunc = useCallback(
		debounce((text, fieldName) => updateTheDetail(text, fieldName), 700),
		[]
	);

	const handleValueInput = (textInput, fieldName) => {
		debounceFunc(textInput, fieldName);
	};

	return (
		<div
			className={`input_container flex flex-col relative before:block before:absolute before:content-[''] before:bg-main before:w-full before:h-[1.4px] before:bottom-0 before:transition before:duration-300 before:origin-center h-fit`}>
			<div className={`${hasExtraInfo ? "flex items-center gap-x-2" : ""}`}>
				<label htmlFor={label} className="capitalize md:text-[.85rem] leading-5 mb-[2px] text-[rgb(130,139,162)]">
					{label}
				</label>
				{hasExtraInfo && tooltip ? (
					<div className="relative leading-5 mb-[5px] group/tooltip">
						<Icon
							icon="ph:question"
							className="text-[rgb(130,139,162)] hover:text-hoverBgClr hover:cursor-pointer w-4 h-4 leading-none"
						/>
						<Tooltip data={tooltip} className="group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 origin-bottom" />
					</div>
				) : null}
			</div>
			<input
				id={label}
				name={name}
				placeholder={placeholder ? placeholder : ""}
				onChange={(event) => handleValueInput(event.target.value, name)}
				spellCheck="false"
				inputMode={inputMode ?? "text"}
				aria-label={ariaLabel}
				autoComplete="off"
				type={type ? type : "text"}
				className={`caret-main placeholder:text-sm ${
					className ? className : "bg-input_clr border-transparent"
				} py-[10.5px] transition 300ms ease-in-out outline-0 hover:border-hoverBgClr border-solid px-4 text-ash-600 text-sm rounded-[3px] min-h-[2.8rem] border`}
			/>
		</div>
	);
};
export default InputWithLabel;
