import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
	const handleShare = function ({ link, title }) {
		if ("share" in navigator) {
			navigator.share({
				url: link,
				title,
			});
		}
	};

	return (
		<div className="border-t py-6 flex items-center justify-between px-4 md:px-8">
			<span className="text-sm">
				@2023 &nbsp;
				<a href="https://twitter.com/I_am_Justus" className="hover:underline text-main">
					Okeleye Victor
				</a>
			</span>
			<div className="flex items-center gap-4 md:gap-6">
				{links.map((item, index) => {
					const { icon, link, button } = item;
					return button ? (
						<button
							key={index}
							type="button"
							className="hover:text-main transition duration-[100ms] ease-in-out"
							onClick={() =>
								handleShare({
									link: "https://v-resume-me.netlify.app/",
									title: "Resume.me",
								})
							}>
							{icon}
						</button>
					) : (
						<a href={link} key={index} className="hover:text-main transition duration-[100ms] ease-in-out">
							{icon}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;

const links = [
	{
		icon: <Icon icon="ph:share-network-light" className="w-5 h-5" />,
		button: true,
	},
	{
		icon: <Icon icon="uit:twitter-alt" className="w-5 h-5" />,
		link: "https://twitter.com/I_am_Justus",
	},
	{
		icon: <Icon icon="ph:envelope-simple-light" className="w-5 h-5" />,
		link: "https://gmailto:justusofnigeria@gmail.com",
	},
	{
		icon: <Icon icon="akar-icons:github-outline-fill" className="w-5 h-5" />,
		link: "https://github.com/OkeleyeVick",
	},
	{
		icon: <Icon icon="ph:linkedin-logo-light" className="w-5 h-5" />,
		link: "https://github.com/OkeleyeVick",
	},
];
