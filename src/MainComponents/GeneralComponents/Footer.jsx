import { Icon } from "@iconify/react";
import React, { memo } from "react";
import { Link } from "react-router-dom";

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
		link: "https://linkedin.com/in/OkeleyeVick",
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
		<div className="border-t dark:border-label_clr/50 py-6 flex items-center justify-center sm:justify-between px-4 md:px-8 dark:bg-dark_theme_text_clr flex-wrap gap-y-3 ">
			<span className="text-sm dark:text-label_clr">
				@2023 &nbsp;
				<Link to="https://vickkk-portfolio.netlify.app/" className="hover:underline duration-300 ease-linear text-main">
					Okeleye Victor
				</Link>
			</span>
			<div className="flex items-center gap-4 md:gap-6">
				{links.map(({ icon, link, button }, index) => {
					return button ? (
						<button
							key={index}
							type="button"
							className="dark:text-main hover:text-main transition duration-[100ms] ease-in-out"
							onClick={() =>
								handleShare({
									link: "https://v-resume-me.netlify.app/",
									title: "Resume.me",
								})
							}>
							<Icon icon={icon} className="w-5 h-5" />
						</button>
					) : (
						<Link to={link} key={index} className="dark:text-main hover:text-main transition duration-[100ms] ease-in-out">
							<Icon icon={icon} className="w-5 h-5" />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Footer);
