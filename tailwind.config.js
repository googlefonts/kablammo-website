module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			black: "#3D3D3D",
			gray: "#E4E4E4",
			green: "#3B8364",
			lime: "#E8F75C",
			blue: "#73B6E7",
			purple: "#9891E8",
			yellow: "#FFC000",
			orange: "#EB7B57",
			pink: "#E18DC5",
		},
		borderRadius: {
			sm: "32px",
			lg: "100px",
		},
		fontFamily: {
			display: ["Kablammo", "helvetica", "ui-sans-serif"],
			body: ["helvetica", "ui-sans-serif"],
			mono: ["Iso", "ui-monospace"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
