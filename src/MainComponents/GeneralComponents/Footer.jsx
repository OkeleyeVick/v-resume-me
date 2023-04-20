import { Icon } from "@iconify/react";
import React from "react";

const links = [
	{
		icon: "ph:share-network-light",
		button: true,
	},
	{
		icon: "uit:twitter-alt",
		link: "https://twitter.com/I_am_Justus",
	},
	{
		icon: "ph:envelope-simple-light",
		link: "https://gmailto:justusofnigeria@gmail.com",
	},
	{
		icon: "akar-icons:github-outline-fill",
		link: "https://github.com/OkeleyeVick",
	},
	{
		icon: "ph:linkedin-logo-light",
		link: "https://github.com/OkeleyeVick",
	},
];

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
							<Icon icon={icon} className="w-5 h-5" />
						</button>
					) : (
						<a href={link} key={index} className="hover:text-main transition duration-[100ms] ease-in-out">
							<Icon icon={icon} className="w-5 h-5" />
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
