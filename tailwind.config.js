/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				cursive: ["Pacifico", "cursive"],
			},
			colors: {
				primary: "#854d3d",
				secondry: "#4a1e1b",
				brandDark: "#270c03",
			},
			container: {
				center: {
					center: true,
				},
				padding: {
					default: "1rem",
					sm: "2rem",
				},
			},
		},
	},
	plugins: [],
};
