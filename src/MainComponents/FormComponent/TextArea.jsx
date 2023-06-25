import { Icon } from "@iconify/react";

const TextArea = ({ hasSubText, name, placeholder, "aria-label": ariaLabel }) => {
	return (
		<div className="input_container flex flex-col h-fit mt-9">
			<label htmlFor={name} className="text-lg font-semibold text-slate-700 mb-[1px]">
				Description
			</label>
			{hasSubText ? (
				<span className="text-[.8rem] mb-4 text-label_clr">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fuga nihil! Asperiores dicta aliquid quae doloremque quod.
				</span>
			) : (
				""
			)}
		</div>
	);
};

export default TextArea;
