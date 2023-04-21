import { Icon } from "@iconify/react";
import React, { useState } from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";
import Input from "../../GeneralComponents/Input";

const SkillComponent = () => {
	const [isActive, setIsActive] = useState(false);

	const skills = [
		{
			skillname: "HTML",
		},
		{
			skillname: "CSS",
		},
		{
			skillname: "Javascript",
		},
		{
			skillname: "PHP",
		},
		{
			skillname: "Typescript",
		},
		{
			skillname: "Go	",
		},
		{
			skillname: "Python",
		},
		{
			skillname: "Flutter",
		},
	];

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
			<div className="flex flex-col justify-start overflow-y-auto h-[85vh] no-scroll pr-2 mt-4 gap-3">
				<div className="border flex flex-wrap border-main text-xs p-2 gap-1 rounded-lg bg-gray-900 group">
					{skills.map(({ skillname }, index) => {
						return (
							<React.Fragment key={index}>
								<span className="flex items-center justify-between gap-1 flex-grow bg-slate-700 rounded-[5px] p-1 px-[.5rem]">
									<span className="text-xs">{skillname}</span>
									<button className="rounded-full p-1 bg-transparent hover:bg-slate-900">
										<Icon icon="tabler:x" className="w-3 h-3" />
									</button>
								</span>
							</React.Fragment>
						);
					})}
				</div>
				<form action="" className="w-full mt-3">
					<div className="flex flex-col gap-4">
						<div>
							<h5 className="text-main text-sm font-semibold my-1">Add skill</h5>
							<Input ariaLabel="skill" aria-label="skill" placeholder="Enter your skills" />
							<button className="bg-main text-xs rounded-md py-3 mt-2 px-5 w-full hover:bg-hoverBgClr">Add</button>
						</div>
						<div className="relative isolate">
							<span className="text-sm text-main font-bold">View mode</span>
							<button
								// disabled
								type="button"
								className={`flex //cursor-not-allowed mt-2 justify-between w-full items-center rounded-md border-main border p-3 outline-none`}
								onClick={() => setIsActive((prev) => !prev)}>
								<h6 className="text-sm text-gray-200">Tabs</h6>
								<Icon icon="ph:caret-up-down-fill" className="text-main w-5 h-5" />
							</button>
							<div
								className={`${
									isActive ? "opacity-100 h-[175px]" : "h-0 opacity-0"
								} overflow-hidden absolute w-full top-full rounded-md isolate mt-1 z-[2] right-0 left-0  border-main border bg-slate-900 origin-top py-1`}>
								<input type="hidden" name="" />
								<div className="flex flex-col  py-[.2rem]  px-[.25rem]">
									{viewOptions.map(({ icon, name }, itemIndex) => {
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
