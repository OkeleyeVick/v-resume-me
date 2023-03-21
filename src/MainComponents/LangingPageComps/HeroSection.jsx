import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className="bg-main_2 text-center">
			<div className="md:grid md:grid-cols-10 py-16">
				<div className="flex flex-col md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9 md:grid md:grid-cols-10">
					<div className="my-4 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9">
						<small className="uppercase font-semibold text-text_clr">free online resume builder</small>
					</div>
					<div className="md:col-start-1 md:col-end-11 mt-4 flex flex-col">
						<h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-text_clr">
							Create one of the finest well presentable Resumés you've ever had to present
						</h1>
						<span className="w-full md:w-4/6 mx-auto block mt-4 text-sm md:text-base">
							Resumé.me is designed to generate job worthy resumés for job seekers, it follows the resume rules employers look for.
						</span>
						<div className="mt-10">
							<Link
								to="/create-resume"
								className="text-sm md:text-base text-white bg-main rounded-md py-4 px-6 md:py-5 transition ease-in-out duration-200">
								Let's create you a resumé
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
