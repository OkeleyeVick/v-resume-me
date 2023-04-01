import { Icon } from "@iconify/react";
import React, { useState } from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";

const SkillComponent = () => {
	const [isActive, setIsActive] = useState(false);

	const viewOptions = [
		{
			icon: "fluent:tabs-24-regular",
			name: "tabs",
		},
		{
			icon: "mingcute:grid-2-line",
			name: "grid",
		},
		{
			icon: "ph:list-bold",
			name: "list",
		},
		{
			icon: "fe:list-bullet",
			name: "bullet",
		},
	];
	return (
		<React.Fragment>
			<div className="flex items-center justify-between">
				<GoBackButton />
				<button type="button" className="rounded-md bg-main text-slate-200 text-[.8rem] px-4 py-3 hover:bg-hoverBgClr">
					Take hints
				</button>
			</div>
			<div className="border border-main"></div>
			<div className="flex overflow-y-auto mt-5 h-[85vh] no-scroll pr-2">
				<form action="" className="w-full mt-3">
					<div className="flex flex-col gap-8 mt-8">
						<h5 className="text-main text-sm font-semibold">Add skill</h5>
					</div>
					<div className="relative  ">
						<span className="text-sm text-main font-bold">View mode</span>
						<button
							type="button"
							className="flex mt-2 justify-between w-full items-center rounded-md border-main border p-3"
							onClick={() => setIsActive((prev) => !prev)}>
							<h6 className="text-sm text-gray-200">Tabs</h6>
							<Icon icon="ph:caret-up-down-fill" className="text-main w-5 h-5" />
						</button>
						<div
							className={`${
								isActive ? "scale-y-1" : "scale-y-0"
							} overflow-hidden absolute w-full top-full rounded-md mt-1 z-[2] p-1 right-0 left-0 h-auto border-main border bg-slate-900 origin-top`}>
							<input type="hidden" name="" />
							<div className="flex flex-col p-1">
								{viewOptions.map((items, itemIndex) => {
									const { icon, name } = items;
									return (
										<React.Fragment key={itemIndex}>
											<button
												type="button"
												className="text-slate-400 flex items-center justify-start gap-2 hover:bg-slate-800 hover:text-slate-200 rounded-lg p-3">
												<Icon icon={icon} />
												<span className="text-xs capitalize">{name}</span>
											</button>
										</React.Fragment>
									);
								})}
							</div>
						</div>
					</div>
					<div className="mt-6 flex items-center gap-2">
						<button
							type="submit"
							className="text-sm text-gray-300 bg-main border-[1.5px] border-main hover:border-hoverBgClr hover:bg-hoverBgClr rounded-md px-6 py-3">
							Save
						</button>
						<button
							type="button"
							className="text-sm text-gray-300 border-[1.5px] border-main rounded-md px-6 py-3 hover:bg-main hover:text-white hover:border-hoverBgClr">
							Cancel all
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SkillComponent;
