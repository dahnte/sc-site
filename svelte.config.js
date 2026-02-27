import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-static';
import { join } from "path";

const article_path = join(import.meta.dirname, 'src/lib/layouts/article.svelte');
const about_path = join(import.meta.dirname, 'src/lib/layouts/about.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex({ 
		extensions: ['.svx', '.md'], 
		smartypants: true, 
		layout: { article: article_path, about: about_path } 
	})],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
