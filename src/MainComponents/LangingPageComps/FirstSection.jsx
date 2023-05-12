import React, { memo } from "react";
import { Link } from "react-router-dom";
import skeletonImage from "../../assets/images/skeleton-image.webp";

const FirstSection = () => {
	return (
		<div className="bg-main_2 md:grid md:grid-cols-12 p-8 py-28 md:py-40 relative before:absolute before:contents-[''] before:w-full before:h-20 before:left-0 before:right-0 before:bg-gradient-to-b before:top-0 from-slate-50 to-main_2">
			<div className="absolute inset-0 h-full w-full p-4 overflow-hidden flex items-start justify-evenly gap-5 md:gap-8">
				{Array.apply(null, Array(7)).map((_, index) => {
					return (
						<div
							className={`min-w-[96px] md:w-[130px] transition ease-linear -mt-52 relative animate-rotateAndGoDown`}
							key={index}
							style={{ animationDelay: `${Math.ceil(Math.random() * 12)}s` }}>
							<img src={skeletonImage} alt="Resume template model" className="isolate" />
						</div>
					);
				})}
			</div>
			<div className="relative flex flex-col md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 md:grid md:grid-cols-10">
				<div className="col-span-full text-center my-8">
					<h2 className="text-3xl md:text-4xl lg:text-5xl text-text_clr font-extrabold">User-friendly. Job-Worthy. Standard</h2>
					<div className="w-full md:w-4/5 mx-auto mt-5">
						<span>
							How long does it take to write a Resume? Hours? Days? With <b className="text-main">Resumé.me</b> you can be done in
							minutes. Create a convincing and effective application resumé in several clicks. Use our pre-generated phrases, choose a
							design, fill in your details and ideas. Fast and simple.
						</span>
					</div>
					<div className="mt-8">
						<Link
							to="/"
							className="font-semibold bg-main transition duration-500 ease-in-out hover:bg-hoverBgClr text-white rounded-md py-4 px-6 selection:text-white">
							Try It Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(FirstSection);
