import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess(),

	kit: {
		target: '#svelte'
	}
};

export default config;
