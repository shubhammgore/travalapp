module.exports = {
	babel: {
		plugins: ['babel-plugin-macros'], // for using styles components
	},
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
};
