import React, { memo } from "react";
import { createPortal } from "react-dom";
import { PreloaderOne } from "../../assets/images/SVGs/PreloaderIcon";
import { motion } from "framer-motion";

const PageLoader = () => {
	return (
		<>
			{createPortal(
				<motion.div exit={{ opacity: 0 }} className="fixed inset-0 grid place-content-center bg-white">
					{/* <div className="h-20 w-20 rounded-full border-8 border-r-main border-t-main border-transparent animate-spin flex items-center justify-center">
						<div className="h-14 w-14 rounded-full border-8 border-l-main border-b-main border-transparent animate-spin"></div>
					</div> */}
					<PreloaderOne />
				</motion.div>,
				document.body
			)}
		</>
	);
};

export default memo(PageLoader);
