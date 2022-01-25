import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter(),
	}
};

export default config;
