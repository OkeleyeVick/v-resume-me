import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoBack() {
	const goBackNavigation = useNavigate();
	function goBack() {
		goBackNavigation(-1);
	}

	return (
		<div className="mt-4 mb-10">
			<button type="button" className="flex items-center gap-1 group/hover" onClick={goBack}>
				<Icon icon="fluent:chevron-double-left-20-filled" className="w-[22px] h-[22px] text-gray-600 group-hover/hover:text-main" />
				<span className="font-medium text-gray-600 group-hover/hover:text-main">Back</span>
			</button>
		</div>
	);
}
