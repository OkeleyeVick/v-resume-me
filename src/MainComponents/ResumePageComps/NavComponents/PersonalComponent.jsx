import React from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";
import Input from "../../GeneralComponents/Input";

const PersonalComponent = () => {
	// Get all elements in the DOM
	const elements = document.querySelectorAll("*");

	// Loop through all elements and log their font size to the console
	for (let i = 0; i < elements.length; i++) {
		const fontSize = window.getComputedStyle(elements[i]).getPropertyValue("font-size");
		// console.log(`Element ${i}: Font size is ${fontSize.split("px")[0] * 0.5}`);
	}

	function doThis() {
		console.log("I love you");
	}
	return (
		<React.Fragment>
			<div className="flex items-center justify-between">
				<GoBackButton />
				<button type="button" className="rounded-md bg-main text-slate-200 text-[.8rem] px-4 py-3 hover:bg-hoverBgClr animate-scaleInOut">
					Take hints
				</button>
			</div>
			<div className="overflow-y-auto h-[85vh] no-scroll pr-2 pb-5 my-4">
				<form action="">
					<div className="flex flex-col gap-6 mt-8">
						<Input label="Fullname" type="text" aria-label="Name input" ariaLabel="Name input" placeholder="Enter your name" />
						<Input label="Position" type="text" aria-label="position" ariaLabel="position" placeholder="Enter your position" />
						<Input label="Phone" type="number" aria-label="position" ariaLabel="position" placeholder="Enter number" />
						<Input label="Address" type="text" aria-label="address" ariaLabel="address" placeholder="Enter address" />
						<Input label="State" type="text" aria-label="text" ariaLabel="text" placeholder="Enter state" />
						<Input label="ZIP Code" type="text" aria-label="text" ariaLabel="text" placeholder="Enter ZIP code" />
					</div>
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

export default PersonalComponent;
