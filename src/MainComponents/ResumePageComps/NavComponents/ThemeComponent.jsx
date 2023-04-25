import { Icon } from "@iconify/react";
import React, { useContext, useEffect } from "react";
import { useRef, useState } from "react";
import "../../../assets/css/fonts.css";
import { componentContext } from "../CreateResumePage";

const baseFont = [
	{ font: "Arial" },
	{ font: "Syne" },
	{ font: "Rubik" },
	{ font: "Sora" },
	{ font: "Oxygen" },
	{ font: "Mulish" },
	{ font: "Comfortaa" },
	{ font: "IBMPlexSans" },
	{ font: "Montserrat" },
];

const ThemeComponent = () => {
	const [defaultColor, setDefaultColor] = useState("#ffffff");
	const [fontDropdownState, setFontDropdownState] = useState(false);
	const { font, setFont } = useContext(componentContext);
	const colorRef = useRef();
	const fontRef = useRef();

	function handleColorShow() {
		colorRef.current !== null ? colorRef.current.click() : "";
	}

	useEffect(() => {
		fontRef.current.value = font;
	}, [font]);

	return (
		<React.Fragment>
			<form action="">
				<div className="pt-3 rounded-md">
					<h3 className="text-[.8rem] text-gray-300 leading-none" style={{ fontFamily: `${font}` }}>
						Font Family
					</h3>
					<div className="relative flex items-center my-1 ">
						<button
							type="button"
							className="border border-gray-500 rounded-md py-3 px-4 w-full flex items-center justify-between hover:border-main"
							onClick={() => setFontDropdownState((current) => !current)}>
							<span className="text-sm">{font}</span>
							<Icon icon="ph:caret-down-fill" className="w-4 h-4" />
						</button>
						<div
							className={`absolute top-full left-0 right-0 z-[10] border-main border bg-slate-900 p-2 rounded-md mt-1 text-sm flex flex-col origin-top ${
								fontDropdownState ? "opacity-100 scale-100" : "opacity-0 scale-0"
							}`}>
							<input type="hidden" name="fontFamily" ref={fontRef} />
							{baseFont.map(({ font }, index) => (
								<button
									key={index}
									type="button"
									className="text-start p-2 bg-transparent hover:bg-gray-700 hover:pl-3 hover:text-sm text-xs duration-100 rounded-md"
									onClick={() => {
										setFontDropdownState(false), setFont(font);
									}}>
									{font}
								</button>
							))}
						</div>
						<input type="hidden" value="" />
					</div>
				</div>
				<div className="pt-3 rounded-md">
					<h3 className="text-[.85rem] text-gray-300">Select Resume Theme</h3>
					<div className="relative flex items-center mt-2 mb-1 ">
						<button
							type="button"
							className="border border-gray-500 rounded-md py-2 px-4 hover:border-main"
							onClick={() => {
								handleColorShow();
							}}>
							<div className="flex items-center gap-3">
								<div className={`rounded-md w-6 h-6`} style={{ backgroundColor: `${defaultColor}` }}></div>
								<span className="text-gray-200 text-sm uppercase font-semibold">{defaultColor}</span>
							</div>
						</button>
						<div className="absolute bottom-0 right-0 transition duration-300 ease-in-out">
							<input
								style={{ backgroundColor: `${defaultColor}`, border: "none" }}
								type="color"
								ref={colorRef}
								value={defaultColor}
								onChange={() => {
									setDefaultColor(colorRef.current.value);
								}}
								name=""
								id=""
								hidden
							/>
						</div>
					</div>
				</div>
				<div className="mt-6 flex items-center gap-2">
					<button
						type="submit"
						className="text-sm w-full text-gray-300 bg-main border-[1.5px] border-main hover:border-hoverBgClr hover:bg-hoverBgClr rounded-md px-6 py-3">
						Save all
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default ThemeComponent;
