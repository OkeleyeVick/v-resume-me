import React, { memo } from "react";
import { createPortal } from "react-dom";
import { PreloaderOne } from "../../assets/images/SVGs/PreloaderIcon";
import { motion } from "framer-motion";

const PageLoader = () => {
	return (
		<>
			{createPortal(
				<motion.div exit={{ opacity: 0 }} className="absolute z-[1055] inset-0 flex items-center justify-center bg-white dark:bg-slate-900">
					<PreloaderOne />
				</motion.div>,
				document.querySelector("#root")
			)}
		</>
	);
};

export default memo(PageLoader);
