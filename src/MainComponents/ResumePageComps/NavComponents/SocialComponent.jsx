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
		icon: "mingcute:mail-fill",
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
	);
};

export default SocialComponent;
