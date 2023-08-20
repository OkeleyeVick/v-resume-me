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
					<div className="my-4 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9">
						<small className="uppercase font-semibold text-text_clr dark:text-white">free online resume builder</small>
					</div>
					<div className="md:col-start-1 md:col-end-11 sm:px-8 mt-4 flex flex-col px-1 relative">
						<h1 className="dark:text-main font-extrabold text-3xl md:text-4xl lg:text-5xl text-text_clr">
							Create one of the finest well presentable Resumés you've ever had to present
						</h1>
						<span className="dark:text-label_clr w-full md:w-4/6 mx-auto block mt-4 text-sm md:text-[.9rem] relative">
							Resumé.me is designed to generate job worthy resumés for job seekers, it follows the resume rules employers look for.
						</span>
						<motion.div className="relative mt-28 lg:mt-28">
							<figure className="flex absolute inset-0 m-auto items-center justify-center">
								<img src={womanImage} alt="" className="max-w-full w-24 lg:-mt-4" />
							</figure>
							<div className="relative w-max mx-auto">
								<figure className="absolute -left-3 top-0">
									<img src={leftHand} alt="" className="w-6 max-w-full" />
								</figure>
								<Link
									to="select-template"
									className="text-white bg-main rounded-md py-4 px-10 md:py-4 transition ease-in-out duration-500 hover:bg-hoverBgClr text-sm selection:text-white font-semibold">
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
