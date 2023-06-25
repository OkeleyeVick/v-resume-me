import { Icon } from "@iconify/react";
import React from "react";

const TextArea = ({ hasSubText, name, placeholder, "aria-label": ariaLabel }) => {
	const textFunctions = [
		{
			texts: [
				{
					name: "bold-text",
					icon: "ant-design:bold-outlined",
					performAction: () => console.log("Bold text"),
				},
				{
					name: "bold-text",
					icon: "pajamas:italic",
					performAction: () => console.log("Italicize text"),
				},
				{
					name: "bold-text",
					icon: "ri:underline",
					performAction: () => console.log("Underline text"),
				},
				{
					name: "bold-text",
					icon: "mingcute:strikethrough-line",
					performAction: () => console.log("Underline text"),
				},
			],
		},
		{},
	];

	return (
		<div className="input_container flex flex-col h-fit mt-9">
			<label htmlFor="" className="text-lg font-semibold text-slate-700 mb-[1px]">
				Description
			</label>
			{hasSubText ? (
				<span className="text-xs mb-4 text-label_clr">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fuga nihil! Asperiores dicta aliquid quae doloremque quod.
				</span>
			) : (
				""
			)}
			<div className="flex flex-col rounded-t-[4px]">
				<div className="w-full h-auto bg-input_clr py-2 px-3 text-sm border-b-[1.5px] border-b-slate-200 border-b-solid">
					{textFunctions.map((textObject, index) => {
						return (
							<div className="flex items-base border-r-[1.5px]  border-r-gray-300 pr-3" key={index}>
								{Object.values(textObject).map((eachTextFunctionswrap) => {
									return eachTextFunctionswrap.map(({ name, icon, performAction, size }, textFunctionIndex) => {
										return (
											<React.Fragment key={textFunctionIndex}>
												<button className="p-2 hover:bg-opacity-25 rounded-full -mr-2" type="button" onClick={performAction}>
													<Icon icon={icon} className={`${size} h-4 w-4 hover:text-main`} />
												</button>
											</React.Fragment>
										);
									});
								})}
							</div>
						);
					})}
				</div>
				<div className="relative before:absolute before:content-[''] before:bg-main before:w-full before:h-[2px] before:bottom-0 textarea_container before:origin-center h-fit">
					<div
						contentEditable="true"
						spellCheck="false"
						className="caret-main bg-input_clr py-[12px] outline-none border-none px-4 text-ash-600 text-sm rounded-b-[3px] w-full resize-none h-48 relative"
						name={name}
						placeholder=""></div>
				</div>
			</div>
		</div>
	);
};

export default TextArea;
