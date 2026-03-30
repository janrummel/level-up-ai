// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://janrummel.github.io',
	base: '/level-up-ai',
	redirects: {
		'/': '/level-up-ai/en/start/welcome/',
		'/de/': '/level-up-ai/de/start/welcome/',
		'/en/': '/level-up-ai/en/start/welcome/',
	},
	integrations: [
		starlight({
			title: 'Level Up AI',
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				de: { label: 'Deutsch', lang: 'de' },
			},
			plugins: [],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/janrummel/level-up-ai' }],
			head: [
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Level Up AI' } },
				{ tag: 'meta', attrs: { property: 'og:title', content: 'Level Up AI — From Vibe Coder to AI Engineer' } },
				{ tag: 'meta', attrs: { property: 'og:description', content: 'Free learning path for AI Engineering with the Vercel AI SDK. 9 levels, 41+ challenges, in English and German.' } },
				{ tag: 'meta', attrs: { property: 'og:url', content: 'https://janrummel.github.io/level-up-ai/' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://janrummel.github.io/level-up-ai/og-image.png' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
				{ tag: 'meta', attrs: { name: 'twitter:title', content: 'Level Up AI — From Vibe Coder to AI Engineer' } },
				{ tag: 'meta', attrs: { name: 'twitter:description', content: 'Free AI Engineering learning path. 9 levels, 41+ challenges, built on official sources.' } },
			],
			customCss: ['/src/custom-styles.css'],
			components: {
				Head: './src/components/Head.astro',
				Header: './src/components/Header.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Start',
					items: [
						{ slug: 'start/welcome' },
						{ slug: 'start/roadmap' },
					],
				},
				{
					label: 'Level 1 — AI SDK Basics',
					autogenerate: { directory: 'level-1-ai-sdk-basics' },
				},
				{
					label: 'Level 2 — LLM Fundamentals',
					autogenerate: { directory: 'level-2-llm-fundamentals' },
				},
				{
					label: 'Level 3 — Agents & MCP',
					autogenerate: { directory: 'level-3-agents' },
				},
				{
					label: 'Level 4 — Persistence',
					autogenerate: { directory: 'level-4-persistence' },
				},
				{
					label: 'Level 5 — Context Engineering',
					autogenerate: { directory: 'level-5-context-engineering' },
				},
				{
					label: 'Level 6 — Evals',
					autogenerate: { directory: 'level-6-evals' },
				},
				{
					label: 'Level 7 — Streaming',
					autogenerate: { directory: 'level-7-streaming' },
				},
				{
					label: 'Level 8 — Workflows',
					autogenerate: { directory: 'level-8-workflows' },
				},
				{
					label: 'Level 9 — Advanced Patterns',
					autogenerate: { directory: 'level-9-advanced' },
				},
				{
					label: 'Reference',
					translations: { de: 'Referenz' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
