import React from "react";

const Checkbox = ({ label }) => {
	return (
		<label className="flex items-cente gap-2 cursor-pointer">
			<input
				type="checkbox"
				aria-label="checkbox"
				className="w-4 h-4 border border-main border-solid checked:fill-main rounded-lg checked:accent-hoverBgClr cursor-pointer hover:text-white shadow-main checked:text-white"
			/>
			<span className="text-label_clr text-sm leading-tight">{label}</span>
		</label>
	);
};

export default Checkbox;
