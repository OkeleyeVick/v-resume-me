import React from "react";
import { createPortal } from "react-dom";
import "../../assets/css/fonts.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { GeneralContext } from "../ResumePageComps/CreateResumePage";
import { useRef } from "react";
import { useEffect } from "react";

const Modal = ({ children, modalTitle }) => {
	const { setIsModalVisible } = useContext(GeneralContext);
	const ref = useRef(null);

	function handleModalVisibility(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsModalVisible(false);
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleModalVisibility, true);

		return () => document.removeEventListener("click", handleModalVisibility, true);
	}, []);

	return createPortal(
		<motion.div
			initial={{ opacity: 0.2 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed z-[50] bg-black/50 backdrop-blur-sm inset-0 flex items-center justify-center font-[Syne] p-8 selection:bg-main/20 selection:text-main ">
			<motion.div
				ref={ref}
				initial={{ translateY: 30, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				exit={{ translateY: -40, opacity: 0 }}
				transition={{ duration: 0.2 }}
				className={`max-w-[550px] w-full h-max bg-white rounded-2xl overflow-hidden shadow-md`}>
				<div className={`${modalTitle ? " justify-between" : "justify-end"} modal-header flex items-center p-4 border-b`}>
					{modalTitle ? <span className="font-semibold text-base md:text-lg">{modalTitle}</span> : ""}
					<button
						className="group transition-[background-color] ease-linear duration-300 rounded-full p-[5px] bg-transparent hover:bg-main/90"
						onClick={() => setIsModalVisible(false)}>
						<Icon icon="lucide:x" className="w-6 h-6 pointer-events-none text-gray-600 group-hover/:text-slate-100" />
					</button>
				</div>
				<div className="modal-body py-10 p-6">{children}</div>
				<div className="modal-footer py-4 px-6 border-t">
					<div className="flex items-center justify-end">
						<button
							onClick={() => setIsModalVisible(false)}
							type="button"
							className="capitalize bg-main/80 p-2 px-6 hover:bg-main transition-[background-color] duration-200 ease-in rounded-md text-white">
							close
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>,
		document.body
	);
};

export default Modal;
