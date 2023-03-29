import React, { forwardRef } from "react";

const TextArea = forwardRef(({ name, label }, summary) => {
	return (
		<div className="relative">
			<label
				htmlFor={name}
				className="text-slate-300 absolute top-0 left-0 leading-none -translate-y-[.4rem] translate-x-2 bg-custom_2 px-1 text-[.85rem]">
				{label}
			</label>
			<textarea
				name={name}
				id={name}
				ref={summary}
				cols="30"
				rows="10"
				placeholder="Enter summary about yourself..."
				className="bg-transparent text-slate-300 no-scroll text-[.9rem] border-gray-500 outline-none border-[1.5px] rounded-md min-h-[3rem] w-full py-3 px-3 transition duration-500 ease-in-out focus:border-main focus:shadow-inputShadow placeholder:text-sm"></textarea>
		</div>
	);
});

export default TextArea;
