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
			<button type="button" className="flex items-center gap-2 group/hover" onClick={goBack}>
				<Icon icon="line-md:chevron-double-left" className="w-5 h-5 text-gray-700 group-hover/hover:text-main" />
				<span className="font-medium text-gray-600 group-hover/hover:text-main">Back</span>
			</button>
		</div>
	);
}
