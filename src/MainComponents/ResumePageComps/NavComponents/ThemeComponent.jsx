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
			<div className="border border-gray-500 p-3 pt-5 rounded-md">
				<h3 className="text-sm text-gray-300">Select Resume theme</h3>
				<div className="relative flex items-center mt-2 mb-1 ">
					<button
						type="button"
						className="border border-gray-500 rounded-md py-2 px-4"
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
			<div className="border border-gray-500 p-3 pt-5 rounded-md">
				<h3 className="text-sm text-gray-300">Select Resume theme</h3>
				<div className="relative flex items-center mt-2 mb-1 ">
					<button
						type="button"
						className="border border-gray-500 rounded-md py-2 px-4"
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
		</React.Fragment>
	);
};

export default ThemeComponent;
