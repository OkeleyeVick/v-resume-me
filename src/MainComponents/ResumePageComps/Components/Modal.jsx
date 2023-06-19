import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Icon } from "@iconify/react";

export default function Modal({ errorType }) {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="lg:w-3/4">
			<Dialog
				open={open}
				className="select-none w-full"
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<div className="flex items-center justify-between p-4">
					<h2 className="">Error Found</h2>
					<button
						type="button"
						className="flex group items-center justify-center p-3 rounded-full bg-main bg-opacity-30 hover:bg-opacity-100 hover:bg-hoverBgClr leading-none"
						onClick={handleClose}>
						<Icon icon="icon-park-outline:close" className=" group-hover:text-white" />
					</button>
				</div>
				<DialogContent>
					<div className="text-center px-12 md:px-28 lg:px-36">
						<span>{errorType}</span>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} className="text-main">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
