/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#49DCB1",
			},
			colors: {
				main: "#49DCB1",
			},
			boxShadow: {
				custom_1: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
			},
		},
	},
	plugins: [],
};
