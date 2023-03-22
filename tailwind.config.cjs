/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				hoverBgClr: "#6274F8",
			},
			colors: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				text_clr: "#1E2532",
			},
			boxShadow: {
				custom_1: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
			},
		},
	},
	plugins: [],
};
