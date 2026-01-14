// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Layout Primitives',
			description: 'Every Layout に基づいた React レイアウトコンポーネントライブラリ',
			defaultLocale: 'ja',
			locales: {
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/martians-sheep/layout-primitives',
				},
			],
			sidebar: [
				{
					label: 'はじめに',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'コンポーネント',
					autogenerate: { directory: 'components' },
				},
			],
		}),
	],
});
