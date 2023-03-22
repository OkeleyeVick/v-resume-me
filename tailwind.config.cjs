/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#49DCB1",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
			},
			colors: {
				main: "#49DCB1",
				text_clr: "#1E2532",
			},
			boxShadow: {
				custom_1: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
			},
		},
	},
	plugins: [],
};
