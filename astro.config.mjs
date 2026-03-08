// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';

export default defineConfig({
	redirects: {
		'/': '/de/start/welcome/',
		'/de/': '/de/start/welcome/',
		'/en/': '/en/start/welcome/',
	},
	integrations: [
		starlight({
			title: 'Level Up AI',
			defaultLocale: 'de',
			locales: {
				de: { label: 'Deutsch', lang: 'de' },
				en: { label: 'English', lang: 'en' },
			},
			plugins: [starlightClientMermaid()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/janrummel/level-up-ai' }],
			customCss: ['/src/custom-styles.css'],
			sidebar: [
				{
					label: 'Start',
					translations: { en: 'Start' },
					items: [
						{ slug: 'start/welcome' },
						{ slug: 'start/roadmap' },
					],
				},
				{
					label: 'Level 1 — AI SDK Basics',
					translations: { en: 'Level 1 — AI SDK Basics' },
					autogenerate: { directory: 'level-1-ai-sdk-basics' },
				},
				{
					label: 'Level 2 — LLM Fundamentals',
					translations: { en: 'Level 2 — LLM Fundamentals' },
					autogenerate: { directory: 'level-2-llm-fundamentals' },
				},
				{
					label: 'Level 3 — Agents & MCP',
					translations: { en: 'Level 3 — Agents & MCP' },
					autogenerate: { directory: 'level-3-agents' },
				},
				{
					label: 'Level 4 — Persistence',
					translations: { en: 'Level 4 — Persistence' },
					autogenerate: { directory: 'level-4-persistence' },
				},
				{
					label: 'Level 5 — Context Engineering',
					translations: { en: 'Level 5 — Context Engineering' },
					autogenerate: { directory: 'level-5-context-engineering' },
				},
				{
					label: 'Level 6 — Evals',
					translations: { en: 'Level 6 — Evals' },
					autogenerate: { directory: 'level-6-evals' },
				},
				{
					label: 'Level 7 — Streaming',
					translations: { en: 'Level 7 — Streaming' },
					autogenerate: { directory: 'level-7-streaming' },
				},
				{
					label: 'Level 8 — Workflows',
					translations: { en: 'Level 8 — Workflows' },
					autogenerate: { directory: 'level-8-workflows' },
				},
				{
					label: 'Level 9 — Advanced Patterns',
					translations: { en: 'Level 9 — Advanced Patterns' },
					autogenerate: { directory: 'level-9-advanced' },
				},
				{
					label: 'Referenz',
					translations: { en: 'Reference' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
