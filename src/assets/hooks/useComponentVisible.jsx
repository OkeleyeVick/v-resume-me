import { useEffect, useRef, useState } from "react";

const useComponentVisible = ({ initialVisibility }) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initialVisibility);
	const dropdownRef = useRef(null);

	function handleClickOutside(event) {
		// if the component is visible and is not clicked, set the component state to false - i.e hide it
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsComponentVisible(false);
	}

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => document.removeEventListener("click", handleClickOutside, true);
	}, []);

	return { dropdownRef, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
