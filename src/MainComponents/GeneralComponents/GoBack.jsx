import React from "react";
import { useNavigate } from "react-router-dom";

export const GoBack = () => {
	const goBackNavigation = useNavigate();
	function goBack() {
		goBackNavigation(-1);
	}

	return (
		<div className="my-4">
			<button type="button" className="flex items-center gap-2" onClick={goBack}>
				GoBack
			</button>
		</div>
	);
};
