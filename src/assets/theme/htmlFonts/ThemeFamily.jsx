import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { BlockPicker } from "react-color";

const ThemeFamily = () => {
	const [colorThemeState, setColorThemeState] = useState("#000");
	function handleColorThemeChange(event) {
		setColorThemeState(event.hex);
	}
	return (
		<div className="fixed z-50 w-full lg:w-1/2 backdrop-blur-[2px] h-screen top-0 left-0 bg-black bg-opacity-25">
			<div className="p-4 h-full rounded-tr-[1rem] rounded-br-[1rem] bg-white shadow-md flex flex-col gap-y-4 w-4/5 md:w-3/5 relative">
				<div className="close absolute -right-12">
					{/* bg-gray-50 */}
					<button type="button" className={` shadow-md rounded-full p-2`}>
						<Icon icon="mi:close" className="w-5 h-5" />
					</button>
				</div>
				<div className="flex flex-col gap-y-2">
					<h6 className="font-medium">Font Family</h6>
					<div className="border border-solid border-border_clr p-2 text-[.8rem] rounded-md relative">
						<span>Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
						{/* <div className="font-dropdown-container p-2 rounded-md absolute top-full shadow-md mt-2 left-0 right-0 border border-solid border-gray-100 bg-white">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sequi eligendi fuga deleniti vel aliquam ratione ipsum
							cum non quam magni aspernatur in incidunt cumque, beatae, laudantium ab ea velit.
						</div> */}
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<h6 className="font-medium">Color:</h6>
					<div className="border border-solid border-border_clr p-2 text-[.8rem] rounded-md relative w-max shadow-md">
						<BlockPicker color={colorThemeState} onChange={handleColorThemeChange} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemeFamily;
