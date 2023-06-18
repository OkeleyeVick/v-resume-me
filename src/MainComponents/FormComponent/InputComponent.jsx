import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label, "aria-label": ariaLabel }) => {
	return <TextField id="standard-basic" aria-label={ariaLabel} label={label} variant="standard" />;
};

export default Input;
