import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import { Icon } from "@iconify/react";
import roles from "../../assets/db/roles.json";
import { motion } from "framer-motion";

const InputWithLabel = ({
	label,
	type,
	placeholder,
	"aria-label": ariaLabel,
	name,
	handleInputChange,
	value,
	inputMode,
	tooltip,
	hasExtraInfo,
	hasDropdown,
}) => {
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
							className="text-[rgb(130,139,162)] hover:text-hoverBgClr hover:cursor-pointer w-4 h-4 leading-none"
						/>
						<Tooltip data={tooltip} className="group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 origin-bottom" />
					</div>
				) : null}
			</div>
			<input
				id={label}
				name={name}
				value={value ?? ""}
				placeholder={placeholder ? placeholder : ""}
				onChange={handleInputChange}
				spellCheck="false"
				inputMode={inputMode}
				aria-label={ariaLabel}
				autoComplete="off"
				type={type ?? "text"}
				className={`caret-main placeholder:text-xs bg-input_clr py-[13.5px] transition 300ms ease-out outline-none border-none px-4 text-ash-600 text-sm rounded-[3px] min-h-[3rem]`}
			/>
			{/* {hasDropdown ? (
				<React.Fragment>
					<motion.div className={"absolute z-10 top-full bg-[rgb(239,242,249)] text-xs rounded-[3px] shadow-custom_3"}>
						<ul className="my-3 no-scroll overflow-x-hidden h-36 px-1 ">
							{roles.career_roles.map((role, role_index) => {
								return (
									<React.Fragment key={role_index}>
										<li
											className="block cursor-pointer hover:text-hoverBgClr p-2 rounded-sm text-[.8rem] hover:bg-blue-100 hover:bg-opacity-50"
											onClick={() => console.log(role)}>
											{role}
										</li>
									</React.Fragment>
								);
							})}
						</ul>
					</motion.div>
				</React.Fragment>
			) : (
				""
			)} */}
		</div>
	);
};

export default InputWithLabel;
