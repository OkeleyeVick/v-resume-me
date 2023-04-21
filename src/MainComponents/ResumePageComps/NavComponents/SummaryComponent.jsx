import React, { useRef } from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";
import TextArea from "../../GeneralComponents/TextArea";

const SummaryComponent = () => {
	const textAreaRef = useRef();
	return (
		<React.Fragment>
			<div className="flex items-center justify-between">
				<GoBackButton />
				<button type="button" className="rounded-md bg-main text-slate-200 text-[.8rem] px-4 py-3 hover:bg-hoverBgClr animate-scaleInOut">
					Take hints
				</button>
			</div>
			<div className="mt-5 pt-4 h-[85vh]">
				<div className="my-4 text-end">
					<span className="text-sm text-main">Not more than 1000 characters.</span>
				</div>
				<form action="">
					<TextArea summaryRef={textAreaRef} label="Summary" name="summary" onChange={(e) => console.log(e.target.value)} />
					<div className="mt-6 flex items-center gap-2">
						<button
							type="submit"
							className="text-sm w-full text-gray-300 bg-main border-[1.5px] border-main hover:border-hoverBgClr hover:bg-hoverBgClr rounded-md px-6 py-3">
							Save
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SummaryComponent;
