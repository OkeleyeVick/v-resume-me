import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
	const goBack = useNavigate();

	return (
		<div
			className="text-[.8rem] px-4 py-3 outline outline-transparent outline-1 hover:outline-main w-max rounded-md flex items-center cursor-pointer"
			onClick={() => {
				goBack(-1);
			}}>
			<button className="flex items-center gap-2 text-main">
				<Icon icon="solar:arrow-left-outline" className="w-5 h-5" />
				<span className="text-[.8rem]">Back</span>
			</button>
		</div>
	);
};

export default GoBackButton;
