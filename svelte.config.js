import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: vercel(),
	}
};

export default config;
