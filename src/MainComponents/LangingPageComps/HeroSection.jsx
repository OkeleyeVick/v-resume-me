import React, { memo } from "react";
import { Link } from "react-router-dom";
import womanImage from "../../assets/images/PageImages/cb-image-06-girl.png";
import leftHand from "../../assets/images/PageImages/cb-image-06-lefthand.png";
import rightHand from "../../assets/images/PageImages/cb-image-06-righthand.png";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<div className="text-center dark:bg-dark_theme_text_clr">
			<div className="md:grid md:grid-cols-10 py-16 pt-12 px-[.6rem]">
				<div className="flex flex-col md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9 md:grid md:grid-cols-10">
					<motion.div
						initial={{ y: "-40vh" }}
						transition={{ type: "spring", damping: 10 }}
						animate={{ y: 0 }}
						className="my-4 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9">
						<small className="uppercase font-semibold text-text_clr dark:text-white/80">free online resume builder</small>
					</motion.div>
					<div className="md:col-start-1 md:col-end-11 sm:px-8 mt-4 flex flex-col px-1 relative">
						<motion.h1
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							transition={{ type: "spring", damping: 8, delay: 0.4 }}
							className="dark:text-main font-extrabold text-3xl md:text-4xl lg:text-5xl text-text_clr">
							Create one of the finest well presentable Resumés you've ever had to present
						</motion.h1>
						<motion.span
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 0.8, delay: 2 }}
							className="dark:text-label_clr w-full md:w-4/6 mx-auto block mt-4 text-sm md:text-[.9rem] relative">
							Resumé.me is designed to generate job worthy resumés for job seekers, it follows the resume rules employers look for a gives you
							guidance on simple rules to follow.
						</motion.span>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, type: "spring", stiffness: 100, damping: 6 }}
							className="relative mt-28 lg:mt-28">
							<figure className="flex absolute inset-0 m-auto items-center justify-center">
								<img src={womanImage} alt="" className="max-w-full w-24 lg:-mt-4" />
							</figure>
							<div className="relative w-max mx-auto">
								<figure className="absolute -left-3 top-0">
									<img src={leftHand} alt="" className="w-6 max-w-full" />
								</figure>
								<Link
									to="select-template"
									className="text-white bg-main rounded-md py-3 px-10 transition ease-in-out duration-500 hover:bg-hoverBgClr whitespace-nowrap text-xs sm:text-sm selection:text-white font-semibold">
									Let's create you a resumé
								</Link>
								<figure className="absolute -right-3 top-0">
									<img src={rightHand} alt="" className="w-6 max-w-full" />
								</figure>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(HeroSection);
