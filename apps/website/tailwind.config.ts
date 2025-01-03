import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				playfair: ['Playfair Display', 'serif']
			},
			lineHeight: {
				0.7: '0.7'
			}
		}
	},

	plugins: []
} satisfies Config;
