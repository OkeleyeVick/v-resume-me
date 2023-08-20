import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { GeneralContext } from "../ResumePageComps/CreateResumePage";

const Toaster = ({ message }) => {
	const [time, setTime] = useState(true);
	const { setError } = useContext(GeneralContext);

	setTimeout(() => {
		setTime(false);
		setError(null);
	}, 3000);

	return createPortal(
		<>
			{time && (
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{ duration: 0.2 }}
						exit={{ x: "-100vw" }}
						className="left-0 fixed font-[Syne] top-0 shadow-md max-w-[270px] w-full m-1 overflow-hidden bg-white flex flex-col rounded-sm dark:shadow-main/30 dark:bg-dark_theme_text_clr">
						<div className="h-[4px] bg-red-500 w-full"></div>
						<div className="pb-4 pt-2 ps-4 flex items-center gap-4">
							<Icon className="w-8 h-8 text-red-500" icon="bxs:error" />
							<span className="text-[.85rem] font-medium leading-5 dark:text-white" style={{ textWrap: "balance" }}>
								{message ?? "Error detected uploading file"}
							</span>
						</div>
					</motion.div>
				</AnimatePresence>
			)}
		</>,
		document.body
	);
};

export default Toaster;
