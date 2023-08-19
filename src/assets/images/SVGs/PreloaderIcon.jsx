import { motion } from "framer-motion";

const svgVariant = {
	initial: {
		pathLength: 0,
	},
	animate: {
		pathLength: 1,
	},
	transition: {
		repeat: Infinity,
		repeatType: "loop",
		duration: 0.3,
	},
};

export function PreloaderOne() {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 text-hoverBgClr" viewBox="0 0 24 24">
				<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
					<motion.path
						variants={svgVariant}
						initial="initial"
						animate="animate"
						transition="transition"
						d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"
					/>
					<motion.path
						variants={svgVariant}
						initial="initial"
						animate="animate"
						transition="transition"
						d="M14 2v6h6m-9.58 4.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21L4 22l.99-3.95l5.43-5.44Z"
					/>
				</g>
			</svg>
		</>
	);
}
