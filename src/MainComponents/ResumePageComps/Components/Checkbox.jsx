import React from "react";

const Checkbox = ({ label, onChange }) => {
	return (
		<label className="flex items-center flex-nowrap gap-2 cursor-pointer">
			<input
				type="checkbox"
				aria-label="checkbox"
				className="w-4 h-4 border dark:text-label_clr border-main border-solid checked:fill-main rounded-lg checked:accent-hoverBgClr cursor-pointer hover:text-white shadow-main checked:text-white"
				onChange={onChange}
			/>
			<span className="text-label_clr text-sm whitespace-nowrap leading-tight">{label}</span>
		</label>
	);
};

export default Checkbox;
