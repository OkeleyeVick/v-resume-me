import { Icon } from "@iconify/react";
import React from "react";
import LinkInput from "../../GeneralComponents/LinkInput";

const linkInputs = [
	{
		label: "Website",
		placeholder: "Enter your website link",
		icon: "fluent:globe-20-filled",
		name: "portfoli-link",
	},
	{
		label: "LinkedIn",
		placeholder: "Enter Linkedin link",
		icon: "ri:linkedin-box-fill",
		name: "linkedin-profile-link",
	},
	{
		label: "Email",
		placeholder: "Enter email address",
		icon: "mingcute:mail-fill",
		name: "email-address",
	},
	{
		label: "Github",
		placeholder: "Enter profile link",
		icon: "carbon:logo-github",
		name: "github-profile-link",
	},
	{
		label: "Dribbble",
		placeholder: "Enter profile link",
		icon: "ph:dribbble-logo-fill",
		name: "dribbble-profile-link",
	},
	{
		label: "Behance",
		placeholder: "Enter profile link",
		icon: "ion:logo-behance",
		name: "dribbble-profile-link",
	},
];
const SocialComponent = () => {
	return (
		<React.Fragment>
			<div className="text-end">
				<button type="button" className="rounded-md bg-main text-slate-200 text-[.9rem] px-4 py-3 hover:bg-hoverBgClr">
					Take hints
				</button>
			</div>
			<div className="flex items-center overflow-y-scroll mt-5 pt-4 h-[85vh] no-scroll pr-2">
				<form action="" className="w-full my-8">
					<div className="flex flex-col gap-8 mt-8">
						{linkInputs.map((linkItem, linkIndex) => {
							const { label, placeholder, icon, name } = linkItem;
							return (
								<React.Fragment key={linkIndex}>
									<LinkInput
										label={label}
										icon={<Icon icon={icon} className="text-gray-500 w-6 h-6" />}
										placeholder={placeholder}
										name={name}
									/>
								</React.Fragment>
							);
						})}
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

export default SocialComponent;
