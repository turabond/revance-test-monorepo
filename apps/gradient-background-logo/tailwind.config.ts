import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient':
					'bg-gradient-to-tr from-blue-100 from-10% via-pink-100 via-80% to-blue-300 to-100%'
			},
			borderRadius: {
				'1/3': '33.333333%'
			}
		}
	},

	plugins: []
} satisfies Config;
