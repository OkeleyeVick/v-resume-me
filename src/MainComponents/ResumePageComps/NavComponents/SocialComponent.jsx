import { Icon } from "@iconify/react";
import React from "react";
import GoBackButton from "../../GeneralComponents/GoBackButton";
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
			<div className="flex items-center justify-between">
				<GoBackButton />
				<button type="button" className="rounded-md bg-main text-slate-200 text-[.8rem] px-4 py-3 hover:bg-hoverBgClr animate-scaleInOut">
					Take hints
				</button>
			</div>
			<div className="overflow-y-auto h-[85vh] no-scroll pr-2 pb-5 my-4">
				<form action="" className="w-full mt-8 mb-4">
					<div className="flex flex-col gap-6 sm:mt-8">
						{linkInputs.map(({ label, placeholder, icon, name }, linkIndex) => {
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
							className="text-sm w-full text-gray-300 bg-main border-[1.5px] border-main hover:border-hoverBgClr hover:bg-hoverBgClr rounded-md px-4 py-3 md:px-6 md:py-3">
							Save
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SocialComponent;
