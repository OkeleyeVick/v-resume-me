import React from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";

const WorkExperienceComponent = () => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-between">
				<GoBackButton />
				<button
					type="button"
					name="take-hints"
					className="rounded-md bg-main text-slate-200 text-[.8rem] px-4 py-3 hover:bg-hoverBgClr animate-scaleInOut">
					Take hints
				</button>
			</div>
			<div className="py-3">WorkExperienceComponent</div>
		</React.Fragment>
	);
};

export default WorkExperienceComponent;
