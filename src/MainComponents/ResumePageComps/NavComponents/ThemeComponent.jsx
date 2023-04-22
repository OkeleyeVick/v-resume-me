import { Icon } from "@iconify/react";
import React from "react";
import { useRef, useState } from "react";

const ThemeComponent = () => {
	const [defaultColor, setDefaultColor] = useState("#ffffff");
	const colorRef = useRef();

	function handleColorShow() {
		colorRef.current !== null ? colorRef.current.click() : "";
	}

	return (
		<React.Fragment>
			<form action="">
				<div className="pt-3 rounded-md">
					<h3 className="text-sm text-gray-300">Font Family</h3>
					<div className="relative flex items-center mt-2 mb-1 ">
						<button
							type="button"
							className="border border-gray-500 rounded-md py-3 px-4 w-full flex items-center justify-between hover:border-main"
							onClick={() => {}}>
							<span className="text-sm">Arial</span>
							<Icon icon="ph:caret-down-fill" className="w-4 h-4" />
						</button>
						<div className="absolute top-full left-0 right-0 bg-red-300 rounded-sm z-[10] transition duration-200 scale-0 origin-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium libero dolorem fuga, soluta fugiat! Debitis enim
							voluptatum ab obcaecati numquam quia eaque delectus, magni iusto temporibus doloremque error nisi?
						</div>
						<input type="hidden" value="" />
					</div>
				</div>
				<div className="pt-3 rounded-md">
					<h3 className="text-sm text-gray-300">Select Resume Theme</h3>
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
								className={`border-none`}
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
